import React, {FC, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import {useFormikContext} from 'formik';
import ActionSheet from 'react-native-actionsheet';
import Touchable from '../../../components/Touchable/Touchable';
import s from './styles';

interface IButtonAddPhotoProps {
  setIsLoadingPhoto: Function;
}

const ButtonAddPhoto: FC<IButtonAddPhotoProps> = ({setIsLoadingPhoto}) => {
  const actionRef = useRef(null);
  const {
    values: {images},
    setFieldValue,
  } = useFormikContext();

  async function onOpenGallery() {
    // No permissions request is necessary for launching the image library
    try {
      setIsLoadingPhoto(true);
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
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
      const result = await ImagePicker.launchCamera();

      setFieldValue('images', [...images, result.assets[0].uri]);
      setIsLoadingPhoto(false);
    } catch (error) {
      setIsLoadingPhoto(false);
      console.log('error', error);
    }
  }

  function onChoose(index: number) {
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
