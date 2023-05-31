// material-ui
import { Grid} from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import LocalPropertyHubTable from 'components/widget/Data/property_hub/local_property_hub';

// ==============================|| Reviews datatable ||============================== //
function LocalPropertiesHub() {
  return (
    <Page title="Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <LocalPropertyHubTable title="List Property" />
        </Grid>
      </Grid>
    </Page>
  );
}

LocalPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalPropertiesHub;