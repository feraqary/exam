// material-ui
import { Autocomplete, Grid, TextField, Tooltip, IconButton, FormHelperText } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { useField, useFormikContext } from 'formik';

// ==============================|| FORM VALIDATION - AUTOCOMPLETE FORMIK  ||============================== //

const AutoCompleteSelector = ({ style, label, id, name, options, placeholder, func, helperText, ...rest }) => {
  const [field, meta] = useField(rest);
  const { touched, values, setFieldValue } = useFormikContext();

  return (
    <Grid item xs={style.xs} lg={style.lg} mb={style.mb}>
      <Grid container flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <InputLabel required>{label}</InputLabel>
        <Tooltip title={label}>
          <IconButton>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Autocomplete
        {...rest}
        {...field}
        id={id}
        options={options}
        onChange={(e, value, reason) => {
          if (reason === 'clear') {
            setFieldValue(name, '');
          } else {
            setFieldValue(name, value);
          }
          if (func) {
            func(value);
          }
        }}
        value={values[`${name}`]}
        name={name}
        renderInput={(params) => <TextField {...params} label={placeholder} error={touched[`${name}`] && !!meta.error[`${name}`]} />}
      />
      {(helperText && meta.error && meta.touched && <FormHelperText error={true}>{meta.error[`${name}`]}</FormHelperText>) || (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Grid>
  );
};
export default AutoCompleteSelector;
