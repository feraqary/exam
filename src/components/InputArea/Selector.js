// material-ui
import { NativeSelect } from '@mui/material';

// project imports
import React, { useState, useMemo } from 'react';
// import TagsInput from 'react-tagsinput';

/**
 * A selector component that renders a native select dropdown.
 * @param {Object} props - The component props.
 * @param {Object} props.style - The custom styles to apply to the component.
 * @param {string} props.label - The label for the select.
 * @param {Array} props.options - The options for the select dropdown.
 * @param {string} props.helperText - The helper text to display below the select.
 * @param {string} props.name - The name of the select field.
 * @param {string} props.id - The ID of the select field.
 * @param {boolean} props.required - Indicates if the select is required.
 * @returns {JSX.Element} The rendered Selector component.
 */

import InputLayout from './InputLayout';
import { useField } from 'formik';

const Selector = ({ style, label, options, helperText, name, id, required }) => {
  const [field, meta] = useField(name);
  return (
    <InputLayout style={style} helperText={helperText} label={label} required={required}>
      <NativeSelect id={id} fullWidth {...field}>
        {options.map((option, i) => {
          return <option value={i + 1}>{option}</option>;
        })}
      </NativeSelect>
    </InputLayout>
  );
};

export default Selector;
