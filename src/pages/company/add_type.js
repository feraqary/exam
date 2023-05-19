// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useMemo, useState } from 'react';
import AutocompleteFormService from 'components/forms/forms-validation/AutoCompleteFormService';

// assets
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';

// ==============================|| Add Company Type form ||============================== //
function CompanyType() {
  const [companyType, setCompanyType] = useState(null);
  const subCompanyType = useMemo(() => {
    if (companyType === 'Service Company' || companyType === 'Management Company') {
      return (
        <Grid item xs={12} lg={12}>
          <InputLabel required>Service Company Sub Type</InputLabel>
          {companyType === 'Service Company' && <AutocompleteFormService />}
        </Grid>
      );
    }
    return null;
  }, [companyType]);
  return (
    <Page title="Add Company Types">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Company Type">
            <Grid item xs={12} lg={10}>
              <InputLabel required>Company Type</InputLabel>
              <AutocompleteForms companyType={companyType} setCompanyType={setCompanyType} />
              {subCompanyType}
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
