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
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'tower',
    header: 'Tower Name'
  },
  {
    accessorKey: 'community',
    header: 'Community'
  },
  {
    accessorKey: 'image',
    header: 'Images',
    Cell: ({ cell }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <img src={cell.getValue()} alt="company logo" width={50} height={50} style={{ objectFit: 'contain' }} />
      </Box>
    )
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
      </Box>
    )
  }
];

const data = [
  {
    community: 'Broker Company',
    sino: 'PA283102',
    tower: 'Lannisters',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    community: 'Marketing Company',
    sino: 'PA283102',
    tower: 'Winterfell',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    community: 'Developer Company',
    sino: 'PA283102',
    tower: 'Lannisters',
    image: '/assets/images/company_logo/logo1.png'
  }
];

function CommunityManageTower() {
  return (
    <Page title="Community Guide">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

CommunityManageTower.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CommunityManageTower;
