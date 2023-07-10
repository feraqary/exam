// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Manage International Project ||============================== //

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
    accessorKey: 'location',
    header: 'Location'
  },
  {
    accessorKey: 'developerCompany',
    header: 'Developer Company'
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
          Restore
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    projectName: 'Khidmah',
    developerCompany: 'Developer Company',
    location: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    projectName: 'Forum',
    developerCompany: 'Broker Company',
    location: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    projectName: 'Dubai Holding',
    developerCompany: 'Marketing Company',
    location: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    projectName: 'BlueStone',
    developerCompany: 'Developer Company',
    location: 'USA',
    proId: 'PA283102',
    action: ' edit, multiple'
  }
];

function ManageProject() {
  return (
    <Page title="Manage Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageProject;
