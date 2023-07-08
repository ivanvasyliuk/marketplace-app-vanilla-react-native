import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useStore} from '../../stores/createStore';
import ProductList from '../../components/ProductList/ProductList';
import SearchList from '../../components/SearchList/SearchList';
import FiltersList from '../../components/FiltersList/FiltersList';
import {BrowseStackNavigatorParamList} from '../../navigation/types';
import s from './styles';

export type filtersValuesProps = {
  price: string | string[];
  search: string;
  sortBy: string;
};

const BrowseScreen = () => {
  const [filtersValues, setFiltersValues] = useState<filtersValuesProps>({
    price: '',
    search: '',
    sortBy: '',
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<BrowseStackNavigatorParamList>>();
  const store = useStore();
  const {params} = useRoute<RouteProp<BrowseStackNavigatorParamList>>();

  const list = store.products.latestStore.latestProducts.asArray;

  const filtersContainerVisible =
    Object.values(filtersValues).filter(i => i).length > 0;

  function handlerFiltersSubmit(values: filtersValuesProps) {
    setFiltersValues({...filtersValues, ...values});
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
        <FiltersList
          list={Object.values(filtersValues).filter(item => item)}
          filtersValues={filtersValues}
          setFiltersValues={setFiltersValues}
        />
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
