import React, {FC, useState} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import {FormikErrors, FormikTouched} from 'formik';
import s from './styles';

interface IMainInputProps extends TextInputProps {
  name: string;
  value: string;
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

const MainInput: FC<IMainInputProps> = ({
  name,
  value,
  handleChange,
  errors,
  touched,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError: boolean = !!errors[name];
  const hasTouched: boolean = !!errors[name] && !!touched[name];

  return (
    <View style={s.container}>
      <View
        style={[
          s.containerInput,
          style,
          isFocused && s.focusedInput,
          hasTouched && s.errorInput,
        ]}>
        <TextInput
          {...props}
          style={s.input}
          onChangeText={handleChange(name)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          value={value}
        />
      </View>
      <View style={s.inEnd}>
        <Text style={[hasTouched ? s.redErrorText : s.grayErrorText]}>
          {hasError && `${errors[name] && errors[name]}`}
        </Text>
      </View>
    </View>
  );
};
export default MainInput;
