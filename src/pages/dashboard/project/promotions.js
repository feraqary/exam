// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import { useState } from 'react';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Manage Project Promotions ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'proId',
    header: 'Project ID '
  },

  {
    accessorKey: 'projectName',
    header: 'Project Name'
  },
  {
    accessorKey: 'expDay',
    header: 'Expiry Date'
  },
  {
    accessorKey: 'promoType',
    header: 'Promotion Type'
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
          Edit
        </Button>
        <Button variant="contained" color="error">
          Remove
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    projectName: 'Khidmah',
    promoType: 'Developer Company',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    projectName: 'Forum',
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    projectName: 'Dubai Holding',
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    projectName: 'BlueStone',
    promoType: 'Developer Company',
    expDay: 'USA',
    proId: 'PA283102',
    action: ' edit, multiple'
  }
];
function ManageProject() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Manage Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} pagination={pagination} setPagination={setPagination} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageProject;
