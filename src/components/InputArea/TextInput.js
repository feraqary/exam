// material-ui
import { TextField } from '@mui/material';

// project imports
import React from 'react';
import InputLayout from './InputLayout';

const InputText = ({ label, placeholder, helperText, style, type, value, setValue, ...rest }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputLayout label={label} helperText={helperText} style={style}>
      <TextField fullWidth placeholder={placeholder} type={type} {...rest} value={value} onChange={(e) => handleInputChange(e)} />
    </InputLayout>
  );
};

export default InputText;
