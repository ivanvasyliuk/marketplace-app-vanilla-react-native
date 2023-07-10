import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import BrowseNavigator from '../BrowseNavigator/BrowseNavigator';
import TabBar from '../components/TabBar';
import CreatePostNavigator from '../CreatePostNavigator/CreatePostNavigator';
import InboxNavigator from '../InboxNavigator/InboxNavigator';
import ProfileNavigator from '../ProfileNavigator/ProfileNavigator';
import SavedNavigator from '../SavedNavigator/SavedNavigator';
import {AppTabNavigatorParamList} from './types';
import screens from '../screens';

const Tab = createBottomTabNavigator<AppTabNavigatorParamList>();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => {
        return <TabBar props={props} />;
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={screens.BrowseTab}
        component={BrowseNavigator}
        options={{
          tabBarLabel: 'Browse',
        }}
      />
      <Tab.Screen
        name={screens.SavedTab}
        component={SavedNavigator}
        options={{
          tabBarLabel: 'Saved',
        }}
      />
      <Tab.Screen
        name={screens.CreatePostTab}
        component={CreatePostNavigator}
        options={{
          headerTitle: props => <Text>New Post</Text>,
          tabBarButton: props => true,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={screens.InboxTab}
        component={InboxNavigator}
        options={{
          tabBarLabel: 'Inbox',
        }}
      />
      <Tab.Screen
        name={screens.ProfileTab}
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
