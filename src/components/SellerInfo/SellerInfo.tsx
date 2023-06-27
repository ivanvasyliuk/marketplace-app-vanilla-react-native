import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Touchable from '../Touchable/Touchable';
import s from './styles';
import {useStore} from '../../stores/createStore';
import UserImage from '../UserImage/UserImage';
import screens from '../../navigation/screens';

interface ISellerInfoProps {
  owner: any;
}

const SellerInfo: FC<ISellerInfoProps> = ({owner}) => {
  const navigation = useNavigation();
  const store = useStore();

  function onPress() {
    if (owner.id === store.viewer.userModel?.id) {
      navigation.navigate(screens.ProfileTab, {
        screen: screens.Profile,
        params: {owner: {owner: owner}},
      });
    } else {
      navigation.navigate(screens.Profile, {
        owner: {owner: owner},
      });
    }
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={s.avatarContainer}>
        <UserImage image={owner.avatar} size={48} />
      </View>
      <View>
        <Text>{owner.fullName}</Text>
        <Touchable onPress={onPress}>
          <Text style={s.seeAllPostText}>See all {owner.fullName} posts</Text>
        </Touchable>
      </View>
    </View>
  );
};
export default SellerInfo;
