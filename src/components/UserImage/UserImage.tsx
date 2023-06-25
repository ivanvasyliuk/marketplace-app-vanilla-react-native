import React, {FC} from 'react';
import {Image, View} from 'react-native';
import s from './styles';

interface IUserImageProps {
  image: string;
  size: number;
}

const UserImage: FC<IUserImageProps> = ({image, size}) => {
  return (
    <View
      style={[
        s.container,
        {borderRadius: size / 2, width: size, height: size},
      ]}>
      <Image
        style={[s.image, {width: size, height: size}]}
        source={{uri: image}}
      />
    </View>
  );
};
export default UserImage;
