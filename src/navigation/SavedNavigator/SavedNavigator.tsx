import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SavedScreen from '../../screens/Saved/SavedScreen';
import PostNavigation from '../PostNavigator/PostNavigation';
import Header from '../../components/Header/Header';
import SearchInput from '../../components/SearchInput/SearchInput';
import {SavedStackNavigatorParamList} from './types';
import screens from '../screens';

const Stack = createNativeStackNavigator<SavedStackNavigatorParamList>();

function SavedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={screens.Saved}
        options={{
          header: () => (
            <Header>
              <SearchInput placeholder="Search" />
            </Header>
          ),
        }}
        component={SavedScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={screens.PostDetailsNavigator}
        component={PostNavigation}
      />
    </Stack.Navigator>
  );
}

export default SavedNavigator;
