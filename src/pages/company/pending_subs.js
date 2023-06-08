// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';
import Table from 'components/Table/Table';

// ==============================|| View Pending Subscriptions ||============================== //

const data = [
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Payment Failed'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Payment Failed'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'companyName',
    header: 'Company Name'
  },

  {
    accessorKey: 'standard',
    header: 'Standard'
  },
  {
    accessorKey: 'featured',
    header: 'Featured'
  },
  {
    accessorKey: 'premium',
    header: 'Premium'
  },
  {
    accessorKey: 'deal_of_week',
    header: 'Deal of the Week'
  },
  {
    accessorKey: 'total',
    header: 'Total'
  },
  {
    accessorKey: 'added_date',
    header: 'Added Date'
  },
  {
    accessorKey: 'contract_Start_End_Date',
    header: 'Contract Start /End Date'
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
function PendingSubscriptions() {
  return (
    <Page title="Pending Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

PendingSubscriptions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PendingSubscriptions;
