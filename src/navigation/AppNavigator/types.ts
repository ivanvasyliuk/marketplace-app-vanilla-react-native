import {
  CompositeNavigationProp,
  NavigationProp,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IChatModel} from '../../stores/Chats/ChatModel';
import {AppTabNavigatorParamList} from '../AppTabNavigator/types';
import {CreatePostStackNavigatorParamList} from '../CreatePostNavigator/types';
import {FiltersStackNavigatorParamList} from '../FiltersNavigator/types';
import screens from '../screens';

export type AppStackNavigatorParamList = {
  [screens.TabNavigator]: NavigatorScreenParams<AppTabNavigatorParamList>;
  [screens.CreatePostModal]: NavigatorScreenParams<CreatePostStackNavigatorParamList>;
  [screens.Chat]: {
    chat: IChatModel;
  };
  [screens.FiltersModal]: NavigatorScreenParams<FiltersStackNavigatorParamList>;
};

export type CompositeNavigationWithAppStackNavigatorType<
  T extends NavigationProp<ParamListBase, string, any, any>,
> = CompositeNavigationProp<T, StackNavigationProp<AppStackNavigatorParamList>>;
