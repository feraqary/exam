// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import PendingSubs from 'components/widget/Data/subscription_mng/pending_sub';

// ==============================|| View Pending Subscriptions ||============================== //
function subscription() {
  return (
    <Page title="Pending Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Pending Subscriptions">
            <PendingSubs />
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

subscription.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default subscription;
