import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import Touchable from '../components/Touchable/Touchable';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import PostNavigation from './PostNavigation';
import screens from './screens';
import {BrowseStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<BrowseStackNavigatorParamList>();

const BrowseNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        header: () => (
          <Header>
            <SearchInput placeholder="Search" />
            {/* {!!route.params?.search ? 
            <CancelButton />
            undefined : (
              <Touchable
                isOpacity
                style={{padding: 20}}
                onPress={() =>
                  navigation.navigate(screens.FiltersModal, {
                    screen: screens.FiltersScreen,
                    params: {
                      filtersSubmit: route.params.filtersSubmit,
                      filtersValues: route.params.filtersValues,
                    },
                  })
                }>
                <FiltersButton />
              </Touchable>
            )} */}
          </Header>
        ),
      })}>
      <Stack.Screen name={screens.Browse} component={BrowseScreen} />
      {/* <Stack.Screen name={screens.Filters} component={FiltersNavigator} /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name={screens.PostDetailsNavigator}
        component={PostNavigation}
      />
    </Stack.Navigator>
  );
};

export default BrowseNavigator;
