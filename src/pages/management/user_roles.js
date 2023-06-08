// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================||User Roles||============================== //
const data = [
  {
    user_role: 'Legal Admin',
    si_numeric: '11'
  },
  {
    user_role: 'Legal Admin',
    si_numeric: '12'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'si_numeric',
    header: 'SI.NO'
  },
  {
    accessorKey: 'user_role',
    header: 'Role '
  }
];
function UserRoles() {
  return (
    <Page title="User Roles">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}
UserRoles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UserRoles;
