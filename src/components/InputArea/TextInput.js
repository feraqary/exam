// material-ui
import { TextField } from '@mui/material';
import { useField } from 'formik';

// project imports
import React from 'react';
import InputLayout from './InputLayout';

const InputText = ({ label, placeholder, helperText, style, type, value, setValue,required, ...rest }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
/**
 * A text input component using the TextField from Material-UI.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text for the input.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.helperText - The helper text for the input.
 * @param {Object} props.style - The style object for customizing the input layout.
 * @param {string} props.type - The type of the input.
 * @param {boolean} props.required - Indicates if the input is required.
 * @param {string} props.id - The id attribute of the input.
 * @param {string} props.name - The name attribute of the input.
 * @returns {React.Element} The rendered component.
 */

  const [field, meta] = useField(rest);
  return (
    <InputLayout label={label} helperText={helperText} style={style}  metaError={meta.error} metaTouched={meta.touched} required={required}>
      <TextField  id={rest.id}
        name={rest.name}
        fullWidth
        placeholder={placeholder}
        type={type}
        {...rest}
        {...field}
        sx={{ borderColor: 'red' }}
        error={meta.error && meta.touched ? true : false} />
      {/* <TextField fullWidth placeholder={placeholder} type={type} {...rest} value={value} onChange={(e) => handleInputChange(e)} /> */}
    </InputLayout>
  );
};

export default InputText;
