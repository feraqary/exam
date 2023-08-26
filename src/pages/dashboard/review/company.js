// material-ui
import { Grid, Box, Button } from '@mui/material';
import Rating from '@mui/material/Rating';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useState } from 'react';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'companyname',
    header: 'Company Name '
  },
  {
    accessorKey: 'username',
    header: 'Username '
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    Cell: ({ cell }) => <Rating value={cell.getValue()} readOnly />
  },
  {
    accessorKey: 'service',
    header: 'Service Provided'
  },
  {
    accessorKey: 'comments',
    header: 'Comments'
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
          Verify
        </Button>
        <Button variant="contained" color="primary">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    companyname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    rating: 3,
    email: 'new@gmail.com',
    service: ' uploaded'
  },
  {
    companyname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    rating: 2,
    email: 'new@gmail.com',
    service: ' uploaded'
  },
  {
    companyname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    rating: 5,
    email: 'new@gmail.com',
    service: ' uploaded'
  }
];
function CompanyReviews() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title=" Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyReviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyReviews;
