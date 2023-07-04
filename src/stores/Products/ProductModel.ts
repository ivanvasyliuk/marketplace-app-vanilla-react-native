import {getRoot, getSnapshot, Instance, types} from 'mobx-state-tree';
import Api from '../../api';
import {ChatSchema} from '../schemas';
import {UserModel} from '../users/UserModel';
import {asyncModel} from '../utils';

export interface IProductModule extends Instance<typeof ProductModel> {}

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifierNumber,
    ownerId: types.string,
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.maybeNull(types.string),
    price: types.number,
    saved: false,
    createdAt: types.string,
    updatedAt: types.string,
    owner: types.reference(UserModel),
    toogleFavorite: asyncModel(toogleFavorite),
    createChat: asyncModel(createChat, false),
  })

  .preProcessSnapshot(snapshot => ({
    ...snapshot,
    owner: snapshot.ownerId,
  }))

  .actions(store => ({
    update(product: Partial<IProductModule>) {
      Object.assign(store, product);
      if (store.saved) {
        getRoot(store).products.savedProducts.add(store);
      } else {
        getRoot(store).products.savedProducts.removeById(store.id);
      }
    },
  }));

function createChat(message) {
  return async function createChatFlow(flow, store) {
    let chatId;
    try {
      flow.start();
      const res = await Api.Chats.createChat(store.id, message);
      chatId = res.data.id;
      res.data.participants = [getSnapshot(store.owner)];

      flow.marge(res.data, ChatSchema);
      flow.success();
    } catch (err) {
      console.log(err);
      flow.error(err);

      throw err;
    }
    return chatId;
  };
}

function toogleFavorite(product: Partial<IProductModule>) {
  return async function toogleFavoriteFlow(flow, store, rootStore) {
    try {
      flow.start();
      store.update({saved: !store.saved});
      await Api.Products.update(store);
      flow.success();
    } catch (error) {
      flow.error();
    }
  };
}
