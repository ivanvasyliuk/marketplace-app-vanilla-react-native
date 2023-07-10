import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabNavigator from '../AppTabNavigator/AppTabNavigator';
import CreatePostNavigator from '../CreatePostNavigator/CreatePostNavigator';
import ChatLeftHeader from '../components/ChatLeftHeader/ChatLeftHeader';
import ChatScreen from '../../screens/Chat/ChatScreen';
import FiltersNavigator from '../FiltersNavigator/FiltersNavigator';
import {AppStackNavigatorParamList} from './types';
import screens from '../screens';

const Stack = createStackNavigator<AppStackNavigatorParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.TabNavigator} component={AppTabNavigator} />
      <Stack.Screen
        name={screens.CreatePostModal}
        component={CreatePostNavigator}
      />
      <Stack.Screen name={screens.FiltersModal} component={FiltersNavigator} />
      <Stack.Screen
        options={({route}) => ({
          headerShown: true,
          presentation: 'card',
          headerTitleAlign: 'center',
          headerTitle: () => <Text style={{fontSize: 16}}></Text>,
          headerLeft: () => <ChatLeftHeader chat={route.params.chat} />,
        })}
        name={screens.Chat}
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
