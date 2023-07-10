import React, {FC} from 'react';
import {useFormikContext} from 'formik';
import MainInput from '../MainInput/MainInput';
import {TextInputProps} from 'react-native';

interface IMainInputFieldProps extends TextInputProps {
  name: string;
}

const MainInputField: FC<IMainInputFieldProps> = ({name, ...props}) => {
  const {values, handleChange, errors, touched} = useFormikContext();

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
