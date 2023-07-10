import {NavigatorScreenParams} from '@react-navigation/native';
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
