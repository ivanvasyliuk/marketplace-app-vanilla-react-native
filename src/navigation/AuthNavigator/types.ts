import screens from '../screens';

export type AuthStackNavigatorParamList = {
  [screens.Login]: {
    resetAction: () => void;
  };
  [screens.Register]: {
    resetAction: () => void;
  };
};
