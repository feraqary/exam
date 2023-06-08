// material-ui
import { Grid, Box, Checkbox } from '@mui/material';
import Image from 'next/image';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'name.companyLogo',
    header: 'Company Logo',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={row.original.name.companyLogo} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },
  {
    accessorKey: 'name.companyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'regId',
    header: ' Registration ID '
  },
  {
    accessorKey: 'contactPerson',
    header: ' Contact Person'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  { accessorKey: 'phone', header: 'Phone' },
  { accessorKey: 'show', header: 'Show in Homepage', Cell: ({ cell }) => <Checkbox /> }
];

const data = [
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310'
  }
];

const FeaturedCompanies = () => (
  <Page title="Featured Companies">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Table data={data} columnHeaders={ColumnHeaders} />
      </Grid>
    </Grid>
  </Page>
);

FeaturedCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FeaturedCompanies;
