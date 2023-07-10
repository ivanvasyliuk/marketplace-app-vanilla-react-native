import {NavigatorScreenParams} from '@react-navigation/native';
import {IChatModel} from '../../stores/Chats/ChatModel';
import {AppTabNavigatorParamList} from '../AppTabNavigator/types';
import screens from '../screens';

export type AppStackNavigatorParamList = {
  [screens.TabNavigator]: NavigatorScreenParams<AppTabNavigatorParamList>;
  [screens.CreatePostModal]: undefined;
  [screens.Chat]: {
    chat: IChatModel;
  };
  [screens.FiltersModal]: undefined;
};
