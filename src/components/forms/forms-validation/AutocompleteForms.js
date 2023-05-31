import { useDispatch } from 'store';

// material-ui
import { createFilterOptions, Autocomplete, Box, Grid, InputAdornment, TextField } from '@mui/material';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
// import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

// assets
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

const filter = createFilterOptions();
// const filterSkills = createFilterOptions();

const validationSchema = yup.object({
  role: yup
    .string()
    .trim()
    .required('Company Type selection is required')
    .matches(/^[a-z\d\-/#_\s]+$/i, 'Only alphanumerics are allowed')
});

const options = ['Option 1', 'Option 2'];

// ==============================|| FORM VALIDATION - AUTOCOMPLETE FORMIK  ||============================== //

const AutoCompleteSelector = ({ setCompanyFun, data }) => {
  return (
    <Autocomplete
      value={options[0]}
      id="auto-complete"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Controllable" />}
    />
  );
};

export default AutoCompleteSelector;
