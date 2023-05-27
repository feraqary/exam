// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import CompanyContract from 'components/widget/Data/company/comp_reg';

// ==============================|| View Company Registration ||============================== //
function CompanyType() {
  return (
    <Page title=" Company Registration">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <CompanyContract />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
