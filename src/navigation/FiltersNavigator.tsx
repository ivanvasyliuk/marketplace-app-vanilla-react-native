import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FiltersScreen from '../screens/Filters/FiltersScreen';
import Touchable from '../components/Touchable/Touchable';
import {FiltersStackNavigatorParamList} from './types';
import colors from '../styles/colors';
import screens from './screens';

// const Stack = createNativeStackNavigator<FiltersStackNavigatorParamList>();
const Stack = createNativeStackNavigator();

function FiltersNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <Touchable onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={30} color={colors.primary} />
            </Touchable>
          );
        },
        headerTitle: props => (
          <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '500'}}>
            Filters
          </Text>
        ),
      })}>
      <Stack.Screen name={screens.FiltersScreen} component={FiltersScreen} />
    </Stack.Navigator>
  );
}

export default FiltersNavigator;
