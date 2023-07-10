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
