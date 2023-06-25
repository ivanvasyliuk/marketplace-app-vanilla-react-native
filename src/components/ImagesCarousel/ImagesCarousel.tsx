import React, {FC} from 'react';
import {Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {dimensions} from '../../styles';
import s from './styles';

interface IImagesCarouselProps {
  list: any[];
  setIndex: Function;
}

const ImagesCarousel: FC<IImagesCarouselProps> = ({list, setIndex}) => {
  return (
    <Carousel
      loop
      width={dimensions.width}
      height={dimensions.width / 1.1}
      data={list}
      scrollAnimationDuration={500}
      onSnapToItem={index => setIndex(index)}
      renderItem={({index}) => (
        <Image
          style={[s.image, {backgroundColor: 'green'}]}
          source={{
            uri: list[index],
          }}
        />
      )}
    />
  );
};

export default ImagesCarousel;
