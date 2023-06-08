// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'community',
    header: 'Community'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'image',
    header: 'Images',
    Cell: ({ cell }) => (
      <Box gap="1rem" sx={{ display: 'flex', gap: '1rem' }}>
        <Box display="flex" alignItems="center">
          <img src={cell.getValue()} alt="Company Logo" width={50} height={50} style={{ objectFit: 'contain' }} />
        </Box>
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
    description: 'Lannisters',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    community: 'Marketing Company',
    sino: 'PA283102',
    description: 'Winterfell',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    community: 'Developer Company',
    sino: 'PA283102',
    description: 'Lannisters',
    image: '/assets/images/company_logo/logo1.png'
  }
];

function ManageCommunityGuide() {
  return (
    <Page title="Community Guide">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageCommunityGuide.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageCommunityGuide;
