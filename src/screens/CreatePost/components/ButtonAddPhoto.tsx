import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ActionSheet from 'react-native-actionsheet';
import {useFormikContext} from 'formik';
import Touchable from '../../../components/Touchable/Touchable';
import s from './styles';

interface IButtonAddPhotoProps {
  setIsLoadingPhoto: string;
}

const ButtonAddPhoto: FC<IButtonAddPhotoProps> = ({setIsLoadingPhoto}) => {
  const actionRef = useRef();
  const {
    values: {images},
    setFieldValue,
  } = useFormikContext();

  async function onOpenGallery() {
    // No permissions request is necessary for launching the image library
    try {
      setIsLoadingPhoto(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setFieldValue('images', [...images, result.assets[0].uri]);
      setIsLoadingPhoto(false);
    } catch (error) {
      setIsLoadingPhoto(false);
      console.log('error', error);
    }
  }

  async function onOpenCamera() {
    try {
      setIsLoadingPhoto(true);
      const result = await ImagePicker.launchCameraAsync();

      setFieldValue('images', [...images, result.assets[0].uri]);

      setIsLoadingPhoto(false);
    } catch (error) {
      setIsLoadingPhoto(false);
      console.log('error', error);
    }
  }

  function onChoose(index) {
    if (index == 0) {
      onOpenCamera();
    }
    if (index == 1) {
      onOpenGallery();
    }
  }

  function onOpenActionSheet() {
    actionRef.current.show();
  }

  return (
    <View style={s.touchableContainer}>
      <Touchable onPress={onOpenActionSheet}>
        <View style={s.iconContainer}>
          <Ionicons name="add" size={24} style={s.addIcon} />
        </View>
      </Touchable>
      <ActionSheet
        ref={actionRef}
        title="Which one do you like ?"
        options={['Camera', 'Gallery', 'Cancel']}
        cancelButtonIndex={2}
        onPress={onChoose}
      />
    </View>
  );
};
export default ButtonAddPhoto;
