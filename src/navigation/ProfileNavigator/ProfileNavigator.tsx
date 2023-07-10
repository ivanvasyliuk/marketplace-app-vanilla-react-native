import React from 'react';
import {observer} from 'mobx-react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useStore} from '../../stores/createStore';
import ProfileScreenAnimated from '../../screens/Profile/ProfileScreenAnimated';
import PostNavigation from '../PostNavigator/PostNavigation';
import SettingsNavigator from '../SettingsNavigator/SettingsNavigator';
import {ProfileStackNavigatorParamList} from './types';
import screens from '../screens';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

function ProfileNavigator() {
  const store = useStore();

  return (
    <Stack.Navigator
      initialRouteName={screens.Profile}
      screenOptions={{
        headerShown: false,
      }}>
      {!!store.viewer.userModel && (
        <Stack.Screen
          name={screens.Profile}
          component={ProfileScreenAnimated}
        />
      )}
      <Stack.Screen name={screens.Settings} component={SettingsNavigator} />
      <Stack.Screen
        name={screens.PostDetailsNavigator}
        component={PostNavigation}
      />
    </Stack.Navigator>
  );
}

export default observer(ProfileNavigator);
