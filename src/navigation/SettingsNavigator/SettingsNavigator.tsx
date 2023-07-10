import React from 'react';
import {observer} from 'mobx-react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../../components/Touchable/Touchable';
import SettingsScreen from '../../screens/Settings/SettingsScreen';
import {useStore} from '../../stores/createStore';
import colors from '../../styles/colors';
import screens from '../screens';

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  const store = useStore();

  const backButtonVisible = store.viewer.userModel;

  return (
    <>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerTitleAlign: 'center',
          headerLeft: () =>
            backButtonVisible && (
              <Touchable
                isOpacity
                onPress={() => navigation.navigate(screens.Profile)}>
                <AntDesign
                  name="left"
                  size={24}
                  style={{marginHorizontal: 0}}
                  color={colors.gray}
                />
              </Touchable>
            ),
        })}>
        <Stack.Screen name={screens.Settings} component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
}

export default observer(SettingsNavigator);
