// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import ActivitiesSettings from 'components/widget/Data/settings/activities_datatable';

// ==============================|| Activity datatable ||============================== //
function Activities() {
  return (
    <Page title=" Company Section Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ActivitiesSettings />
        </Grid>
      </Grid>
    </Page>
  );
}

Activities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Activities;
