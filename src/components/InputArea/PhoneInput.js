// material-ui
import { useField, useFormikContext } from 'formik';
import MuiPhoneNumber from 'material-ui-phone-number';

// project imports
import React, { useState } from 'react';
import InputLayout from './InputLayout';

const PhoneInput = ({ label, placeholder, helperText, style, type, required, ...rest }) => {
  const [field, meta] = useField(rest);
  const { setFieldValue, setFieldTouched } = useFormikContext();

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
