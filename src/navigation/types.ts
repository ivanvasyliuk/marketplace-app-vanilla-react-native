import screens from './screens';

export type BrowseStackNavigatorParamList = {
  [screens.Browse]: undefined;
  [screens.PostDetailsNavigator]: undefined;
};
export type ProfileStackNavigatorParamList = {
  [screens.Profile]: undefined;
};
export type InboxStackNavigatorParamList = {
  [screens.Inbox]: undefined;
};
export type SavedStackNavigatorParamList = {
  [screens.Saved]: undefined;
};
export type CreatePostStackNavigatorParamList = {
  [screens.CreatePost]: undefined;
};

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
