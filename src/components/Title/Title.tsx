import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import s from './styles';

interface ITitleProps {
  title: string;
  style?: StyleProp<TextStyle>;
}

const Title: FC<ITitleProps> = ({title, style}) => {
  return <Text style={[s.title, style]}>{title}</Text>;
};
export default Title;
