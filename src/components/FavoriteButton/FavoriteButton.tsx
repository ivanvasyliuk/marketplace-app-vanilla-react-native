import React, {FC} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// import {Ionicons} from '@expo/vector-icons';
import Touchable from '../Touchable/Touchable';
import s from './styles';

interface IFavoriteButtonProps {
  product: any;
  style: StyleMedia;
}

const FavoriteButton: FC<IFavoriteButtonProps> = ({product, style}) => {
  return (
    <View style={style}>
      <Touchable
        style={s.container}
        isOpacity
        onPress={() => product.toogleFavorite.run(product)}>
        <View></View>
        {/* {product.saved ? (
          <Ionicons style={[s.grayButton]} name="md-bookmark" size={24} />
        ) : (
          <Ionicons
            style={[s.grayButton]}
            name="md-bookmark-outline"
            size={24}
          />
        )} */}
      </Touchable>
    </View>
  );
};
export default observer(FavoriteButton);
