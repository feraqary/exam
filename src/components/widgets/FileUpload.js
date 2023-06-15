// material-ui
import { Grid, InputAdornment, TextField } from '@mui/material';

// project imports
import React, { useState } from 'react';
import { toast } from 'react-toastify';

// assets
import { UploadFile } from '@mui/icons-material';
import InputLayout from './InputLayout';
import { forwardRef } from 'react';
import { words } from 'lodash';

const FileUpload = forwardRef(({ label, type, placeholder, helperText, image, style, setValue, imagePreview, setImagePreview }, ref) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!fileTypes.includes(file?.type.split('/')[1])) {
      setValue(null);
      ref.current.value = null;
      toast.error(`image file must a ${fileTypes.join(' | ')} format`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    }

    if (file.type.split('/')[1] !== 'pdf') {
      const img = new Image();
      img.src = file ? URL.createObjectURL(file) : null;

      img.onload = () => {
        const width = img.width;
        const height = img.height;
        URL.revokeObjectURL(img.src);

        if (width > 1920 || height > 1080) {
          setValue(null);
          ref.current.value = null;
          if (image) setImagePreview(null);
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
        } else if (file.size / 1024 > 100) {
          setValue(null);
          ref.current.value = null;
          if (image) setImagePreview(null);
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
          if (image) {
            setImagePreview(URL.createObjectURL(file));
          }
          setValue(file);
        }
      };
    }

    if (file.type.split('/')[1] === 'pdf') {
      if (file.size / 1024 > 100) {
        ref.current.value = null;
        setValue(null);
        if (image) setImagePreview(null);
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
        setValue(file);
      }
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
          onChange={(e) => handleImageChange(e)}
          inputRef={ref}
        />
      </InputLayout>
      {image && (
        <Grid item xs={3} lg={style.lg}  alignContent="right">
          {imagePreview ? 
          <img src={imagePreview} alt={image.alt} width={image.width} height={image.height} />:
          <img src='/assets/image_preveiw.jpg' alt={image.alt} width={100} height={100} />}
        </Grid>
      )}
    </>
  );
});

export default FileUpload;
