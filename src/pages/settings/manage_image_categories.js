// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManImageCategories from 'components/widget/Data/settings/manage_image_categories';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageImageCategories() {
  return (
    <Page title="Image Categories">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManImageCategories />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageImageCategories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageImageCategories;
