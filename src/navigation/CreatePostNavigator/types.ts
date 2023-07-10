import screens from '../screens';

export type CreatePostStackNavigatorParamList = {
  [screens.CreatePost]: {
    onSubmit?: () => void;
  };
};
