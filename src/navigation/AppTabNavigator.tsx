import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BrowseNavigator from './BrowseNavigator';
import SavedNavigator from './SavedNavigator';
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
      <Tab.Screen
        name={screens.SavedTab}
        component={SavedNavigator}
        options={{
          tabBarLabel: 'Saved',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
