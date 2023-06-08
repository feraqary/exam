// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| contract datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'companyname',
    header: 'Company Name'
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
        <Button variant="contained" color="primary">
          View
        </Button>
        <Button variant="contained" color="primary">
          Download
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    companyname: 'Developer Company',
    sino: 1,
    status: ' uploaded'
  },
  {
    companyname: 'Broker Company',
    sino: 5,
    status: ' uploaded'
  },
  {
    companyname: 'Marketing Company',
    sino: 5,
    status: ' uploaded'
  },
  {
    companyname: 'Developer Company',
    sino: 5,
    status: ' uploaded'
  }
];

function ManageContract() {
  return (
    <Page title="Manage Contract">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageContract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageContract;
