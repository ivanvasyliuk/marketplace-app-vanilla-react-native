import {
  CompositeNavigationProp,
  NavigationProp,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BrowseStackNavigatorParamList} from '../BrowseNavigator/types';
import {CreatePostStackNavigatorParamList} from '../CreatePostNavigator/types';
import {InboxStackNavigatorParamList} from '../InboxNavigator/types';
import {ProfileStackNavigatorParamList} from '../ProfileNavigator/types';
import {SavedStackNavigatorParamList} from '../SavedNavigator/types';
import screens from '../screens';

export type AppTabNavigatorParamList = {
  [screens.BrowseTab]: NavigatorScreenParams<BrowseStackNavigatorParamList>;
  [screens.SavedTab]: NavigatorScreenParams<SavedStackNavigatorParamList>;
  [screens.InboxTab]: NavigatorScreenParams<InboxStackNavigatorParamList>;
  [screens.CreatePostTab]: NavigatorScreenParams<CreatePostStackNavigatorParamList>;
  [screens.ProfileTab]: NavigatorScreenParams<ProfileStackNavigatorParamList>;
};

export type CompositeNavigationWithAppTabNavigatorType<
  T extends NavigationProp<ParamListBase, string, any, any>,
> = CompositeNavigationProp<T, StackNavigationProp<AppTabNavigatorParamList>>;
