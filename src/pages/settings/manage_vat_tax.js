// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import ManVatTax from 'components/widget/Data/settings/manage_vat_tax';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageVatTax() {
  return (
    <Page title="VAT/TAX">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManVatTax />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageVatTax.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageVatTax;
