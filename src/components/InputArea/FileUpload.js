// material-ui
import { Grid, InputAdornment, TextField } from '@mui/material';

// project imports
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import React, { useState, useMemo } from 'react';
// import TagsInput from 'react-tagsinput';
// assets
import { UploadFile } from '@mui/icons-material';
import InputLayout from './InputLayout';

const FileUpload = ({ label, type, placeholder, helperText, image, style }) => {
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
            )
          }}
        />
      </InputLayout>
      {image && (
        <Grid item xs={3} lg={8} alignContent="right">
          <img src="" alt={image.alt} width={image.width} height={image.height} />
        </Grid>
      )}
    </>
  );
};

export default FileUpload;
