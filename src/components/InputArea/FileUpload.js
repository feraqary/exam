// material-ui
import { Grid, InputAdornment, TextField } from '@mui/material';
// project imports
import React, { forwardRef } from 'react';
// assets
import { HelpRounded, UploadFile } from '@mui/icons-material';
import InputLayout from './InputLayout';

import { useField } from 'formik';

const FileUpload = forwardRef(({ label, placeholder, helperText, image, style, setFieldValue, id, required, ...rest }, ref) => {
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
      >
        <TextField
          {...field}
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

export default FileUpload;