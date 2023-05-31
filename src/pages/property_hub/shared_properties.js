// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import SharedPropertyHubTable from 'components/widget/Data/property_hub/shared_properties_hub';

// ==============================|| Reviews datatable ||============================== //
function SharedPropertiesHub() {
  return (
    <Page title="Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SharedPropertyHubTable title="List Shared Property" />
        </Grid>
      </Grid>
    </Page>
  );
}

SharedPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SharedPropertiesHub;