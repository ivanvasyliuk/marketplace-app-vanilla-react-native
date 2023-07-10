import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import {observer} from 'mobx-react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Touchable from '../Touchable/Touchable';
import s from './styles';
import {IProductModel} from '../../stores/Products/ProductModel';

interface IFavoriteButtonProps {
  product: IProductModel;
  style: ViewStyle;
}

const FavoriteButton: FC<IFavoriteButtonProps> = ({product, style}) => {
  return (
    <View style={style}>
      <Touchable
        style={s.container}
        isOpacity
        onPress={() => product.toogleFavorite.run(product)}>
        {product.saved ? (
          <Ionicons style={[s.grayButton]} name="md-bookmark" size={24} />
        ) : (
          <Ionicons
            style={[s.grayButton]}
            name="md-bookmark-outline"
            size={24}
          />
        )}
      </Touchable>
    </View>
  );
};
export default observer(FavoriteButton);
