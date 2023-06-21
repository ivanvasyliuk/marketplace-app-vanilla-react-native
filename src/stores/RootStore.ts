import {types} from 'mobx-state-tree';
import Api from '../api';
import {AuthStore} from './Auth/AuthStore';
import {ChatStore} from './Chats/ChatStore';
import {EntitiesStore} from './EntitiesStore';
import {ProductsStore} from './Products/ProductsStore';
import {ViewerStore} from './ViewerStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    entities: types.optional(EntitiesStore, {}),
    chats: types.optional(ChatStore, {}),
    products: types.optional(ProductsStore, {}),
  })
  .actions(store => ({
    async bootstrap() {
      try {
        const token = localStorage.getItem('__token');
        // TODO: check for undifined token

        Api.Auth.setToken(token);
        // SocketApi.init(token)

        const res = await Api.Account.getUser();

        store.viewer.setViewer(res.data);
        // store.auth.setIsLoggedIn(true)
      } catch (err) {
        console.log(err);
      }
    },
    // subscribeToEvents() {
    //   SocketApi.handleMessages((message) => {
    //     console.log(message);
    //     //TODO : Handle message
    //   });
    // },
  }));
