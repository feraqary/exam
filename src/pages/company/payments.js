// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import Payment from 'components/widget/Data/company/payments';

// ==============================|| Add Company Type form ||============================== //
function Payments() {
  return (
    <Page title=" Pending Payments">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Payment />
        </Grid>
      </Grid>
    </Page>
  );
}

Payments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Payments;
