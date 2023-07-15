import React, {FC} from 'react';
import {View} from 'react-native';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import s from './styles';

interface IDotsCarouselProps {
  index: number;
  list: string[];
}

const DotsCarousel: FC<IDotsCarouselProps> = ({index, list}) => {
  return (
    <View style={s.container}>
      <AnimatedDotsCarousel
        length={list.length}
        currentIndex={index}
        maxIndicators={list.length}
        interpolateOpacityAndColor={false}
        activeIndicatorConfig={{
          color: 'white',
          margin: 3,
          size: 8,
          opacity: 1,
        }}
        inactiveIndicatorConfig={{
          color: 'gray',
          margin: 3,
          size: 8,
          opacity: 1,
        }}
        decreasingDots={[
          {
            config: {
              color: '#F96B2B',
              margin: 3,
              opacity: 0.5,
              size: 6,
            },
            quantity: 1,
          },
          {
            config: {
              color: '#F96B2B',
              margin: 3,
              opacity: 0.5,
              size: 4,
            },
            quantity: 1,
          },
        ]}
      />
    </View>
  );
};
export default DotsCarousel;
