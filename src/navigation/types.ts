import {filtersValuesProps} from '../screens/Browse/BrowseScreen';
import {IProductModule} from '../stores/Products/ProductModel';
import {IUserModule} from '../stores/users/UserModel';
import screens from './screens';

export type BrowseStackNavigatorParamList = {
  [screens.Browse]: {
    search: string | undefined;
    filtersSubmit: () => void | undefined;
    filtersValues: filtersValuesProps | undefined;
  };
  [screens.PostDetailsNavigator]: undefined;
  [screens.Filters]: undefined;
};
export type ProfileStackNavigatorParamList = {
  [screens.Profile]: {owner: IUserModule};
  [screens.PostDetailsNavigator]: undefined;
  [screens.Settings]: undefined;
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
  [screens.FiltersScreen]: {
    filtersValues: filtersValuesProps;
    filtersSubmit: (filtersValues: filtersValuesProps) => void;
  };
};
export type CreatePostStackNavigatorParamList = {
  [screens.CreatePost]: undefined;
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

export type PostScreenParamList = {
  [screens.PostDetails]: {
    product: IProductModule;
  };
};
