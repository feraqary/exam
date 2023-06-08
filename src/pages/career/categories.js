// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Careers datatable ||============================== //
const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'image',
    header: 'Image',
    Cell: ({ cell }) => <img src={cell.getValue()} alt="logo" width={50} height={50} style={{ objectFit: 'contain' }} />
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ cell }) => (
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
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    category: 'UAE',
    sino: 4,
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    category: 'UAE',
    sino: 1,
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    category: 'UAE',
    sino: 5,
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    category: 'US',
    sino: 1,
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    category: 'UAE',
    sino: 5,
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    category: 'UAE',
    sino: 5,
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    category: 'USA',
    sino: 5,
    image: '/assets/images/company_logo/logo1.png'
  }
];

function JobCategories() {
  return (
    <Page title="Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

JobCategories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default JobCategories;
