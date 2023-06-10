// material-ui
import { Grid, InputAdornment, TextField } from '@mui/material';

// project imports
import React, { useState } from 'react';
// import TagsInput from 'react-tagsinput';
// assets
import { UploadFile } from '@mui/icons-material';
import InputLayout from './InputLayout';
import { forwardRef } from 'react';

const FileUpload = forwardRef(({ label, type, placeholder, helperText, image, style, setValue, imagePreview, setImagePreview }, ref) => {
  const handleImagePreview = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleFileUploadChange = (e) => {
    setValue(e.target.files[0]);
  };

  return (
    <>
      <InputLayout label={label} helperText={helperText} style={style}>
        <TextField
          type={type}
          fullWidth
          placeholder={placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <UploadFile />
              </InputAdornment>
            ),
            multiline: true
          }}
          onChange={(e) => {
            handleImagePreview(e);
            handleFileUploadChange(e);
          }}
          inputRef={ref}
        />
      </InputLayout>
      {image && (
        <Grid item xs={3} lg={style.lg} alignContent="right">
          <img src={imagePreview} alt={image.alt} width={image.width} height={image.height} />
        </Grid>
      )}
    </>
  );
});

export default FileUpload;
