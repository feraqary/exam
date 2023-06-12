// material-ui
import { Grid, InputAdornment, TextField } from '@mui/material';

// project imports
import React, { useState } from 'react';
import { toast } from 'react-toastify';

// assets
import { UploadFile } from '@mui/icons-material';
import InputLayout from './InputLayout';
import { forwardRef } from 'react';

const FileUpload = forwardRef(({ label, type, placeholder, helperText, image, style, setValue, imagePreview, setImagePreview }, ref) => {
  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      URL.revokeObjectURL(img.src);

      if (width > 1920 || height > 1080) {
        setValue(null);
        toast.error(`image file must be 1920x1080`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      } else if (file.size / 1024 > 10) {
        setValue(null);
        toast.error(`file size must not exceed 10MB`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      } else {
        setImagePreview(URL.createObjectURL(file));
        setValue(file);
      }
    };
  };

  return (
    <>
      <InputLayout label={label} helperText={helperText} style={style}>
        <TextField
          required
          type="file"
          fullWidth
          placeholder={placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <UploadFile />
              </InputAdornment>
            )
          }}
          onChange={(e) => handleImagePreview(e)}
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
