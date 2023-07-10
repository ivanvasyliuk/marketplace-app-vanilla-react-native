import screens from '../screens';

export type SavedStackNavigatorParamList = {
  [screens.Saved]: {
    search: string;
  };
  [screens.PostDetailsNavigator]: undefined;
};
