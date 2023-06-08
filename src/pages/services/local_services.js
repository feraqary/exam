// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
// ==============================|| Local Services ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'company',
    header: 'Company Name'
  },
  {
    accessorKey: 'type',
    header: 'Company Type'
  },
  {
    accessorKey: 'verify',
    header: 'Verified',
    Cell: ({ cell }) => <>{cell.getValue() ? 'Verified' : 'Not verified'}</>
  },
  {
    accessorKey: 'service',
    header: 'Service Name'
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
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },

  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },

  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'House Cleaning',
    verify: false,
    type: '2-12-2023'
  }
];

function LocalServices() {
  return (
    <Page title="Manage Local Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}
LocalServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalServices;
