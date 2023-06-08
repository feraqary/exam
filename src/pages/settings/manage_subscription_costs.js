// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';
// ==============================|| FIELDS ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'si_num',
    header: 'SI Number'
  },
  {
    accessorKey: 'country',
    header: 'Country'
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
    accessorKey: 'standard',
    header: 'Standard'
  },
  {
    accessorKey: 'deal_of_week',
    header: 'Deal of Week'
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
        <AqaryButton variant="contained">Edit </AqaryButton>
        <Button variant="contained" color="primary">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    si_num: 1,
    featured: '20%',
    premium: '23%',
    standard: '15%',

    country: 'USA',
    deal_of_week: '20%'
  },
  {
    si_num: 1,
    featured: '20%',
    premium: '25%',
    standard: '15%',
    country: 'UAE',
    deal_of_week: '30%'
  },
  {
    si_num: 1,
    featured: '15%',
    premium: '20%',
    standard: '10%',
    country: 'Egypt',
    deal_of_week: '20%'
  },
  {
    si_num: 1,
    featured: '25%',
    premium: '28%',
    standard: '15%',
    country: 'India',
    deal_of_week: '25%'
  }
];

function ManageSubscriptionCosts() {
  return (
    <Page title="Subscriptions Costs">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageSubscriptionCosts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageSubscriptionCosts;
