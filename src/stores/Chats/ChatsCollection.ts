import {useStore} from '../createStore';
import {createCollection} from '../utils';
import {ChatModel} from './ChatModel';

export function useChatsCollection() {
  const store = useStore();
  return store.entities.chats;
}

export const ChatsCollection = createCollection(ChatModel);
