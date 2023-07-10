// import {NavigatorScreenParams} from '@react-navigation/native';
// import {filtersValuesProps} from '../screens/Browse/BrowseScreen';
// import {IChatModel} from '../stores/Chats/ChatModel';
// import {IProductModel} from '../stores/Products/ProductModel';
// import {IUserModel} from '../stores/users/UserModel';
// import screens from './screens';

// export type BrowseStackNavigatorParamList = {
//   [screens.Browse]: {
//     search?: string;
//     filtersSubmit?: () => void;
//     filtersValues?: filtersValuesProps;
//   };
//   [screens.PostDetailsNavigator]: undefined;
//   [screens.Filters]: undefined;
// };
// export type ProfileStackNavigatorParamList = {
//   [screens.Profile]: {owner: IUserModule};
//   [screens.PostDetailsNavigator]: undefined;
//   [screens.Settings]: undefined;
// };
// export type InboxStackNavigatorParamList = {
//   [screens.Inbox]: undefined;
// };
// export type SavedStackNavigatorParamList = {
//   [screens.Saved]: {
//     search: string;
//   };
//   [screens.PostDetailsNavigator]: undefined;
// };
// export type FiltersStackNavigatorParamList = {
//   [screens.FiltersScreen]: {
//     filtersValues: filtersValuesProps;
//     filtersSubmit: (filtersValues: filtersValuesProps) => void;
//   };
// };
// export type CreatePostStackNavigatorParamList = {
//   [screens.CreatePost]: undefined;
// };
// export type AuthStackNavigatorParamList = {
//   [screens.Login]: undefined;
//   [screens.Register]: undefined;
// };

// export type BottomTabNavigatorParamList = {
//   [screens.BrowseTab]: NavigatorScreenParams<BrowseStackNavigatorParamList>;
//   [screens.SavedTab]: NavigatorScreenParams<SavedStackNavigatorParamList>;
//   [screens.InboxTab]: NavigatorScreenParams<InboxStackNavigatorParamList>;
//   [screens.CreatePostTab]: NavigatorScreenParams<CreatePostStackNavigatorParamList>;
//   [screens.ProfileTab]: NavigatorScreenParams<ProfileStackNavigatorParamList>;
// };
// export type RootStackNavigatorParamList = {
//   [screens.Auth]: undefined;
//   [screens.MainApp]: NavigatorScreenParams<AppTabNavigatorParamList>;
//   [screens.CreatePostModal]: undefined;
//   [screens.Chat]: undefined;
//   [screens.FiltersModal]: undefined;
// };

// export type PostScreenParamList = {
//   [screens.PostDetails]: {
//     product: IProductModel;
//   };
// };
// export type ChatScreenParamList = {
//   [screens.Chat]: {
//     chat: IChatModule;
//   };
// };
