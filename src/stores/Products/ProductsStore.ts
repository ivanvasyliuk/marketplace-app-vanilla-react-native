import {types} from 'mobx-state-tree';
import Fuse from 'fuse.js';
import {LatestProductCollection} from '../schemas';
import {asyncModel, createList} from '../utils';
import {LatestProductsStore} from './LatestProductsStore';
import {OwnProductStore} from './OwnProductsStore';
import {ProductModel} from './ProductModel';
import Api from '../../api';

export const ProductsStore = types
  .model('ProductsStore', {
    ownStore: types.optional(OwnProductStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    savedProducts: createList('savedProducts', {
      of: types.reference(ProductModel),
      schema: LatestProductCollection,
    }),
    searchSavedProducts: createList('searchSavedProducts', {
      of: types.reference(types.reference(types.late(() => ProductModel))),
      schema: LatestProductCollection,
    }),
    fetchSaved: asyncModel(fetchSaved),
  })
  .views(store => ({
    get fuse() {
      const fuse = new Fuse(store.savedProducts.items, {
        keys: ['title', 'description'],
        shouldSort: true,
        includeMatches: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        findAllMatches: true,
      });
      return fuse;
    },
  }))
  .actions(store => ({
    search(text) {
      const fuse = store.fuse;
      const result = fuse.search(text);
      store.searchSavedProducts.set(result.map(product => product.item));
    },
  }));

function fetchSaved() {
  return async function fetchSavedFlow(flow, store, rootStore) {
    await Api.Products.fetchSaved();
  };
}
