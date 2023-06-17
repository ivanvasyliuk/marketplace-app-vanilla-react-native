import React, {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {useFormikContext} from 'formik';
import ButtonAddPhoto from './ButtonAddPhoto';
import s from './styles';

const Photos = () => {
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);
  const {
    values: {images},
  } = useFormikContext();

  return (
    <>
      <View style={s.container}>
        <View style={s.imagesList}>
          {images.map((image: string, index: number) => (
            <View key={index}>
              <Image source={{uri: image}} style={s.image} />
            </View>
          ))}
          {isLoadingPhoto && (
            <ActivityIndicator style={s.loaderContainer} size="large" />
          )}
          <ButtonAddPhoto
            isLoadingPhoto={isLoadingPhoto}
            setIsLoadingPhoto={setIsLoadingPhoto}
          />
        </View>
      </View>
    </>
  );
};

export default Photos;
