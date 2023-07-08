import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {useStore} from '../../stores/createStore';
import s from './styles';
import ProductList from '../../components/ProductList/ProductList';
import NotSellYetIcon from '../../components/svg/NotSellYetIcon';
import {SavedStackNavigatorParamList} from '../../navigation/types';

const SavedScreen = () => {
  const store = useStore();
  const route = useRoute<RouteProp<SavedStackNavigatorParamList>>();

  useEffect(() => {
    if (route.params?.search) {
      store.products.search(route.params.search);
    }
    store.products.fetchSaved.run();
  }, [route.params?.search, store.products.savedProducts.items]);

  const list = !route.params?.search
    ? store.products.savedProducts.asArray
    : store.products.searchSavedProducts.asArray;
  return (
    <View style={s.container}>
      <ProductList list={list} />
    </View>
  );
};

export default observer(SavedScreen);
