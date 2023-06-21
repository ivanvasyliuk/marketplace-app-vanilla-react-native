import {useStore} from '../createStore';
import {createCollection} from '../utils';
import {MessageModel} from './MessageModel';

export function useMessagesCollection() {
  const store = useStore();
  return store.entities.chats;
}

export const MessagesCollection = createCollection(MessageModel);
