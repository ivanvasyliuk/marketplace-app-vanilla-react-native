import {Text, View} from 'react-native';
import {useStore} from '../../stores/createStore';
import s from './styles';
import {FlashList} from '@shopify/flash-list';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {observer} from 'mobx-react';
import ProductList from '../../components/ProductList/ProductList';

// const BrowseScreen = () => {
//   const store = useStore();
//   console.log('store', store);

//   return (
//     <View style={s.container}>
//       <Text>
//         <AntDesign name="windows" style={{color: 'green', fontSize: 60}} />
//         <AntDesign name="search1" size={60} color="red" />
//       </Text>
//     </View>
//   );
// };
// export default BrowseScreen;

const BrowseScreen = () => {
  const navigation = useNavigation();
  const store = useStore();
  const {params} = useRoute();

  const list = store.products.latestProducts.latestProductsArray.asArray;

  useEffect(() => {
    store.products.latestProducts.fetchLatest.run();
  }, []);

  return (
    <View style={s.container}>
      <ProductList list={list} />
    </View>
  );
};

export default observer(BrowseScreen);
