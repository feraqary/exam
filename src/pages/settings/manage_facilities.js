// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManFacilities from 'components/widget/Data/settings/manage_facilities';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageFacilities() {
  return (
    <Page title="Facilities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManFacilities />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageFacilities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageFacilities;
