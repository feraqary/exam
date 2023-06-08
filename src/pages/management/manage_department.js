// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import AqaryButton from 'components/AqaryButton/ThemeButton';
import Table from 'components/Table/Table';

// ==============================|| MANAGE DEPARTMENTS ||============================== //

const data = [
  {
    username: 'Legal User',
    departement: 'Legal Admin',
    email: 'legal@example.com',
    si_numeric: '11',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    departement: 'Legal Admin',
    email: 'legal@example.com',
    si_numeric: '11',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  }
];
const ColumnHeaders = [
  {
    accessorKey: 'si_numeric',
    header: 'SI.NO'
  },
  {
    accessorKey: 'departement',
    header: 'Departement '
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
        <AqaryButton variant="contained">Edit </AqaryButton>
        <Button variant="contained">Delete</Button>
      </Box>
    )
  }
];
function ManageDep() {
  return (
    <Page title="Manage Departments">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}
ManageDep.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageDep;
