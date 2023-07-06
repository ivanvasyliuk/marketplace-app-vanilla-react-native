import React, {FC} from 'react';
import {observer} from 'mobx-react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import screens from '../../navigation/screens';
import Touchable from '../Touchable/Touchable';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import s from './styles';
import {IProductModule} from '../../stores/Products/ProductModel';

interface IProductItemProps {
  product: IProductModule;
  index: number;
}

const ProductItem: FC<IProductItemProps> = ({product, index}) => {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.PostDetailsNavigator, {
      screen: screens.PostDetails,
      params: {product: product},
    });
  }

  return (
    <Touchable onPress={onPress}>
      <View style={[s.container, index % 2 == 0 ? s.left : s.right]}>
        <Image style={s.image} source={{uri: product.photos[0]}} />
        <Text style={s.itemTitle}>{product.title}</Text>
        <Text style={s.itemPrice}>${product.price}</Text>
        <FavoriteButton product={product} style={s.saveButton} />
      </View>
    </Touchable>
  );
};
export default observer(ProductItem);
