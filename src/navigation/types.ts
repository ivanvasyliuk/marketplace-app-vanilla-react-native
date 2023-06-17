import screens from './screens';

export type BrowseStackNavigatorParamList = {};

export type BottomTabNavigatorParamList = {
  [screens.BrowseTab]: undefined;
  [screens.SavedTab]: undefined;
  [screens.InboxTab]: undefined;
  [screens.CreatePostTab]: undefined;
  [screens.ProfileTab]: undefined;
};
export type RootStackNavigatorParamList = {
  [screens.MainApp]: {};
};
