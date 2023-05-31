// material-ui
import { NativeSelect } from '@mui/material';

// project imports
import React, { useState, useMemo } from 'react';
// import TagsInput from 'react-tagsinput';
// assets
import InputLayout from './InputLayout';

const Selector = ({ id, style, label, options, helperText }) => {
  return (
    <InputLayout style={style} helperText={helperText} label={label}>
      <NativeSelect id={id} fullWidth>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </NativeSelect>
    </InputLayout>
  );
};

export default Selector;
