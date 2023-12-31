import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import screens from '../../navigation/screens';
import Touchable from '../Touchable/Touchable';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import {IProductModel} from '../../stores/Products/ProductModel';
import {BrowseStackNavigatorParamList} from '../../navigation/BrowseNavigator/types';
import s from './styles';

interface IProductItemProps {
  product: IProductModel;
  index: number;
}

const ProductItem: FC<IProductItemProps> = ({product, index}) => {
  const navigation =
    useNavigation<NavigationProp<BrowseStackNavigatorParamList, 'Browse'>>();

  function onPress() {
    navigation.navigate(screens.PostDetailsNavigator, {
      screen: screens.PostDetails,
      params: {product: product},
    });
  }

  return (
    <Touchable onPress={onPress}>
      <View style={[s.container, index % 2 == 0 ? s.left : s.right]}>
        <Image style={s.image} source={{uri: product.photos?.[0]}} />
        <Text style={s.itemTitle}>{product.title}</Text>
        <Text style={s.itemPrice}>${product.price}</Text>
        <FavoriteButton product={product} style={s.saveButton} />
      </View>
    </Touchable>
  );
};
export default observer(ProductItem);
