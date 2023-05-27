// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import DeletedPropertyHubTable from 'components/widget/Data/property_hub/deleted_properties_hub';

// ==============================|| Reviews datatable ||============================== //
function DeletedPropertiesHub() {
  return (
    <Page title="Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <DeletedPropertyHubTable title="List Deleted Property" />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedPropertiesHub;