// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useEffect, useState } from 'react';
import Table from 'components/Table/Table';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getActiveSubscription } from 'store/slices/company-section/action/company';

// ==============================|| View Active Subscriptions form ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'comp_name',
    header: 'Company Name'
  },

  {
    accessorKey: 'standard_units',
    header: 'Standard'
  },
  {
    accessorKey: 'featured_units',
    header: 'Featured'
  },
  {
    accessorKey: 'premium_units',
    header: 'Premium'
  },
  {
    accessorKey: 'topdeal_units',
    header: 'Deal of the Week'
  },
  {
    accessorKey: 'total_price',
    header: 'Total'
  },
  {
    accessorKey: 'remaining',
    header: 'Remaining Units'
  },
  {
    accessorKey: 'start_date',
    header: 'Subscription Start Date'
  },
  {
    accessorKey: 'end_date',
    header: 'Subscription End Date'
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
function ActiveSubscriptions() {
  const dispatch = useDispatch();
  const { activeSubscription } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getActiveSubscription());
  }, []);
  return (
    <Page title="Active Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={activeSubscription} />
        </Grid>
      </Grid>
    </Page>
  );
}

ActiveSubscriptions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActiveSubscriptions;
