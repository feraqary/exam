// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManSubscriptionCosts from 'components/widget/Data/settings/manage_subscription_costs';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageSubscriptionCosts() {
  return (
    <Page title="Subscriptions Costs">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManSubscriptionCosts />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageSubscriptionCosts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageSubscriptionCosts;
