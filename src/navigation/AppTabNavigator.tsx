import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BrowseNavigator from './BrowseNavigator';
import screens from './screens';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
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
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
