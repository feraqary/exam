// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import Image from 'next/image';

//============================================================|| Manage Clients PAGE ||============================================================//

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
    accessorKey: 'name.profile',
    header: 'Image',
    Cell: ({ cell }) => <Image src={cell.getValue()} width={60} height={30} style={{ objectFit: 'contain' }} />
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
        <Button variant="contained" color="primary">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  },
  {
    name: {
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5
  }
];

function ManageClients() {
  return (
    <Page title="List of Clients">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageClients.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageClients;
