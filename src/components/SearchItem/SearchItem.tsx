import React, {FC} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {BrowseStackNavigatorParamList} from '../../navigation/BrowseNavigator/types';
import Touchable from '../Touchable/Touchable';
import screens from '../../navigation/screens';
import s from './styles';

interface ISearchItemProps {
  product: any;
}

const SearchItem: FC<ISearchItemProps> = ({product}) => {
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
      <View style={s.container}>
        <Text style={s.text}>{product.title}</Text>
        <AntDesign name="right" size={24} style={s.iconLeft} />
      </View>
    </Touchable>
  );
};
export default SearchItem;
