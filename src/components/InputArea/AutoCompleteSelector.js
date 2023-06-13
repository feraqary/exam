// material-ui
import { Autocomplete, FormHelperText, Grid, TextField, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';

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
  error,
  ...rest
}) => {
  return (
    <Grid item xs={style.xs} lg={style.lg} mb={style.mb}>
      <Grid container flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        {required ? <InputLabel required>{label}</InputLabel> : <InputLabel>{label}</InputLabel>}
        <Tooltip title={label}>
          <IconButton>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Autocomplete
        value={value}
        id={id}
        options={options}
        sx={{ width: '100%' }}
        loading={loading}
        renderInput={(params) => {
          return <TextField {...params} label={placeholder} />;
        }}
        onChange={(event, newValue) => func(newValue)}
        {...rest}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </Grid>
  );
};

export default AutoCompleteSelector;
