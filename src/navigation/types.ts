import screens from './screens';

export type BrowseStackNavigatorParamList = {
  [screens.Browse]: {
    search: string;
  };
  [screens.PostDetailsNavigator]: undefined;
  [screens.Filters]: undefined;
};
export type ProfileStackNavigatorParamList = {
  [screens.Profile]: undefined;
};
export type InboxStackNavigatorParamList = {
  [screens.Inbox]: undefined;
};
export type SavedStackNavigatorParamList = {
  [screens.Saved]: {
    search: string;
  };
  [screens.PostDetailsNavigator]: undefined;
};
export type FiltersStackNavigatorParamList = {
  [screens.FiltersScreen]: undefined;
};
export type CreatePostStackNavigatorParamList = {
  [screens.CreatePost]: {
    onSubmit: () => void;
  };
};
export type AuthStackNavigatorParamList = {
  [screens.Login]: undefined;
  [screens.Register]: undefined;
};

export type BottomTabNavigatorParamList = {
  [screens.BrowseTab]: undefined;
  [screens.SavedTab]: undefined;
  [screens.InboxTab]: undefined;
  [screens.CreatePostTab]: undefined;
  [screens.ProfileTab]: undefined;
};
export type RootStackNavigatorParamList = {
  [screens.Auth]: undefined;
  [screens.MainApp]: undefined;
  [screens.CreatePostModal]: undefined;
  [screens.Chat]: undefined;
  [screens.FiltersModal]: undefined;
};
