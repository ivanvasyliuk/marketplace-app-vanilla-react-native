import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Touchable from '../Touchable/Touchable';
import {AuthStackNavigatorParamList} from '../../navigation/AuthNavigator/types';
import {CompositeNavigationWithRootNavigatorType} from '../../navigation/RootNavigator/types';
import screens from '../../navigation/screens';
import s from './styles';

interface IGoToLoginButtonProps {
  resetAction?: () => void;
}

const GoToLoginButton: FC<IGoToLoginButtonProps> = ({resetAction}) => {
  const navigation =
    useNavigation<
      CompositeNavigationWithRootNavigatorType<
        StackNavigationProp<AuthStackNavigatorParamList, 'Login'>
      >
    >();

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
