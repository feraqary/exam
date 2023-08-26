// material-ui
import { Grid, Box, Button, CircularProgress, Typography, Chip } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useState } from 'react';

// ==============================|| Reviews datatable ||============================== //

const data = [
  {
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    quality: 25,
    sqft: 2430,
    bedroom: 4,
    price: 124435
  },
  {
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    quality: 25,
    sqft: 2430,
    bedroom: 4,
    price: 124435
  },
  {
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    quality: 25,
    sqft: 2430,
    bedroom: 4,
    price: 124435
  },
  {
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Cercie',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    quality: 25,
    sqft: 2430,
    bedroom: 4,
    price: 124435
  },
  {
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Arya Stark',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    quality: 25,
    sqft: 2430,
    bedroom: 4,
    price: 124435
  },
  {
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'USA',
    location: 'USA',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    quality: 25,
    sqft: 2430,
    bedroom: 4,
    price: 124435
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'featured',
    header: 'Featured',
    Cell: ({ renderedCellValue, row }) => <Chip label={row.original.featured} color="primary" variant="outlined" />
  },
  {
    accessorKey: 'webID',
    header: 'Web Id'
  },
  {
    accessorKey: 'reference',
    header: 'Reference'
  },
  {
    accessorKey: 'unitname',
    header: 'Unit Name'
  },
  {
    accessorKey: 'developerCompany',
    header: 'Company/Agent'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'type',
    header: 'Type'
  },

  {
    accessorKey: 'location',
    header: 'Location'
  },
  {
    accessorKey: 'price',
    header: 'Price'
  },
  {
    accessorKey: 'quality',
    header: 'Quality',
    Cell: ({ cell }) => (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={cell.getValue()} color={cell.getValue() < 50 ? 'error' : 'primary'} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h5" component="div" color="text.secondary">
            {`${cell.getValue()}%`}
          </Typography>
        </Box>
      </Box>
    )
  },
  { accessorKey: 'sqft', header: 'Sqft' },
  { accessorKey: 'bedroom', header: 'Bedroom' },
  { accessorKey: 'insert', header: 'Insert' },
  { accessorKey: 'movedDate', header: 'Moved Date' },

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
          Live View
        </Button>
        <Button color="primary" variant="contained">
          View
        </Button>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="primary">
          Add to Exchange Offer
        </Button>
        <Button variant="contained" color="primary">
          Remove
        </Button>
        <Button variant="contained" color="error">
          Remove Exchange
        </Button>
      </Box>
    )
  }
];

function LocalExchangeUnit() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Local Exchange Unit">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

LocalExchangeUnit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalExchangeUnit;
