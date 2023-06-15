// material-ui
import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// project imports
import React, { useState, useMemo } from 'react';
import InputLayout from './InputLayout';
import DateTime from 'pages/forms/components/date-time';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
const InputDateTime = ({ label, placeholder, helperText, style, value, setValue, ...rest }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputLayout label={label} helperText={helperText} style={style}>
        <CustomDateTime/>
    </InputLayout>

  );
};

export default InputDateTime;
