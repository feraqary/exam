// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import Payment from 'components/application/e-commerce/Checkout/Payment';

// ==============================|| Add Company Type form ||============================== //
function Payment() {
  return (
    <Page title="Payments">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Pending Payments" />
          <Payment />
        </Grid>
      </Grid>
    </Page>
  );
}

Payment.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Payment;
