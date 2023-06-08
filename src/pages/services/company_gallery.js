// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Image from 'next/image';
import Table from 'components/Table/Table';

// ==============================|| Company Gallery ||============================== //

const data = [
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },

  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  },
  {
    name: 'Developer Company',
    sino: 'PA283102',
    featuredImage: '/assets/images/company_logo/logo1.png',
    coverImage: '/assets/images/company_logo/logo1.png'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'featuredImage',
    header: 'Featured Image',
    Cell: ({ cell }) => (
      <Box display="flex" alignItems="center">
        <Image src={cell.getValue()} alt={`Feature Image of`} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },
  {
    accessorKey: 'coverImage',
    header: 'Cover Image',
    Cell: ({ cell }) => (
      <Box display="flex" alignItems="center">
        <Image src={cell.getValue()} alt={`Feature Image of`} width={60} height={30} style={{ objectFit: 'contain' }} />
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
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Box>
    )
  }
];

function CompanyGallery() {
  return (
    <Page title="Company Gallery">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyGallery.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyGallery;
