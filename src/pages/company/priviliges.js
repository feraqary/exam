// material-ui
import { Grid, Button, Stack, Divider, CardActions } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';

// assets
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import CheckedList from 'components/checkedList/checkedList';

const roles = ['Broker Company', 'Developer Company', 'Service Company'];
const companyNames = ['Business & Investement Company', 'Developer Company', 'Property Company'];

// ==============================||Company Previliges Datatable ||============================== //
function CompanyType() {
  const [companyType, setCompanyType] = useState(null);
  const [companyName, setCompanyName] = useState(null);

  const handleCompanyTypeChange = (newValue) => {
    setCompanyName(null);
    setCompanyType(newValue);
  };
  const handleCompanyNameChange = (newValue) => {
    setCompanyName(newValue);
  };

  const subCompanyType = useMemo(() => {
    if ((companyType === 'Service Company' && companyName) || (companyType !== 'Service Company' && companyType)) {
      return (
        <>
          <Stack item flexDirection="row" justifyContent="space-around">
            <CheckedList
              data={[
                'Manage Project',
                'Add Project',
                'Manage International Projects',
                'Add International Projects',
                'Manage Promotions',
                'Activities',
                'Project Rating'
              ]}
              title="Projects"
            />
            <CheckedList data={['Manage Property', 'Add Property', 'Manage International Properties', 'Activities']} title="Property Hub" />
            <CheckedList
              data={[
                'Add Unit',
                'Manage Sale Units',
                'Manage Rent Units',
                'Manage International Units',
                'Rejected Units',
                'Activities',
                'Report Problem'
              ]}
              title="Units"
            />
          </Stack>
          <Stack item flexDirection="row" justifyContent="space-around">
            <CheckedList data={['Manage Units', 'Offer Units']} title="Exchange" />
            <CheckedList data={['Manage Leads', 'Request Video', 'Schedule Viewing', 'Genereal Request']} title="Leads" />
            <CheckedList data={['Add Agent', 'Manage Agents']} title="Agents" />
          </Stack>
          <Stack item flexDirection="row" justifyContent="space-around">
            <CheckedList data={['Company Review', 'Agent Review']} title="Reviews" />
            <CheckedList data={['Manage Xml Feed', 'Activities', 'Company Report']} title="Settings" />
            <CheckedList data={['Insights', 'Competitive', 'Agents', 'Transactions', 'Market']} title="Reports" />
          </Stack>
        </>
      );
    }
    return null;
  }, [companyType, companyName]);

  return (
    <Page title="Priviliges">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="View Company Priviliges">
            <InputLabel required>Company Type</InputLabel>
            <AutocompleteForms setCompanyFun={handleCompanyTypeChange} data={roles} />
            {companyType === 'Service Company' ? (
              <>
                <InputLabel required>Company Name</InputLabel>
                <AutocompleteForms setCompanyFun={handleCompanyNameChange} data={companyNames} />
              </>
            ) : null}
            <InputLabel required>Permissions</InputLabel>
            {subCompanyType}
            <Divider />
            <CardActions>
              <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Clear</Button>
                </Grid>
              </Grid>
            </CardActions>
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
