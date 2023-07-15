import React, {useState} from 'react';
import {View} from 'react-native';
import MainInputField from '../MainInputField/MainInputField';
import MySegmentedControl from '../MySegmentedControl.js/MySegmentedControl';
import Title from '../Title/Title';
import s from './styles';

const PriceInput = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <Title title="Price" style={{marginLeft: 16}} />
      <View style={s.container}>
        <MySegmentedControl
          values={['Price', 'Free']}
          index={index}
          setIndex={setIndex}
        />
        {index == 0 && (
          <>
            <View style={s.horizontalLine} />
            <MainInputField
              keyboardType="numeric"
              name="price"
              placeholder="Enter price..."
            />
          </>
        )}
      </View>
    </>
  );
};
export default PriceInput;
