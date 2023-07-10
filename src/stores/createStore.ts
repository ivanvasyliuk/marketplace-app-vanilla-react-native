import {createContext, useContext} from 'react';
import {IRootStoreModel, RootStore} from './RootStore';

export function createStore() {
  const root = RootStore.create();

  return root;
}

const MSTContext = createContext(null);

// eslint-disable-next-line prefer-destructuring
export const Provider = MSTContext.Provider;

export function useStore(): IRootStoreModel;
export function useStore<T>(v: UseMstPropsType<T>): T;

export function useStore<T>(mapStateToProps?: UseMstPropsType<T>) {
  const store = useContext(MSTContext);

  if (store && mapStateToProps) {
    return mapStateToProps(store);
  }

  return store;
}
