import {getParent, getRoot, types} from 'mobx-state-tree';
import Api from '../../api';
import {MessageCollectionSchema, MessageSchema} from '../schemas';
import {asyncModel, createList} from '../utils';
import {MessageModel} from './MessageModel';

export const MessageStore = types
  .model('MessageStore', {
    messagesArray: createList('MessagesArray', {
      of: types.reference(MessageModel),
      schema: MessageCollectionSchema,
    }),
    fetch: asyncModel(fetchMessages),
  })
  .views(store => ({
    get chatId() {
      return getParent(store).id;
    },
  }))
  .actions(store => ({
    addMessage(message) {
      const result = getRoot(store).entities.normalize(message, MessageSchema);

      store.messagesArray.add(result);
    },
  }));

function fetchMessages() {
  return async function fetchMessagesFlow(flow, store) {
    const res = await Api.Chats.getMessages(store.chatId);
    store.messagesArray.set(res.data);
  };
}
