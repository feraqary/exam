// material-ui
import { NativeSelect } from '@mui/material';

// project imports
import React, { useState, useMemo } from 'react';
// import TagsInput from 'react-tagsinput';
// assets
import InputLayout from './InputLayout';
import { useField } from 'formik';

const Selector = ({ style, label, options, helperText, name, id, required }) => {
  const [field, meta] = useField(name);
  return (
    <InputLayout style={style} helperText={helperText} label={label} required={required}>
      <NativeSelect id={id} fullWidth {...field}>
        {options.map((i, option) => {
          return <option value={option}>{i}</option>;
        })}
      </NativeSelect>
    </InputLayout>
  );
};

export default Selector;
