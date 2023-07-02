import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import Touchable from '../components/Touchable/Touchable';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import PostNavigation from './PostNavigation';
import screens from './screens';
import {BrowseStackNavigatorParamList} from './types';
import CancelButton from './components/CancelButton';
import FiltersButton from '../components/svg/FiltersButton';
import FiltersNavigator from './FiltersNavigator';
import BrowseHeader from './components/BrowseHeader/BrowseHeader';

const Stack = createNativeStackNavigator<BrowseStackNavigatorParamList>();

const BrowseNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <BrowseHeader />,
      }}>
      <Stack.Screen name={screens.Browse} component={BrowseScreen} />
      <Stack.Screen name={screens.Filters} component={FiltersNavigator} />
      <Stack.Screen
        options={{headerShown: false}}
        name={screens.PostDetailsNavigator}
        component={PostNavigation}
      />
    </Stack.Navigator>
  );
};

export default BrowseNavigator;
