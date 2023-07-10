import React, {FC} from 'react';
import {GestureResponderEvent, View} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Touchable from '../Touchable/Touchable';
import {IProductModel} from '../../stores/Products/ProductModel';
import colors from '../../styles/colors';
import {dimensions} from '../../styles';
import s from './styles';

interface IHeaderPostProps {
  product: IProductModel;
  isOwnerPost: boolean;
  onShare?: (event: GestureResponderEvent) => void;
}

const HeaderPost: FC<IHeaderPostProps> = ({product, isOwnerPost, onShare}) => {
  const navigation = useNavigation();

  const {top} = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.7)', 'rgba(0, 0, 0, 0.32)', 'transparent']}
      style={[
        s.header,
        {paddingTop: top, height: top + dimensions.headerHeight},
      ]}>
      <Touchable
        style={s.iconContainer}
        isOpacity
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} color={colors.white} />
      </Touchable>
      <View style={s.rigthButtonsInHeader}>
        {isOwnerPost ? (
          <Touchable style={s.iconContainer} isOpacity>
            <MaterialIcons name="edit" size={24} color={colors.white} />
          </Touchable>
        ) : (
          <Touchable
            isOpacity
            style={s.iconContainer}
            onPress={() => product.toogleFavorite.run()}>
            {product.saved ? (
              <Ionicons name="md-bookmark" color={colors.white} size={24} />
            ) : (
              <Ionicons
                name="md-bookmark-outline"
                color={colors.white}
                size={24}
              />
            )}
          </Touchable>
        )}

        <Touchable style={s.iconContainer} isOpacity onPress={onShare}>
          <MaterialCommunityIcons
            name="share-variant"
            size={24}
            color={colors.white}
          />
        </Touchable>
        <Touchable style={s.iconContainer} isOpacity>
          <MaterialIcons name="more-vert" size={24} color={colors.white} />
        </Touchable>
      </View>
    </LinearGradient>
  );
};

export default observer(HeaderPost);
