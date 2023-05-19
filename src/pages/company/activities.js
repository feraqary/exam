// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';

// assets
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import { UploadFile } from '@mui/icons-material';

// ==============================|| Add Company Type form ||============================== //
function CompanyType() {
  return (
    <Page title=" Company Section Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="View Activity" />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
