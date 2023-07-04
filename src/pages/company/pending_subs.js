// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useEffect } from 'react';
import Table from 'components/Table/Table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPendingSubscription } from 'store/slices/company-section/action/company';

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
  const { pendingSubscription } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingSubscription());
  }, []);
  return (
    <Page title="Pending Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={pendingSubscription} />
        </Grid>
      </Grid>
    </Page>
  );
}

PendingSubscriptions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PendingSubscriptions;
