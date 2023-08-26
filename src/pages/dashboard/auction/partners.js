// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useState } from 'react';

// ==============================|| Auction datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'name.projectName',
    header: 'Name'
  },
  {
    accessorKey: 'name.companyLogo',
    header: 'Logo',
    Cell: ({ cell }) => <img src={cell.getValue()} alt="" width={50} height={70} style={{ objectFit: 'contain' }} />
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
          Edit
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
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    sino: 'PB192323'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    sino: 'PA2831023'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    sino: 'PA283102'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    sino: 'PA2831023'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    sino: 'PA283102'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    sino: 'PA283102'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    sino: 'PA283102'
  }
];

function Partners() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  return (
    <Page title="Manage Partners">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

Partners.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Partners;
