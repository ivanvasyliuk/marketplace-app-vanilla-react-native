import {getRoot, types} from 'mobx-state-tree';
import Api from '../../api';
import {asyncModel} from '../utils';

export const AuthStore = types.model('AuthStore', {
  login: asyncModel(loginFlow),
  logout: asyncModel(logout),
});

function loginFlow({password, email}) {
  return async (flow, store, rootStore) => {
    const res = await Api.Auth.login({password, email});
    const {token, user} = res.data;
    Api.Auth.setToken(token);
    rootStore.viewer.setViewer(user);
  };
}
function logout() {
  return async function logoutFlow(flow, store, rootStore) {
    Api.Auth.setToken('');
    rootStore.viewer.setViewer(undefined);
  };
}
