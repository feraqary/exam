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
    header: 'SI.NO'
  },
  {
    accessorKey: 'name.profile',
    header: 'Profile Photo ',
    Cell: ({ cell }) => <img src={cell.getValue()} alt="profile" width={50} height={50} style={{ objectFit: 'contain' }} />
  },
  {
    accessorKey: 'companyname',
    header: 'Company Name'
  },
  {
    accessorKey: 'name.username',
    header: 'User Name'
  },
  {
    accessorKey: 'verify',
    header: 'Verify',
    Cell: ({ cell }) => <Button variant="outlined">Upload</Button>
  },
  {
    accessorKey: 'designation',
    header: 'Designation'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'email',
    header: 'Email'
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
          Live View
        </Button>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="primary">
          Block
        </Button>
        <Button variant="contained" color="primary">
          Delete
        </Button>
        <Button variant="contained" color="primary">
          Reset
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    sino: 1,
    email: 'new@gmail.com',
    phone: '2-12-2023',
    designation: ' uploaded'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023',
    designation: ' uploaded'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    sino: 1,
    email: 'new@gmail.com',
    phone: '2-12-2023',
    designation: ' uploaded'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023',
    designation: ' uploaded'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023',
    designation: ' uploaded'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023',
    designation: ' uploaded'
  }
];

function InternationalAgents() {
  return (
    <Page title="International Agent">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

InternationalAgents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default InternationalAgents;
