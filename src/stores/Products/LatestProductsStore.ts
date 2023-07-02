import {types} from 'mobx-state-tree';
import Fuse from 'fuse.js';
import Api from '../../api';
import {PAGE_SIZE} from '../../constants/products';
import {LatestProductCollection} from '../schemas';
import {asyncModel, createList} from '../utils';
import {ProductModel} from './ProductModel';

export const LatestProductsStore = types
  .model('LatestProductsStore', {
    latestProducts: createList('LatestProductsArray', {
      of: types.reference(ProductModel),
      schema: LatestProductCollection,
    }),
    searchProducts: createList('SearchLatestProducts', {
      of: types.reference(types.late(() => ProductModel)),
      schema: LatestProductCollection,
    }),
    hasNoMore: false,
    fetchLatest: asyncModel(fetchLatest),
    fetchMore: asyncModel(fetchMore, false),
  })
  .views(store => ({
    get fuse() {
      const fuse = new Fuse(store.latestProducts.items, {
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
    setHasNoMore(isHasNoMore) {
      store.hasNoMore = isHasNoMore;
    },
    search(text) {
      const fuse = store.fuse;
      const result = fuse.search(text);
      store.searchProducts.set(result.map(product => product.item));
    },
  }));

function fetchLatest() {
  return async function fetchLatestFlow(flow, store, rootStore) {
    store.setHasNoMore(false);
    const res = await Api.Products.fetchLatest();
    store.latestProducts.set(res.data);

    store.setHasNoMore(res.data.length < PAGE_SIZE);
  };
}

function fetchMore() {
  return async function fetchMoreFlow(flow, store, rootStore) {
    if (
      store.fetchLatest.isLoading ||
      flow.isLoading ||
      store.hasNoMore ||
      store.items.length === 0
    ) {
      return;
    }
    try {
      flow.start();
      const from = store.items[store.items.length - 1];

      const res = await Api.Products.fetchMore({
        from: from.id,
        limit: PAGE_SIZE,
      });
      store.latestProducts.set(res.data);

      if (res.data.length < PAGE_SIZE) {
        store.setHasNoMore(true);
      }

      flow.success();
    } catch (error) {}
  };
}
