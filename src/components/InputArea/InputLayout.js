// material-ui
import { Grid, FormHelperText } from '@mui/material';

// project imports
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import React, { useState, useMemo } from 'react';

const InputLayout = ({ label, helperText, style, children }) => {
  return (
    <Grid item xs={style.xs} lg={style.lg}>
      <InputLabel required>{label}</InputLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
    </Grid>
  );
};

export default InputLayout;
