import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Touchable from '../Touchable/Touchable';
import {useStore} from '../../stores/createStore';
import UserImage from '../UserImage/UserImage';
import {IUserModel} from '../../stores/users/UserModel';
import screens from '../../navigation/screens';
import s from './styles';

interface ISellerInfoProps {
  owner: IUserModel;
}

const SellerInfo: FC<ISellerInfoProps> = ({owner}) => {
  const navigation = useNavigation();
  const store = useStore();

  function onPress() {
    if (owner.id === store.viewer.userModel?.id) {
      navigation.navigate(screens.ProfileTab, {
        screen: screens.Profile,
        params: {owner: owner},
      });
    } else {
      navigation.navigate(screens.Profile, {
        owner: {owner: owner},
      });
    }
  }

  return (
    <View style={s.container}>
      <View style={s.avatarContainer}>
        <UserImage image={owner.avatar || undefined} size={48} />
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
