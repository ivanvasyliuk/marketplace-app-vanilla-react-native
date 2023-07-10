import {FormikErrors, FormikTouched} from 'formik';
import React, {FC, useState} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
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
  const hasError: boolean = !!errors[name] && !!touched[name];

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
          {`${errors[name] && errors[name]}`}
        </Text>
      </View>
    </View>
  );
};
export default MainInput;
