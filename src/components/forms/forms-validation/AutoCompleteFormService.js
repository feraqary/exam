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

const roles = ['Design and Deccor Companies', 'Engineering Consultancy Offices', 'Financial Audit Companiess', 'Auctions Companies'];

const filter = createFilterOptions();
// const filterSkills = createFilterOptions();

const validationSchema = yup.object({
  role: yup
    .string()
    .trim()
    .required('Company Type selection is required')
    .matches(/^[a-z\d\-/#_\s]+$/i, 'Only alphanumerics are allowed')
});

// ==============================|| FORM VALIDATION - AUTOCOMPLETE FORMIK  ||============================== //

const AutocompleteFormService = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      role: '',
      skills: []
    },
    validationSchema,
    onSubmit: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Submit Success',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );
    }
  });

  return (
    <MainCard title="">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Autocomplete
              fullWidth
              value={formik.values.role}
              disableClearable
              onChange={(event, newValue) => {
                const jobExist = roles.includes(newValue);
                if (!jobExist) {
                  const matchData = newValue.match(/"((?:\\.|[^"\\])*)"/);
                  formik.setFieldValue('role', matchData && matchData[1]);
                } else {
                  formik.setFieldValue('role', newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;
                const isExisting = options.some((option) => inputValue === option);
                if (inputValue !== '' && !isExisting) {
                  filtered.push(`Add "${inputValue}"`);
                }
                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              autoHighlight
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={roles}
              getOptionLabel={(option) => {
                let value = option;
                const jobExist = roles.includes(option);
                if (!jobExist) {
                  const matchData = option.match(/"((?:\\.|[^"\\])*)"/);
                  if (matchData && matchData[1]) value = matchData && matchData[1];
                }
                return value;
              }}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  {option}
                </Box>
              )}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="role"
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  helperText={formik.touched.role && formik.errors.role && formik.errors.role}
                  placeholder="Choose Company Types"
                  InputProps={{
                    ...params.InputProps,
                    sx: { bgcolor: 'grey.0' },
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowDropDown sx={{ color: 'text.primary' }} />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default AutocompleteFormService;
