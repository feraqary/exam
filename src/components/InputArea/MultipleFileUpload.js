// material-ui
import { Grid, InputAdornment, TextField } from '@mui/material';

// project imports
import React, { useState } from 'react';
import { toast } from 'react-toastify';

// assets
import { UploadFile } from '@mui/icons-material';
import InputLayout from './InputLayout';
import { forwardRef } from 'react';

const MultipleFileUpload = forwardRef(({ label, placeholder, helperText, images, style, setValues, imagePreviews, setImagePreviews }, ref) => {
  const handleImagePreview = (e) => {
    const files = e.target.files;
    const newValues = [...images];
    const newPreviews = [...imagePreviews];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        URL.revokeObjectURL(img.src);

        if (width > 1920 || height > 1080) {
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
          newValues[i] = null;
        } else if (file.size / 1024 > 10) {
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
          newValues[i] = null;
        } else {
          newPreviews[i] = URL.createObjectURL(file);
          newValues[i] = file;
        }

        setValues(newValues);
        setImagePreviews(newPreviews);
      };
    }
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
          multiple
        />
      </InputLayout>
      {images.length > 0 && (
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item key={index} xs={3} lg={style.lg} alignContent="right">
              <img src={imagePreviews[index]} alt={image.alt} width={image.width} height={image.height} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
});

export default MultipleFileUpload;
