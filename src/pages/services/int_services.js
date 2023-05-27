// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

// ==============================|| International Company Services ||============================== //
function IntServices() {
  return (
    <Page title="Add Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Page>
  );
}

IntServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntServices;
