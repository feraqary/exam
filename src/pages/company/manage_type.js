// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import TypeComp from 'components/widget/Data/company/comp_type';

// ==============================|| Manage Company Type ||============================== //
function CompanyType() {
  return (
    <Page title=" Manage Company Types">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <TypeComp />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
