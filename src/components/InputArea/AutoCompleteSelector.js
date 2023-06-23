// material-ui
import { Autocomplete, Grid, TextField, Tooltip, IconButton, FormHelperText } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { useField, useFormikContext } from 'formik';

// ==============================|| FORM VALIDATION - AUTOCOMPLETE FORMIK  ||============================== //

const AutoCompleteSelector = ({
  style,
  label,
  id,
  value,
  options,
  placeholder,
  required,
  setValue,
  helperText,
  loading,
  func,
  helperInfo,
  error,
  name,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  const { touched, values, setFieldValue } = useFormikContext();

  return (
    <Grid item xs={style.xs} lg={style.lg} mb={style.mb}>
      <Grid container flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        {required ? <InputLabel required>{label}</InputLabel> : <InputLabel>{label}</InputLabel>}

        {helperInfo ? (
          <Tooltip title={label}>
            <IconButton>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <></>
        )}
      </Grid>
      <Autocomplete
        {...rest}
        {...field}
        // value={value}
        id={id}
        options={options}
        name={name}
        value={values[`${name}`]}
        sx={{ width: '100%' }}
        loading={loading}
        renderInput={(params) => <TextField {...params} label={placeholder} error={touched[`${name}`] && !!meta.error[`${name}`]} />}
        // renderInput={(params) => {
        //   return <TextField {...params} label={placeholder} />;
        // }}
        // onChange={(event, newValue) => func(newValue)}
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
      />
      {(helperText && meta.error && meta.touched && <FormHelperText error={true}>{meta.error[`${name}`]}</FormHelperText>) || (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Grid>
  );
};
export default AutoCompleteSelector;
