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
import CompanyContract from 'components/widget/Data/comp_reg';

// ==============================|| View Company Registration ||============================== //
function CompanyType() {
  return (
    <Page title=" Company Registration">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="View Company Registration Documents" />
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
