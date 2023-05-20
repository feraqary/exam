// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import PendingPayments from 'components/widget/Data/subscription_mng/pending_sub';

// ==============================|| Add Company Type form ||============================== //
function CompanyType() {
  return (
    <Page title="Payments">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Pending Payments" />
          <PendingPayments />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
