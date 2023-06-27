import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import s from './styles';

const MainInput = ({
  name,
  value,
  handleChange,
  errors,
  touched,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = errors[name] && touched[name];

  return (
    <View style={s.container}>
      <View
        style={[
          s.containerInput,
          style,
          isFocused && s.focusedInput,
          hasError && s.errorInput,
        ]}>
        <TextInput
          {...props}
          style={s.input}
          onChangeText={handleChange(name)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      </View>
      <View style={s.inEnd}>
        <Text style={[hasError ? s.redErrorText : s.grayErrorText]}>
          {errors[name] && errors[name]}
        </Text>
      </View>
    </View>
  );
};
export default MainInput;
