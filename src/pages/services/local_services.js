// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
// ==============================|| Local Services ||============================== //
function LocalServices() {
  return (
    <Page title="Local Company Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </Page>
  );
}
LocalServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalServices;