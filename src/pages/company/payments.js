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


  const data = [
    {
      companyName: 'Aldar',
      orderNo: '1100',
      date: '3-05-2023',
      amount: '7300',
      payment_method: 'Visa Card',
      payment_plan: 'Monthly',
      status: 'Paid Subscription'
    },
    {
      companyName: 'Aldar',
      orderNo: '300',
      date: '3-05-2023',
      amount: '2000',
      payment_method: 'Debit Card',
      payment_plan: 'Monthly',
      status: 'Paid Subscription'
    },
    {
      companyName: 'Naruto',
      orderNo: '1050',
      date: '02-30-2023',
      amount: '56000',
      payment_method: 'Credit Card',
      payment_plan: 'Monthly',
      status: 'Paid Subscription'
    },
    {
      companyName: 'Naruto',
      orderNo: '1400',
      date: '02-30-2023',
      amount: '3120',
      payment_method: 'Cash',
      payment_plan: 'Yearly',
      status: 'Paid Subscription'
    },
  ];
  
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
