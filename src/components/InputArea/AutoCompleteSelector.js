// material-ui
import { Autocomplete, Grid, TextField } from '@mui/material';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';
const options = ['Option 1', 'Option 2'];

// ==============================|| FORM VALIDATION - AUTOCOMPLETE FORMIK  ||============================== //

const AutoCompleteSelector = ({ style, label, id }) => {
  return (
    <Grid item xs={style.xs} lg={style.lg} mb={style.mb}>
      <InputLabel required>{label}</InputLabel>
      <Autocomplete
        value={options[0]}
        id={id}
        options={options}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Grid>
  );
};

export default AutoCompleteSelector;
