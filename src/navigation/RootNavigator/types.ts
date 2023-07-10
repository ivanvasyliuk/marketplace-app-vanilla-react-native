import {
  CompositeNavigationProp,
  NavigationProp,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IChatModel} from '../../stores/Chats/ChatModel';
import {AppTabNavigatorParamList} from '../AppTabNavigator/types';
import screens from '../screens';

export type RootStackNavigatorParamList = {
  [screens.Auth]: undefined;
  [screens.MainApp]: NavigatorScreenParams<AppTabNavigatorParamList>;
  [screens.CreatePostModal]: undefined;
  [screens.Chat]: {
    chat: IChatModel;
  };
  [screens.FiltersModal]: undefined;
};

export type CompositeNavigationWithAppNavigatorType<
  T extends NavigationProp<ParamListBase, string, any, any>,
> = CompositeNavigationProp<
  T,
  StackNavigationProp<RootStackNavigatorParamList>
>;
