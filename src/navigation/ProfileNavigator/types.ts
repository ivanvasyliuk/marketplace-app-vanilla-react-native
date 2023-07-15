import {NavigatorScreenParams} from '@react-navigation/native';
import {IUserModel} from '../../stores/users/UserModel';
import {PostStackNavigatorParamList} from '../PostNavigator/types';
import screens from '../screens';

export type ProfileStackNavigatorParamList = {
  [screens.Profile]: {owner: IUserModel};
  [screens.PostDetailsNavigator]: NavigatorScreenParams<PostStackNavigatorParamList>;
  [screens.Settings]: undefined;
};
