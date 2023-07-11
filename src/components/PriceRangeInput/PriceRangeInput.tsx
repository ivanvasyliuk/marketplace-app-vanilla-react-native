import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';
import MySegmentedControl from '../MySegmentedControl.js/MySegmentedControl';
import s from './styles';

interface IPriceRangeInputProps {
  priceRange: string[] | string;
  setFiltersValues: Dispatch<SetStateAction<filtersValuesProps>>;
  filtersValues: filtersValuesProps;
}

const PriceRangeInput: FC<IPriceRangeInputProps> = ({
  priceRange,
  setFiltersValues,
  filtersValues,
}) => {
  const [index, setIndex] = useState<number>(0);
  const inputRef = useRef<any>([]);

  useEffect(() => {
    if (index == 1) {
      setFiltersValues({
        ...filtersValues,
        price: ['0', '0'],
      });
    }
  }, [index]);

  return (
    <View style={s.container}>
      <MySegmentedControl
        values={['Price', 'Free']}
        index={index}
        setIndex={setIndex}
      />
      {index == 0 && (
        <View style={s.inputRangeContainer}>
          <TouchableWithoutFeedback onPress={() => inputRef.current[0].focus()}>
            <View style={s.priceContainer}>
              <Text>From</Text>
              <TextInput
                ref={element => {
                  inputRef.current[0] = element;
                }}
                keyboardType="numeric"
                onChangeText={e => {
                  setFiltersValues({
                    ...filtersValues,
                    price: [e, priceRange[1]],
                  });
                }}
                value={priceRange[0]}
              />
              <Text>uah</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{width: 8}} />
          <TouchableWithoutFeedback onPress={() => inputRef.current[1].focus()}>
            <View style={s.priceContainer}>
              <Text>To</Text>
              <TextInput
                ref={element => {
                  inputRef.current[1] = element;
                }}
                keyboardType="numeric"
                onChangeText={e => {
                  setFiltersValues({
                    ...filtersValues,
                    price: [priceRange[0], e],
                  });
                }}
                value={priceRange[1]}
              />
              <Text>uah</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};
export default PriceRangeInput;
