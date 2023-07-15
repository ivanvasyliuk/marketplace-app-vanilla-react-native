import React, {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {useFormikContext} from 'formik';
import ButtonAddPhoto from './ButtonAddPhoto';
import s from './styles';
import Title from '../../../components/Title/Title';

const Photos = () => {
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);
  const {
    values: {images},
  } = useFormikContext<{images: string[]}>();

  return (
    <>
      <Title title="Photos" style={{marginLeft: 16}} />
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
          <ButtonAddPhoto setIsLoadingPhoto={setIsLoadingPhoto} />
        </View>
      </View>
    </>
  );
};

export default Photos;
