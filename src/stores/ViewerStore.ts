import {types} from 'mobx-state-tree';

const ViewerModel = types.model('ViewerModel', {
  id: types.string,
  fullName: types.string,
  location: types.maybeNull(types.string),
  avatar: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  createdAt: types.string,
  updatedAt: types.string,
  email: types.string,
});

export const ViewerStore = types
  .model('ViewerStore', {
    userModel: types.maybe(ViewerModel),
  })
  .views(store => ({
    get initials() {
      const array = store.userModel.fullName.split(' ');
      return array.map(letter => letter[0]).concat();
    },
    get userId() {
      return store.userModel?.id;
    },
  }))
  .actions(store => ({
    setViewer(user) {
      store.userModel = user;
    },
  }));
