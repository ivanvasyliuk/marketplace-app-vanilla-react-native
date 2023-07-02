import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import screens from '../../navigation/screens';
import Touchable from '../Touchable/Touchable';
import s from './styles';

const GoToLoginButton = ({resetAction}) => {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.Auth, {
      screen: screens.Login,
      params: {resetAction: resetAction},
    });
  }

  return (
    <Touchable isOpacity onPress={onPress}>
      <View style={s.container}>
        <Text style={s.text}>Login</Text>
      </View>
    </Touchable>
  );
};
export default GoToLoginButton;
