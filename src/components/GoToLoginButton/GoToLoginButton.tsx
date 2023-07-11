import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import screens from '../../navigation/screens';
import Touchable from '../Touchable/Touchable';
import s from './styles';
import {CompositeNavigationWithRootNavigatorType} from '../../navigation/RootNavigator/types';
import {AuthStackNavigatorParamList} from '../../navigation/AuthNavigator/types';
import {AppStackNavigatorParamList} from '../../navigation/AppNavigator/types';

interface IGoToLoginButtonProps {
  resetAction?: () => void;
}

const GoToLoginButton: FC<IGoToLoginButtonProps> = ({resetAction}) => {
  const navigation =
    useNavigation<
      CompositeNavigationWithRootNavigatorType<
        | AuthStackNavigatorParamList<'Auth'>
        | AppStackNavigatorParamList<'MainApp'>
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
