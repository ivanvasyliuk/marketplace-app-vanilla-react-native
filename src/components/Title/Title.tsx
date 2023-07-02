import React, {FC} from 'react';
import {Text} from 'react-native';
import s from './styles';

interface ITitleProps {
  title: string;
}

const Title: FC<ITitleProps> = ({title}) => {
  return <Text style={s.title}>{title}</Text>;
};
export default Title;
