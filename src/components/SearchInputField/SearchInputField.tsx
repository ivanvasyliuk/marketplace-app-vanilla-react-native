import React, {FC, useRef, useState} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';
import Touchable from '../Touchable/Touchable';
import s from './styles';

interface ISearchInputFieldProps extends TextInputProps {
  sizes?: any;
  style?: StyleProp<TextStyle>;
  filtersValues: filtersValuesProps;
  setFiltersValues: (filtersValues: filtersValuesProps) => void;
  value: any;
}

const SearchInputField: FC<ISearchInputFieldProps> = ({
  sizes,
  style,
  filtersValues,
  setFiltersValues,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<TextInput>();

  function onChange(e: string) {
    setFiltersValues({...filtersValues, search: e});
  }

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
      <View style={[s.container, isFocused && s.containerOnFocus, style]}>
        <AntDesign
          style={[s.searchIcon, isFocused && s.focusedIcon]}
          name="search1"
          size={16}
        />
        <TextInput
          ref={inputRef}
          style={[s.input, style]}
          onChangeText={onChange}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          value={value}
          {...props}
        />
        {filtersValues.search && (
          <Touchable
            isOpacity
            onPress={() => setFiltersValues({...filtersValues, search: ''})}>
            <View style={s.cleanTextButtonContainer}>
              <AntDesign
                style={s.cleanTextButton}
                name="closecircle"
                size={16}
              />
            </View>
          </Touchable>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SearchInputField;
