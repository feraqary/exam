// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import ManUserRoles from '../../components/widget/Data/managment/user_roles';

// ==============================||User Roles||============================== //
function UserRoles() {
  return (
    <Page title="User Roles">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManUserRoles />
        </Grid>
      </Grid>
    </Page>
  );
}
UserRoles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UserRoles;
