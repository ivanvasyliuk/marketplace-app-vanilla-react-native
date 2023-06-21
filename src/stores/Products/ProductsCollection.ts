import Api from '../../api';
import {useStore} from '../createStore';
import {Product} from '../schemas';
import {asyncModel, suspenseModel, createCollection} from '../utils';
import {ProductModel} from './ProductModel';

export function useProductsCollection() {
  const store = useStore();
  return store.entities.products;
}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
  productById: suspenseModel(productById),
});

function getProduct(id) {
  return async function getProductFlow(flow, store, Root) {
    try {
      const res = await Api.Products.getById(id);
      flow.merge(res.data, Product);

      Root.entities.merge(entities);
    } catch (err) {
      console.log(err);
    }
  };
}

function productById(id) {
  return (flow, store) => {
    if (store.get(id)) {
      return store.get(id);
    }
    return async () => {
      const res = await Api.Products.getById(id);

      store.add(res.data.id, res.data);
    };
  };
}
