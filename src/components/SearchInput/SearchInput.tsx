import React, {FC, useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleProp,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../Touchable/Touchable';
import {TextInputProps} from 'react-native';
import s from './styles';

const debounce = require('lodash.debounce');

interface ISearchInputProps extends TextInputProps {
  sizes?: any;
  style?: StyleProp<ViewStyle>;
}

const SearchInput: FC<ISearchInputProps> = ({sizes, style, ...props}) => {
  const [text, setText] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const navigation = useNavigation();
  const inputRef = useRef<TextInput>();

  const changeTextDebouncer = useCallback(
    debounce((search: string) => {
      navigation.setParams({search});
    }, 500),
    [],
  );

  const onChangeHandler = (search: string) => {
    setText(search);
    changeTextDebouncer(search);
  };

  function onPress() {
    onChangeHandler('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={[s.container, isFocused && s.containerOnFocus, style]}>
        <AntDesign
          style={[s.searchIcon, isFocused && s.focusedIcon]}
          name="search1"
          size={16}
        />
        <TextInput
          ref={inputRef}
          style={[s.input, style]}
          onChangeText={onChangeHandler}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          value={text}
          {...props}
        />
        {text && (
          <Touchable isOpacity onPress={onPress}>
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
export default SearchInput;
