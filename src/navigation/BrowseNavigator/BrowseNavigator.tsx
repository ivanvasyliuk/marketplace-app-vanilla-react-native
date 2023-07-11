import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowseScreen from '../../screens/Browse/BrowseScreen';
import PostNavigation from '../PostNavigator/PostNavigation';
import BrowseHeader from '../components/BrowseHeader/BrowseHeader';
import {BrowseStackNavigatorParamList} from './types';
import screens from '../screens';

const Stack = createNativeStackNavigator<BrowseStackNavigatorParamList>();

const BrowseNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <BrowseHeader />,
      }}>
      <Stack.Screen name={screens.Browse} component={BrowseScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name={screens.PostDetailsNavigator}
        component={PostNavigation}
      />
    </Stack.Navigator>
  );
};

export default BrowseNavigator;
