// material-ui
import { Autocomplete, FormHelperText, Grid, TextField } from '@mui/material';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';

// ==============================|| FORM VALIDATION - AUTOCOMPLETE FORMIK  ||============================== //

const AutoCompleteSelector = ({ style, label, id, value, options, placeholder, setValue, helperText, loading, func, error, ...rest }) => {
  return (
    <Grid item xs={style.xs} lg={style.lg} mb={style.mb}>
      <InputLabel required>{label}</InputLabel>
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
