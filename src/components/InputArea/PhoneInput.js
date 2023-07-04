// material-ui
import { useField, useFormikContext } from 'formik';
import MuiPhoneNumber from 'material-ui-phone-number';

// project imports
import React from 'react';
import InputLayout from './InputLayout';

/**
 * A phone number input component.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the input.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.helperText - The helper text to display below the input.
 * @param {Object} props.style - The custom styles to apply to the component.
 * @param {string} props.type - The type of the input.
 * @param {boolean} props.required - Indicates if the input is required.
 * @returns {JSX.Element} The rendered PhoneInput component.
 */

const PhoneInput = ({ label, placeholder, helperText, style, type, required, ...rest }) => {
  const [field, meta] = useField(rest);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  /**
   * Event handler for onChange event of the phone number input.
   * @param {string} value - The phone number value entered by the user.
   */

  const handleOnChange = (value) => {
    setFieldValue(field.name, value);
  };

  return (
    <InputLayout
      label={label}
      helperText={helperText}
      style={style}
      metaError={meta?.error}
      metaTouched={meta?.touched}
      required={required}
    >
      <MuiPhoneNumber
        defaultCountry={'us'}
        onChange={handleOnChange}
        value={field.value}
        name={field.name}
        id={field.id}
        fullWidth
        variant="outlined"
        error={meta.error && meta.touched ? true : false}
        onBlur={() => setFieldTouched(field.name, true)}
      />
    </InputLayout>
  );
};

export default PhoneInput;
