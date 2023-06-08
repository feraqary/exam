// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import AqaryButton from 'components/AqaryButton/ThemeButton';
// ==============================|| MANAGE Users ||============================== //

const data = [
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: 'Khalifa city',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: 'Khalifa city b',
    state: 'Abu Dhabi',
    country: 'UAE'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'username',
    header: 'Username'
  },
  {
    accessorKey: 'role',
    header: 'Role '
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'department',
    header: 'Department'
  },
  {
    accessorKey: 'subcommunity',
    header: ' Sub-Community'
  },
  {
    accessorKey: 'community',
    header: 'Community'
  },

  {
    accessorKey: 'city',
    header: 'City'
  },
  {
    accessorKey: 'state',
    header: 'State'
  },
  {
    accessorKey: 'country',
    header: 'Country'
  },
  { accessorKey: 'phone', header: 'Phone' },

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
        <AqaryButton variant="contained">Edit </AqaryButton>
        <Button color="primary" variant="contained">
          View Documents
        </Button>
        <Button variant="contained" color="primary">
          View Live
        </Button>
        <Button variant="contained" color="primary">
          Multiple
        </Button>
        <Button variant="contained" color="primary">
          Report
        </Button>
        <Button variant="contained" color="primary">
          Block
        </Button>
        <Button variant="contained">Reset</Button>
      </Box>
    )
  }
];
function ManageUsers() {
  return (
    <Page title="Manage Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}
ManageUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageUsers;
