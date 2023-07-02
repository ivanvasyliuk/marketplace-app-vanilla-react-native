import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useStore} from '../../stores/createStore';
import ProductList from '../../components/ProductList/ProductList';
import SearchList from '../../components/SearchList/SearchList';
import FiltersListItem from '../../components/FiltersListItem/FiltersListItem';
import s from './styles';
import FiltersList from '../../components/FiltersList/FiltersList';

const BrowseScreen = () => {
  const [filtersValues, setFiltersValues] = useState({
    price: '',
    search: '',
    sortBy: '',
  });
  const navigation = useNavigation();
  const store = useStore();
  const {params} = useRoute();

  const list = store.products.latestStore.latestProducts.asArray;

  const filtersContainerVisible =
    Object.values(filtersValues).filter(i => i).length > 0;

  function handlerFiltersSubmit(values) {
    setFiltersValues({...filtersValues, ...values});

    console.log('filters submit');
  }

  async function onRefresh() {
    await store.products.latestStore.fetchLatest.run();
  }

  useEffect(() => {
    if (params?.search) {
      store.products.latestStore.search(params.search);
    }
    store.products.latestStore.fetchLatest.run();
    navigation.setParams({
      filtersSubmit: handlerFiltersSubmit,
      filtersValues: filtersValues,
    });
  }, [params?.search, filtersValues]);

  return (
    <>
      {!!params?.search && (
        <SearchList list={store.products.latestStore.searchProducts.asArray} />
      )}
      {filtersContainerVisible && (
        <FiltersList list={Object.values(filtersValues).filter(item => item)} />
      )}
      <View style={s.container}>
        <ProductList
          isRefreshing={store.products.latestStore.fetchLatest.isLoading}
          onRefresh={onRefresh}
          list={list}
        />
      </View>
    </>
  );
};

export default observer(BrowseScreen);
