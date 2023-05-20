// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import ActiveSubs from 'components/widget/Data/subscription_mng/active_sub';

// ==============================|| View Active Subscriptions form ||============================== //
function subscription() {
  return (
    <Page title="Active Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Active Subscriptions" />
          <ActiveSubs />
        </Grid>
      </Grid>
    </Page>
  );
}

subscription.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default subscription;
