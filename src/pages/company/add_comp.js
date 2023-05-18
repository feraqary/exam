// material-ui
import { Grid, Button, Alert } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';

// assets
import { UploadFile } from '@mui/icons-material';

// ==============================|| Add Company Types form ||============================== //
function companyType() {
  return (
    <Page title="Add Company Types">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Company Type" />
        </Grid>
      </Grid>
    </Page>
  );
}

companyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default companyType;
