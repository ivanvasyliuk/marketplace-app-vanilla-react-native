import screens from './screens';

export type BrowseStackNavigatorParamList = {};

export type BottomTabNavigatorParamList = {
  Browse: BrowseStackNavigatorParamList;
  Feed: undefined;
  Settings: undefined;
};
export type RootStackNavigatorParamList = {
  [screens.MainApp]: {};
};
