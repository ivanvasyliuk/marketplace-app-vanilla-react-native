import {StackNavigationProp} from '@react-navigation/stack';
import {IProductModel} from '../../stores/Products/ProductModel';
import {IUserModel} from '../../stores/users/UserModel';
import screens from '../screens';

export type PostStackNavigatorParamList = {
  [screens.PostDetails]: {
    product: IProductModel;
  };
  [screens.Profile]: {
    owner: IUserModel;
  };
};

export type PostNavigatorNavigationPropType<
  TScreenName extends keyof PostStackNavigatorParamList,
> = StackNavigationProp<PostStackNavigatorParamList, TScreenName>;
