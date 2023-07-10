import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../../screens/Chat/ChatScreen';
import {ChatStackNavigatorParamList} from './types';
import screens from '../screens';

const Stack = createNativeStackNavigator<ChatStackNavigatorParamList>();

function FiltersNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.Chat} component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default FiltersNavigator;
