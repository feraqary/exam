// material-ui
import { Grid, Box, Button } from '@mui/material';
import Image from 'next/image';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Activities Project ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'service',
    header: 'Sub Service Name'
  },
  {
    accessorKey: 'companyLogo',
    header: 'Image',
    Cell: ({ cell }) => (
      <Box display="flex" alignItems="center">
        <Image src={cell.getValue()} width={60} height={30} style={{ objectFit: 'contain' }} />
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
          View
        </Button>
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
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },

  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  },
  {
    companyLogo: '/assets/images/company_logo/logo4.png',
    service: 'Developer Company',
    sino: 'PA283102'
  }
];

function SubService() {
  return (
    <Page title=" Sub Service">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}
SubService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SubService;
