import {Instance, types} from 'mobx-state-tree';
// import { OwnProductStore } from "../Products/OwnProductsStore";

export interface IUserModel extends Instance<typeof UserModel> {}

export const UserModel = types.model('UserModel', {
  id: types.identifier,
  fullName: types.string,
  location: types.maybeNull(types.string),
  avatar: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  createdAt: types.string,
  updatedAt: types.string,
  email: types.maybe(types.string),

  // ownProducts: types.optional(OwnProductStore, {}),
});
