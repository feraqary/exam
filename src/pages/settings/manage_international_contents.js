// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManInternationalContents from 'components/widget/Data/settings/manage_international_contents';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageInternationalContents() {
  return (
    <Page title="International Contentes">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManInternationalContents />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageInternationalContents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageInternationalContents;
