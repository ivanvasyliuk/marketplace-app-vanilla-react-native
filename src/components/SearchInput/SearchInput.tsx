import React, {useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput, TouchableWithoutFeedback, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../Touchable/Touchable';
import s from './styles';

const debounce = require('lodash.debounce');

const SearchInput = ({sizes, style, ...props}) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();
  const inputRef = useRef();

  const changeTextDebouncer = useCallback(
    debounce(search => {
      navigation.setParams({search});
    }, 500),
    [],
  );

  const onChangeHandler = search => {
    setText(search);
    changeTextDebouncer(search);
  };

  function onPress() {
    onChangeHandler('');
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
