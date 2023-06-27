import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useStore} from '../../stores/createStore';
import s from './styles';
import {FlashList} from '@shopify/flash-list';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {observer} from 'mobx-react';
import ProductList from '../../components/ProductList/ProductList';
import SearchList from '../../components/SearchList/SearchList';
import FiltersListItem from '../../components/FiltersListItem/FiltersListItem';

const BrowseScreen = () => {
  const [filtersValues, setFiltersValues] = useState({
    price: '',
    search: '',
    sortBy: '',
  });
  const navigation = useNavigation();
  const store = useStore();
  const {params} = useRoute();

  const list = store.products.latestProducts.latestProductsArray.asArray;

  const filtersContainerVisible =
    Object.values(filtersValues).filter(i => i).length > 0;

  function handlerFiltersSubmit(values) {
    setFiltersValues({...filtersValues, ...values});

    console.log('filters submit');
  }

  useEffect(() => {
    if (params?.search) {
      store.products.latestProducts.search(params.search);
    }
    store.products.latestProducts.fetchLatest.run();
    // navigation.setParams({
    //   filtersSubmit: handlerFiltersSubmit,
    //   filtersValues: filtersValues,
    // });
  }, [params?.search, filtersValues]);

  return (
    <>
      {!!params?.search && (
        <SearchList
          list={store.products.latestProducts.searchProducts.asArray}
        />
      )}
      {filtersContainerVisible && (
        <View style={{height: 52, justifyContent: 'center'}}>
          <FlashList
            data={Object.values(filtersValues).filter(item => item)}
            renderItem={({item}) => (
              <FiltersListItem
                setFiltersValues={setFiltersValues}
                filtersValues={filtersValues}
                filter={item}
              />
            )}
            horizontal
          />
        </View>
      )}
      <View style={s.container}>
        <ProductList list={list} />
      </View>
    </>
  );
};

export default observer(BrowseScreen);
