// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useState } from 'react';

// ==============================|| Auction datatable ||============================== //

const data = [
  {
    projectName: 'Forum',
    userid: 'PA283102',
    passport: '/assets/images/company_logo/logo1.png',
    idproof: '/assets/images/company_logo/logo1.png',
    sino: 'PA283102',
    phone: 'Cercie',
    email: 'Lannisters'
  },
  {
    projectName: 'Dubai Holding',
    userid: 'PA283102',
    passport: '/assets/images/company_logo/logo1.png',
    idproof: '/assets/images/company_logo/logo1.png',
    sino: 'PA283102',
    phone: 'Arya Stark',
    email: 'Winterfell'
  },
  {
    projectName: 'BlueStone',
    userid: 'PA283102',
    passport: '/assets/images/company_logo/logo1.png',
    idproof: '/assets/images/company_logo/logo1.png',
    sino: 'PA283102',
    phone: 'Joffery',
    email: 'Lannisters'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI NO'
  },
  {
    accessorKey: 'userid',
    header: 'User Id'
  },
  {
    accessorKey: 'projectName',
    header: 'Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'idproof',
    header: 'Id Proof',
    Cell: ({ cell }) => <img src={cell.getValue()} alt="" width={50} height={50} style={{ objectFit: 'contain' }} />
  },
  {
    accessorKey: 'passport',
    header: 'Passport',
    Cell: ({ cell }) => <img src={cell.getValue()} alt="" width={50} height={50} style={{ objectFit: 'contain' }} />
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
          View
        </Button>
        <Button variant="contained" color="primary">
          Delete
        </Button>
      </Box>
    )
  }
];

function AuctionUsers() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Auction Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

AuctionUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AuctionUsers;
