import {flow, types} from 'mobx-state-tree';
import Api from '../../api';

// const testModel = asyncModel(loginFlow);

// testModel.run({ password: '1', email: '1' });

export const LoginStore = types
  .model('LoginStore', {
    isLoading: false,
    isError: false,
  })
  .actions(store => ({
    run: flow(function* ({password, email}) {
      try {
        store.isLoading = true;
        store.isError = false;

        const res = yield Api.Auth.login({password, email});
        store.isLoading = false;
      } catch (error) {
        store.isError = true;
      }
    }),
  }));
