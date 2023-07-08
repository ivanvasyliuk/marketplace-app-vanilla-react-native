import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import GoToLoginButton from '../../components/GoToLoginButton/GoToLoginButton';
import SettingsItemsBar from '../../components/SettingsItemsBar/SettingsItemsBar';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import BigLogo from '../../components/svg/BigLogo';
import {useStore} from '../../stores/createStore';
import s from './styles';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const store = useStore();

  function resetProfileNavigator() {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'ProfileTab',
        },
      ],
    });
  }

  return (
    <View style={s.container}>
      <View style={s.logo}>
        <BigLogo />
      </View>
      <SettingsItemsBar />
      {store.viewer.userModel ? (
        <LogoutButton />
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={s.grayText}>Login to view your profile</Text>
          <GoToLoginButton resetAction={resetProfileNavigator} />
        </View>
      )}
    </View>
  );
};

export default observer(SettingsScreen);
