// material-ui
import { Grid, FormHelperText, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

// project imports
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import React, { useState, useMemo } from 'react';


const InputLayout = ({ label, helperText, style, required, metaError, metaTouched, children }) => {
  return (
    <Grid item xs={style.xs} lg={style.lg}>
      <Grid container flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <InputLabel required={required}>{label}</InputLabel>
        <Tooltip title={helperText}>

          <IconButton>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip> : <></>}
      </Grid>
      {children}
      {metaError && metaTouched ? (
        <FormHelperText sx={{ color: 'red' }}>{metaError}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Grid>
  );
};

export default InputLayout;
