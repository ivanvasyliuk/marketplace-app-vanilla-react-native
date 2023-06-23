import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import screens from "../../../navigation/screens";
import Touchable from "../../Touchable/Touchable";
import s from "./styles";

const SearchItem = ({ product }) => {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.PostDetailsNavigator, {
      screen: screens.PostDetails,
      params: { product: product },
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
