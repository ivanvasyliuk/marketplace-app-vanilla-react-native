import {getParent, types} from 'mobx-state-tree';
import Api from '../../api';
import Fuse from 'fuse.js';
import {LatestProductCollection, Product} from '../schemas';
import {asyncModel, createList} from '../utils';
import {ProductModel} from './ProductModel';

export const OwnProductStore = types
  .model('OwnProducts', {
    ownProductsArray: createList('LatestProductsArray', {
      of: types.reference(types.late(() => ProductModel)),
      schema: LatestProductCollection,
    }),
    searchProducts: createList('SearchLatestProducts', {
      of: types.reference(types.late(() => ProductModel)),
      schema: LatestProductCollection,
    }),
    fetch: asyncModel(fetchOwnProducts),
    createProduct: asyncModel(createProduct),
  })
  .views(store => ({
    get fuse() {
      const fuse = new Fuse(store.items, {
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
      store.searchProducts.set(result.map(product => product.item));
    },
  }));

function fetchOwnProducts(id) {
  return async function fetchOwnProductsFlow(flow, store) {
    const userStore = getParent(store);
    const userId = userStore.id;
    const res = await Api.Products.byUserId(id);
    store.ownProductsArray.set(res.data.list);
  };
}

function createProduct(values) {
  return async function createProductFlow(flow, store, rootStore) {
    const res = await Api.Products.createProduct(values);

    const result = flow.merge(res.data, Product);
    store.ownProductsArray.add(result);
  };
}
