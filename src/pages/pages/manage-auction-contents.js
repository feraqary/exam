// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManAuction from 'components/widget/Data/pages/manage-auction-contents';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageAuctionContents() {
  return (
    <Page title="Add Page">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManAuction />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageAuctionContents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageAuctionContents;
