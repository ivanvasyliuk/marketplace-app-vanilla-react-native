import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react';
// import ProductList from '../../components/Products/ProductList/ProductList';
// import {useStore} from '../../stores/createStore';
import s from './styles';

const SavedScreen = () => {
  // const store = useStore();
  // const route = useRoute();

  // useEffect(() => {
  //   if (route.params?.search) {
  //     store.products.search(route.params.search);
  //   }
  //   store.products.fetchSaved.run();
  // }, [route.params?.search, store.products.savedProducts.items]);

  // const list = !route.params?.search
  //   ? store.products.savedProducts.asArray
  //   : store.products.searchSavedProducts.asArray;

  return (
    <View style={s.container}>
      <Text>saved</Text>
      {/* <ProductList list={list} /> */}
    </View>
  );
};

export default observer(SavedScreen);
