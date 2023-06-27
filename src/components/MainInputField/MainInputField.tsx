import React from 'react';
import {useFormikContext} from 'formik';
import MainInput from '../MainInput/MainInput';

const MainInputField = ({name, ...props}) => {
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
