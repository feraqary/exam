// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManSubscription from 'components/widget/Data/settings/manage_subscription';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageSubscription() {
  return (
    <Page title="Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManSubscription />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageSubscription.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageSubscription;
