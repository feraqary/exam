import * as React from 'react';

// material-ui
import { InputAdornment, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';

// ==============================|| CUSTOM DATETIME ||============================== //

const CustomDateTime = () => {
  const [value, setValue] = React.useState(new Date('2019-01-01'));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // label="Basic Datetime Picker"
        onError={console.log}
        minDate={new Date('2018-01-01')}
        inputFormat="yyyy/MM/dd"
        mask="___/__/__"
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            margin="normal"
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
  );
};

export default CustomDateTime;
