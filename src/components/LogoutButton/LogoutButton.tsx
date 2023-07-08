import React from 'react';
import {Text} from 'react-native';
import {useStore} from '../../stores/createStore';
import LogOutIcon from '../svg/LogOutIcon';
import Touchable from '../Touchable/Touchable';
import s from './styles';

const LogoutButton = () => {
  const store = useStore();

  return (
    <Touchable onPress={store.auth.logout.run} style={s.container}>
      <LogOutIcon />
      <Text style={s.logOutTitle}>Log out</Text>
    </Touchable>
  );
};
export default LogoutButton;
