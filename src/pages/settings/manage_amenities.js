// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManAmenities from 'components/widget/Data/settings/manage_amenities';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageAmenities() {
  return (
    <Page title="Amenities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManAmenities />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageAmenities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageAmenities;
