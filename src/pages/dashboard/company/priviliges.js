// material-ui
import { Grid, Stack } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';

// assets
import CheckedList from 'components/checkedList/checkedList';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';

const roles = ['Broker Company', 'Developer Company', 'Service Company'];
const serviceTypeData = ['Business & Investement Company', 'Developer Company', 'Property Company'];

// ==============================||Company Previliges Datatable ||============================== //
function CompanyType() {
  const [companyType, setCompanyType] = useState(null);
  const [serviceType, setServiceType] = useState(null);

  const subCompanyType = useMemo(() => {
    if ((companyType === 'Service Company' && serviceType) || (companyType !== 'Service Company' && companyType)) {
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
  }, [companyType, serviceType]);

  return (
    <Page title="Priviliges">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="View Company Priviliges">
            <Grid container flexDirection="column" gap={3} justifyContent="center">
              <AutoCompleteSelector
                label="Company Type"
                value={companyType}
                setValue={setCompanyType}
                options={roles}
                style={{ xs: 12, lg: 8 }}
                id="selector"
                placeholder="Please select a company type"
              />

              {companyType === 'Service Company' ? (
                <>
                  <AutoCompleteSelector
                    label="Service Type"
                    value={serviceType}
                    setValue={setServiceType}
                    options={serviceTypeData}
                    style={{ xs: 12, lg: 8 }}
                    id="selector"
                    placeholder="Please select a Service type"
                  />
                </>
              ) : null}
              <InputLabel required>Permissions</InputLabel>
              {subCompanyType}
            </Grid>
          </MainCard>
          <SubmitButton />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
