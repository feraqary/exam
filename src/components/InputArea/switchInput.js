import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLayout from './InputLayout';

export default function SwitchInput({ label, style, value, setValue, disabled, placement, helperText, required, id, name }) {
  return (
    <InputLayout disabled={disabled} helperText={helperText} style={style} required={required}>
      <FormControlLabel
        label={label}
        labelPlacement="start"
        disabled={disabled}
        value={value || false}
        control={<Switch color="primary" checked={value} onChange={() => setValue((prev) => !prev)} />}
      />
    </InputLayout>
  );
}
