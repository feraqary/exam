// material-ui
import { NativeSelect } from '@mui/material';

// project imports
import React, { memo } from 'react';
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
import { useField, useFormikContext } from 'formik';

const Selector = memo(({ style, label, options, helperText, name, id, required, helperInfo, reset }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <InputLayout style={style} helperText={helperText} label={label} required={required} helperInfo={helperInfo}>
      <NativeSelect
        id={id}
        fullWidth
        {...field}
        onChange={(val) => {
          setFieldValue(name, val.target.value);
          if (reset) {
            reset.forEach((ele) => setFieldValue(ele, ''));
          }
        }}
      >
        {/* <option value="">None</option> */}
        {options.map((option) => {
          return (
            <option value={option.value} selected={field.name === option.value}>
              {option.label}
            </option>
          );
        })}
      </NativeSelect>
    </InputLayout>
  );
});
//

export const NormalSelector = ({ id, style, label, options, helperText, value, setValue }) => {
  return (
    <InputLayout style={style} helperText={helperText} label={label} required={required} helperInfo={helperInfo}>
      <NativeSelect
        id={id}
        fullWidth
        {...field}
        onChange={(val) => {
          setFieldValue(name, val.target.value);
          if (reset) {
            reset.forEach((ele) => setFieldValue(ele, ''));
          }
        }}
      >
        {/* <option value="">None</option> */}
        {options.map((option) => {
          return (
            <option value={option.value} selected={field.name === option.value}>
              {option.label }
            </option>
          );
        })}
      </NativeSelect>
    </InputLayout>
  );
}
//


export default Selector;
