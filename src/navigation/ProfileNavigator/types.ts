import {IUserModel} from '../../stores/users/UserModel';
import screens from '../screens';

export type ProfileStackNavigatorParamList = {
  [screens.Profile]: {owner: IUserModel};
  [screens.PostDetailsNavigator]: undefined;
  [screens.Settings]: undefined;
};
