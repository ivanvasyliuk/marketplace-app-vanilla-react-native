import React, {FC} from 'react';
import {Text, View} from 'react-native';
// import { AntDesign } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import s from './styles';
import screens from '../../navigation/screens';
import Touchable from '../Touchable/Touchable';

interface ISearchItemProps {
  product: any;
}

const SearchItem: FC<ISearchItemProps> = ({product}) => {
  const navigation = useNavigation();

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
        {/* <AntDesign name="right" size={24} style={s.iconLeft} /> */}
      </View>
    </Touchable>
  );
};
export default SearchItem;
