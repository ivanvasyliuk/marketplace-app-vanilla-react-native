import React from 'react';
import {Linking, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../Touchable/Touchable';
import s from './styles';

const SettingsItemsBar = () => {
  function onPrivacyPolicyClick() {
    Linking.openURL('https://www.google.com');
  }

  return (
    <View style={s.container}>
      <Touchable
        isOpacity
        style={s.itemContainer}
        onPress={onPrivacyPolicyClick}>
        <Text style={s.itemTitle}>Privacy Policy</Text>
        <AntDesign name="right" size={18} color="lightgray" />
      </Touchable>
      <View style={s.horizontalLine} />
      <Touchable isOpacity style={s.itemContainer}>
        <Text style={s.itemTitle}>Terms {'&'} Conditions</Text>
        <AntDesign name="right" size={18} color="lightgray" />
      </Touchable>
    </View>
  );
};
export default SettingsItemsBar;
