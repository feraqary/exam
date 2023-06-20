import * as React from 'react';

// material-ui
import { InputAdornment, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputLayout from './InputLayout';
import { useField, useFormikContext } from 'formik';

// ==============================|| CUSTOM DATETIME ||============================== //

const CustomDateTime = ({ style, label, helperText, value, setValue, required, name, id, ...rest }) => {
  const [field, meta] = useField(rest);
  const { touched, values, setFieldValue, setFieldTouched } = useFormikContext();
  return (
    <InputLayout
      label={label}
      style={{ xs: style.x, lg: style.lg }}
      helperText={helperText}
      required={required}
      metaError={meta.error[`${name}`]}
      metaTouched={touched[`${name}`]}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          {...field}
          name={name}
          id={id}
          value={values[`${name}`]}
          label={label}
          onChange={(value) => setFieldValue(name, value)}
          onClose={() => setFieldTouched(name)}
          inputFormat="yyyy/MM/dd"
          mask="___/__/__"
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              error={touched[`${name}`] && meta.error[`${name}`]}
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
