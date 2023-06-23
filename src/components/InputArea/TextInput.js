// material-ui
import { TextField } from '@mui/material';
import { useField } from 'formik';
// project imports
import React from 'react';
import InputLayout from './InputLayout';

const InputText = ({ label, placeholder, helperText, style, type, value, setValue,required, ...rest }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const [field, meta] = useField(rest);
  return (
    <InputLayout label={label} helperText={helperText} style={style}  metaError={meta.error} metaTouched={meta.touched} required={required}>
      <TextField  id={rest.id}
        name={rest.name}
        fullWidth
        placeholder={placeholder}
        type={type}
        {...rest}
        {...field}
        sx={{ borderColor: 'red' }}
        error={meta.error && meta.touched ? true : false} />
      {/* <TextField fullWidth placeholder={placeholder} type={type} {...rest} value={value} onChange={(e) => handleInputChange(e)} /> */}
    </InputLayout>
  );
};

export default InputText;
