import {FormikErrors, FormikTouched} from 'formik';
import React, {FC, useRef, useState} from 'react';
import {TextInputProps} from 'react-native';
import {View, TextInput, Text, TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import s from './styles';

interface IInputProps extends TextInputProps {
  label: string;
  name: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T,
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

const Input: FC<IInputProps> = ({
  label,
  name,
  handleChange,
  errors,
  touched,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const hasError: boolean = !!errors[name];
  const hasTouched: boolean = !!errors[name] && !!touched[name];
  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={s.container}>
        <View
          style={[
            s.inputContainer,
            isFocused && s.focusedInput,
            hasTouched && s.errorInput,
          ]}>
          <Text style={[s.label, hasTouched && s.errorLabel]}>{label}</Text>
          <TextInput
            ref={inputRef}
            {...props}
            onChangeText={handleChange(name)}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
          {hasTouched && (
            <AntDesign
              style={s.warningIcon}
              name="exclamationcircle"
              size={16}
            />
          )}
        </View>
        <Text style={[hasTouched ? s.redErrorText : s.grayErrorText]}>
          {hasError && `${errors[name] && errors[name]}`}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;
