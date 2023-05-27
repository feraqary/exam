// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManXMLFeeds from 'components/widget/Data/settings/manage_xml_feeds';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageXMLFeeds() {
  return (
    <Page title="XML Feeds">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManXMLFeeds />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageXMLFeeds.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageXMLFeeds;
