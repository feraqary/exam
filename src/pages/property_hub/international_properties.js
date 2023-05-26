// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import InternationalPropertyHubTable from 'components/widget/Data/property_hub/international_property_hub';

// ==============================|| Reviews datatable ||============================== //
function InternationalPropertiesHub() {
  return (
    <Page title="Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <InternationalPropertyHubTable title="List International Property" />
        </Grid>
      </Grid>
    </Page>
  );
}

InternationalPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default InternationalPropertiesHub;