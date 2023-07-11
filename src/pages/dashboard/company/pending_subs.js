// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useEffect, useState } from 'react';
import Table from 'components/Table/Table';
import { useGetPendingSubscriptionsQuery } from 'store/services/company/companyApi';

// ==============================|| View Pending Subscriptions ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'CompanyName',
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
    accessorKey: 'created_at',
    header: 'Added Date'
  },
  {
    accessorKey: 'start_date',
    header: 'Contract Start'
  },
  {
    accessorKey: 'end_date',
    header: 'Contract end'
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
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: pendingSubscriptions, isLoading, isError, isFetching, error } = useGetPendingSubscriptionsQuery(pagination);

  useEffect(() => {}, [pagination.pageIndex, pagination.pageSize]);

  if (isLoading) return;
  return (
    <Page title="Pending Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={pendingSubscriptions?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={pendingSubscriptions?.Total}
          />
        </Grid>
      </Grid>
    </Page>
  );
}

PendingSubscriptions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PendingSubscriptions;
