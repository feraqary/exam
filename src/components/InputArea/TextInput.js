// material-ui
import { TextField } from '@mui/material';

// project imports
import React, { useState, useMemo } from 'react';
import InputLayout from './InputLayout';

const InputText = ({ label, placeholder, helperText, style, type }) => {
  return (
    <InputLayout label={label} helperText={helperText} style={style}>
      <TextField fullWidth placeholder={placeholder} type={type} />
    </InputLayout>
  );
};

export default InputText;
