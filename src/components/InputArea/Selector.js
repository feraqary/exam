// material-ui
import { NativeSelect } from '@mui/material';

// project imports
import React, { useState, useMemo } from 'react';
// import TagsInput from 'react-tagsinput';
// assets
import InputLayout from './InputLayout';

const Selector = ({ id, style, label, options, helperText, value, setValue }) => {
  return (
    <InputLayout style={style} helperText={helperText} label={label}>
      <NativeSelect id={id} fullWidth value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="">None</option>
        {options.map((i, option) => {
          return <option value={option}>{i}</option>;
        })}
      </NativeSelect>
    </InputLayout>
  );
};

export default Selector;
