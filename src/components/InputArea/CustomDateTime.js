import React from 'react';
// material-ui
import { InputAdornment, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputLayout from './InputLayout';
import { useField, useFormikContext } from 'formik';

/**
 * A component that provides a custom date-time picker with validation support for Formik forms.
 * @param {Object} props - The component props.
 * @param {Object} props.style - The custom styles to apply to the component.
 * @param {string} props.label - The label for the date-time picker.
 * @param {string} props.helperText - The helper text to display below the date-time picker.
 * @param {Date} props.value - The selected date value.
 * @param {Function} props.setValue - The function to set the selected date value.
 * @param {boolean} props.required - Indicates if the date-time picker is required.
 * @param {string} props.name - The name of the field in Formik.
 * @param {string} props.id - The unique identifier for the date-time picker.
 * @param {...any} rest - Additional props to be passed to the MobileDatePicker component.
 * @returns {JSX.Element} The rendered CustomDateTime component.
 */

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
          {...rest}
          {...field}
          name={name}
          id={id}
          value={values[`${name}`]}
          label={label}
          onChange={(value) => setFieldValue(name, value)}
          onClose={() => setFieldTouched(name)}
          inputFormat="yyyy/MM/dd"
          mask="__/__/__"
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
