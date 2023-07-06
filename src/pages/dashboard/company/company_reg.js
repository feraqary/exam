// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';
import Table from 'components/Table/Table';

// ==============================|| View Company Registration ||============================== //
const data = [
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'comp_name',
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
    accessorKey: 'subs_mode',
    header: 'Subscription Mode'
  },
  {
    accessorKey: 'subsDate',
    header: 'Subscription Date'
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
        <Button variant="contained" color="primary">
          View Contract
        </Button>
        <Button variant="contained" color="primary">
          View Profile
        </Button>
      </Box>
    )
  }
];
function CompanyType() {
  return (
    <Page title=" Company Registration">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
