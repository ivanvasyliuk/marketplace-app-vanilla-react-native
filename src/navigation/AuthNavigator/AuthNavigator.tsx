import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../../components/Touchable/Touchable';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../../screens/Auth/Register/RegisterScreen';
import {AuthStackNavigatorParamList} from './types';
import colors from '../../styles/colors';
import screens from '../screens';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Touchable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color={colors.gray} />
          </Touchable>
        ),
      })}>
      <Stack.Screen name={screens.Login} component={LoginScreen} />
      <Stack.Screen name={screens.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
