// material-ui
import InfoIcon from '@mui/icons-material/Info';
import { Autocomplete, FormHelperText, Grid, IconButton, TextField, Tooltip } from '@mui/material';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { useField, useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
/**
 * A component that provides an autocomplete selector with validation support for Formik forms.
 * @param {Object} props - The component props.
 * @param {Object} props.style - The custom styles to apply to the component.
 * @param {string} props.label - The label for the autocomplete selector.
 * @param {string} props.id - The unique identifier for the autocomplete selector.
 * @param {string} props.name - The name of the field in Formik.
 * @param {Array} props.options - The options array for the autocomplete selector.
 * @param {string} props.placeholder - The placeholder text for the autocomplete selector.
 * @param {function} props.func - An optional function to handle additional actions on value change.
 * @param {string} props.helperText - The helper text to display below the autocomplete selector.
 * @param {...any} rest - Additional props to be passed to the Autocomplete component.
 * @returns {JSX.Element} The rendered AutoCompleteSelector component.
 */

export const AutoCompleteSelectorAPI = ({
  params,
  fetchData,
  labels,
  style,
  label,
  id,
  value,
  // options,
  placeholder,
  required,
  setValue,
  helperText,
  // loading,
  func,
  helperInfo,
  // error,
  name,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  const { touched, values, setFieldValue } = useFormikContext();
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);
  const [loading, setloading] = useState();
  const [error, setIsError] = useState();
  const [isOpened, setOpened] = useState(null);

  // useEffect(() => {
  //   const fetchDataAndSetOptions = async () => {
  //     try {
  //       const data = await dispatch(fetchData());
  //       setOptions(data?.data);
  //     } catch (error) {
  //       console.log('Error while fetching data:', error);
  //     }
  //   };

  //   fetchDataAndSetOptions();
  // }, [isOpened]);

  const handleData = async () => {
    setloading(true);
    // Use the useGetCountriesQuery hook here to fetch data
    // Make sure useGetCountriesQuery returns the response you expect
    const { data, loading, error } = await fetchData();
    console.log('auto complete inside: ', data);

    console.log(data);
    setloading(false);
  };

  // ;
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
        getOptionLabel={(country) => country.Country || country.country || ''}
        id={id}
        options={options}
        onOpen={handleData}
        // options={options}
        name={name}
        value={values[`${name}`]}
        sx={{ width: '100%' }}
        loading={loading}
        renderInput={(params) => <TextField {...params} label={placeholder} error={touched[`${name}`] && !!meta.error[`${name}`]} />}
        onChange={(e, value, reason) => {
          console.log('changed');
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
      {helperText && meta.error && touched[`${name}`] ? (
        <FormHelperText error={true}>{meta.error[`${name}`]}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Grid>
  );
};

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
  disabled,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const { touched, values, setFieldValue } = useFormikContext();

  return (
    <Grid item xs={style.xs} lg={style.lg} mb={style.mb}>
      <Grid container flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        {required ? (
          <InputLabel required disabled={disabled}>
            {label}
          </InputLabel>
        ) : (
          <InputLabel disabled={disabled}>{label}</InputLabel>
        )}

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
        id={id}
        options={options}
        name={name}
        value={values[`${name}`]}
        sx={{ width: '100%' }}
        loading={loading}
        disabled={disabled}
        renderInput={(params) => <TextField {...params} label={placeholder} error={touched[`${name}`] && !!meta.error} />}
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
      {helperText && meta.error && touched[`${name}`] ? (
        <FormHelperText error={true}>{meta.error[`${name}`]}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Grid>
  );
};

/**
 * A component that provides a multiple option autocomplete selector with validation support for Formik forms.
 * @param {Object} props - The component props.
 * @param {Object} props.style - The custom styles to apply to the component.
 * @param {string} props.label - The label for the autocomplete selector.
 * @param {string} props.id - The unique identifier for the autocomplete selector.
 * @param {string} props.name - The name of the field in Formik.
 * @param {Array} props.options - The options array for the autocomplete selector.
 * @param {string} props.placeholder - The placeholder text for the autocomplete selector.
 * @param {function} props.func - An optional function to handle additional actions on value change.
 * @param {string} props.helperText - The helper text to display below the autocomplete selector.
 * @param {...any} rest - Additional props to be passed to the Autocomplete component.
 * @returns {JSX.Element} The rendered AutoCompleteSelector component.
 */

//

export const MultipleAutoCompleteSelector = ({ style, label, id, name, options, placeholder, func, helperText, ...rest }) => {
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
        multiple
        getOptionDisabled={(option) => {
          const selectedValues = values[name] || [];
          return selectedValues.some((selectedValue) => selectedValue?.id === option?.id);
        }}
        loading={true}
        limitTags={2}
        onChange={(e, value, reason) => {
          if (reason === 'clear') {
            setFieldValue(name, []);
          } else {
            setFieldValue(name, value);
          }
          if (func) {
            func(value);
          }
        }}
        value={values[name]}
        renderInput={(params) => <TextField {...params} label={placeholder} error={touched[name] && meta.error[name]} />}
      />
      {helperText && meta.error && touched[name] ? (
        <FormHelperText error={true}>{meta.error}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Grid>
  );
};

export const NormalAutoCompleteSelector = ({
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
  ...rest
}) => {
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
        value={value}
        id={id}
        options={options}
        sx={{ width: '100%' }}
        loading={loading}
        renderInput={(params) => {
          return <TextField {...params} label={placeholder} />;
        }}
        onChange={(event, newValue) => func(newValue)}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </Grid>
  );
};

export default AutoCompleteSelector;
