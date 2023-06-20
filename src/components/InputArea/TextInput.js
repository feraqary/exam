// material-ui
import { TextField } from '@mui/material';

// project imports
import React from 'react';
import InputLayout from './InputLayout';



const InputText = ({ label, placeholder, helperText, style, type, value, setValue, description, ...rest }) => {

  // Customize desciption inputs only to be extendable based on [description] property
  const des = {"& textarea":{resize: description && "both", width: "100% !important"} }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputLayout label={label} helperText={helperText} style={style}>
      <TextField fullWidth placeholder={placeholder} type={type} sx={des} {...rest} value={value} onChange={(e) => handleInputChange(e)} />
    </InputLayout>
  );
};

export default InputText;
