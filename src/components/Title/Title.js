import React from "react";
import { Text } from "react-native";
import s from "./styles";

const Title = ({ title }) => {
  return <Text style={s.title}>{title}</Text>;
};
export default Title;
