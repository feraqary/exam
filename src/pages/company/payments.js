// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';
import Table from 'components/Table/Table';

// ==============================|| Add Company Type form ||============================== //
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
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'companyName',
    header: 'Company Name'
  },

  {
    accessorKey: 'orderNo',
    header: 'Order No'
  },
  {
    accessorKey: 'date',
    header: 'Date of Order'
  },
  {
    accessorKey: 'amount',
    header: 'Amount'
  },
  {
    accessorKey: 'payment_method',
    header: 'Payment Method'
  },
  {
    accessorKey: 'payment_plan',
    header: 'Payment Plan'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },

  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Button variant="contained" color="warning">
          Draft
        </Button>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </Box>
    )
  }
];
function PendingPayments() {
  return (
    <Page title=" Pending Payments">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

PendingPayments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PendingPayments;
