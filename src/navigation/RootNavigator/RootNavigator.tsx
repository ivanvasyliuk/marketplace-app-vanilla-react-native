import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import AppNavigator from '../AppNavigator/AppNavigator';
import {RootStackNavigatorParamList} from './types';
import theme from '../../styles/theme';
import screens from '../screens';

const RootStack = createStackNavigator<RootStackNavigatorParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={screens.MainApp} component={AppNavigator} />

        <RootStack.Screen name={screens.Auth} component={AuthNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
