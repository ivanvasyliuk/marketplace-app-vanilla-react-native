import React, {FC} from 'react';
import {TextInputProps} from 'react-native';
import {useFormikContext} from 'formik';
import MainInput from '../MainInput/MainInput';

interface IMainInputFieldProps extends TextInputProps {
  name: string;
}

const MainInputField: FC<IMainInputFieldProps> = ({name, ...props}) => {
  const {values, handleChange, errors, touched} = useFormikContext<any>();

  return (
    <MainInput
      {...props}
      name={name}
      value={values[name]}
      handleChange={handleChange}
      errors={errors}
      touched={touched}
    />
  );
};

export default MainInputField;
