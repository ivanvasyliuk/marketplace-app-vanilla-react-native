import {IChatModel} from '../../stores/Chats/ChatModel';
import screens from '../screens';

export type ChatStackNavigatorParamList = {
  [screens.Chat]: {
    chat: IChatModel;
  };
};
