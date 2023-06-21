import {types} from 'mobx-state-tree';
import Api from '../../api';
import {ChatCollectionSchema} from '../schemas';
import {asyncModel} from '../utils';
import {ChatModel} from './ChatModel';

export const ChatStore = types
  .model('Chat', {
    items: types.array(types.reference(ChatModel)),
    fetch: asyncModel(fetchChats),
  })
  .views(store => ({
    get list() {
      return store.items.slice();
    },
    getById(id) {
      return store.items.find(i => i.id === id);
    },
  }))
  .actions(store => ({
    setItems(items) {
      store.items = items;
    },
    handleMessage(message) {
      if (message.type == 'ADD') {
        const chat = store.getById(message.message, id);

        if (typeof chat !== 'undefined') {
          chat.messages.addMessage(message.message);
        }
      }
    },
  }));

function fetchChats() {
  return async function fetchChatsFlow(flow, store) {
    const res = await Api.Chats.getList();

    const result = flow.merge(res.data, ChatCollectionSchema);

    store.setItems(result);
  };
}
