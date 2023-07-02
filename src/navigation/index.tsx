import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabNavigator from './AppTabNavigator';
import screens from './screens';
import theme from '../styles/theme';
import {RootStackNavigatorParamList} from './types';
import CreatePostNavigator from './CreatePostNavigator';
import {Text} from 'react-native';
import ChatLeftHeader from './components/ChatLeftHeader/ChatLeftHeader';
import ChatScreen from '../screens/Chat/ChatScreen';

const RootStack = createStackNavigator<RootStackNavigatorParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Group>
          <RootStack.Screen
            name={screens.MainApp}
            component={AppTabNavigator}
          />
          <RootStack.Screen
            name={screens.CreatePostModal}
            component={CreatePostNavigator}
          />
          {/* <RootStack.Screen
            name={screens.FiltersModal}
            component={FiltersNavigator}
          /> */}
          <RootStack.Screen
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
        </RootStack.Group>
        <RootStack.Group>
          {/* <RootStack.Screen
            name={screens.Auth}
            component={AuthNavigator}
          /> */}
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
