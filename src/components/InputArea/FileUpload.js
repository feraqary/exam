// material-ui
import { Grid, InputAdornment, TextField } from '@mui/material';
// project imports
import React, { forwardRef } from 'react';
// assets
import { UploadFile } from '@mui/icons-material';
import InputLayout from './InputLayout';

import { useField } from 'formik';

/**
 * A component for uploading files with an associated input field and optional image preview.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.helperText - The helper text to display below the input field.
 * @param {Object} props.image - The image configuration for the preview.
 * @param {Object} props.style - The custom styles to apply to the component.
 * @param {function} props.setFieldValue - A function to set the form field value in Formik.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {boolean} props.required - Indicates if the input field is required.
 * @param {...any} rest - Additional props to be passed to the TextField component.
 * @param {React.Ref} ref - The ref forwarded to the TextField component.
 * @returns {JSX.Element} The rendered FileUpload component.
 */

const FileUpload = forwardRef(({ label, placeholder, helperText, image, style, setFieldValue, id, required, helperInfo, ...rest }, ref) => {
  console.log(rest);
  const [field, meta] = useField(rest);

  return (
    <>
      <InputLayout
        label={label}
        helperText={helperText}
        style={style}
        metaError={meta.error}
        metaTouched={meta.touched}
        required={required}
        helperInfo={helperInfo}
      >
        <TextField
          {...field}
          {...rest}
          required={required}
          type="file"
          id={id}
          name={field.name}
          fullWidth
          placeholder={placeholder}
          value={field.value?.logoImage}
          inputRef={ref}
          onChange={(e) => {
            setFieldValue(field.name, e.target.files[0]);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <UploadFile />
              </InputAdornment>
            )
          }}
          error={meta.error && meta.touched}
        />
      </InputLayout>
      {image && (
        <Grid item xs={3} lg={style.lg} alignContent="right">
          {field.value ? (
            <img
              src={field.value && !meta.error && URL.createObjectURL(field.value)}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ) : (
            <img src="/assets/image_preveiw.jpg" alt={image.alt} width={100} height={100} />
          )}
        </Grid>
      )}
    </>
  );
});

export const MultipleFileUpload = forwardRef(
  ({ label, placeholder, helperText, image, style, setFieldValue, id, required, helperInfo, ...rest }, ref) => {
    const [field, meta] = useField(rest);
    return (
      <>
        <InputLayout
          label={label}
          helperText={helperText}
          style={style}
          metaError={meta.error}
          metaTouched={meta.touched}
          required={required}
          helperInfo={helperInfo}
        >
          <TextField
            {...field}
            multiple
            required={required}
            type="file"
            id={id}
            name={field.name}
            fullWidth
            placeholder={placeholder}
            value={field.value?.logoImage}
            inputRef={ref}
            onChange={(e) => {
              setFieldValue(field.name, e.target.files[0]);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <UploadFile />
                </InputAdornment>
              )
            }}
            error={meta.error && meta.touched}
          />
        </InputLayout>
      </>
    );
  }
);

export default FileUpload;
