// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'webID',
    header: 'Web Id'
  },
  {
    accessorKey: 'unitname',
    header: 'Unit Name'
  },
  {
    accessorKey: 'agent',
    header: 'Company/Agent'
  },
  {
    accessorKey: 'offer',
    header: 'Offer Category',
    Cell: ({ cell }) => {
      return <div>{cell.getValue()}% offer</div>;
    }
  },
  { accessorKey: 'expirydate', header: 'Expiry Date' },

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
          Edit Promotions
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
    unitname: 'UAE',
    webID: 'PB192323',

    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4
  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',

    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4
  },
  {
    unitname: 'UAE',
    webID: 'PA283102',

    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4
  },
  {
    unitname: 'US',
    webID: 'PA2831023',

    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4
  },
  {
    unitname: 'UAE',
    webID: 'PA283102',

    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4
  },
  {
    unitname: 'UAE',
    webID: 'PA283102',

    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4
  },
  {
    unitname: 'USA',
    webID: 'PA283102',

    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4
  }
];

function OfferExhangeUnit() {
  return (
    <Page title="Offer Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

OfferExhangeUnit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default OfferExhangeUnit;
