import {getRoot, Instance, types} from 'mobx-state-tree';
import Api from '../../api';
import {ProductModel} from '../Products/ProductModel';
import {MessageSchema} from '../schemas';
import {UserModel} from '../users/UserModel';
import {asyncModel} from '../utils';
import {MessageModel} from './MessageModel';
import {MessageStore} from './MessageStore';

export interface IChatModel extends Instance<typeof ChatModel> {}

export const ChatModel = types
  .model('Chat', {
    id: types.identifierNumber,
    productId: types.number,
    ownerId: types.string,
    createdAt: types.number,
    updatedAt: types.number,
    message: types.reference(MessageModel),
    product: types.reference(ProductModel),

    messages: types.optional(MessageStore, {}),
    user: types.safeReference(UserModel),

    sendMessage: asyncModel(sendMessage),
  })
  .views(store => ({
    get owner() {
      return getRoot(store).entities.users.get(store.ownerId);
    },
  }))

  .preProcessSnapshot(snapshot => ({
    ...snapshot,
    product: snapshot.product || snapshot.productId,
    participants: undefined,
    user: snapshot.participants[0],
  }));

function sendMessage(text: string) {
  return async function sendMessageFlow(flow, store) {
    const res = await Api.Chats.sendMessage(store.id, text);
    const result = flow.merge(res.data, MessageSchema);

    store.messages.messagesArray.add(result);
    //
  };
}
