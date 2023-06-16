import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabNavigator from './AppTabNavigator';
import screens from './screens';
import {RootStackNavigatorParamList} from './types';

const Stack = createStackNavigator<RootStackNavigatorParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={screens.MainApp} component={AppTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
