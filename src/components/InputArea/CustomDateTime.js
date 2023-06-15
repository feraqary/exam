import * as React from 'react';

// material-ui
import { InputAdornment, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputLayout from './InputLayout';

// ==============================|| CUSTOM DATETIME ||============================== //

const CustomDateTime = ({ style, label, helperText, value, setValue }) => {
  return (
    <InputLayout label={label} style={{ xs: style.x, lg: style.lg }} helperText={helperText}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          label="Please pick a date"
          inputFormat="yyyy/MM/dd"
          mask="___/__/__"
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              error={false}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <DateRangeIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
        />
      </LocalizationProvider>
    </InputLayout>
  );
};

export default CustomDateTime;
