// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ActivitiesPropertyHubTable from 'components/widget/Data/property_hub/activities_property_hub';

// ==============================|| Reviews datatable ||============================== //
function ActivitiesPropertiesHub() {
  return (
    <Page title="Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ActivitiesPropertyHubTable title="Activities" />
        </Grid>
      </Grid>
    </Page>
  );
}

ActivitiesPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActivitiesPropertiesHub;