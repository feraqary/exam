// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Departement from '../../components/widget/Data/managment/departement';

// ==============================|| MANAGE DEPARTMENTS ||============================== //
function ManageDep() {
  return (
    <Page title="Manage Departments">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Departement />
        </Grid>
      </Grid>
    </Page>
  );
}
ManageDep.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageDep;
