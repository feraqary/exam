// material-ui
import { Grid, FormGroup, Checkbox, FormControlLabel } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
// assets
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';

const location = ['Abu Dhabi', 'Ajman', 'Al Ain', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Umm Al Quwain'];
const companyTypeData = ['Broker', 'Developer', 'Service'];

// ==============================|| Add Company Type form ||============================== //
function ServiceLocation() {
  const [companyType, setCompanyType] = useState(null);
  const [serviceName, setServiceName] = useState(null);

  return (
    <Page title="Add/Edit Service Location">
      <Grid container spacing={gridSpacing}>
        <Container title="Add/Edit Service Location" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <AutoCompleteSelector
              label="Company Type"
              value={companyType}
              setValue={setCompanyType}
              options={companyTypeData}
              id="company-type-selector"
              style={{ xs: 12, lg: 7 }}
              placeholder="Company Type"
              helperText="Please select the company type"
            />
            <AutoCompleteSelector
              label="Company Name"
              value={serviceName}
              setValue={setServiceName}
              options={companyTypeData}
              id="company-name-selector"
              style={{ xs: 12, lg: 7 }}
              placeholder="Company Name"
              helperText="Please select the company name"
            />
            <Grid item xs={12} lg={7}>
              <InputLabel required>Location</InputLabel>
              <FormGroup row>
                {location?.map((loc, index) => (
                  <FormControlLabel control={<Checkbox />} label={loc} key={index} />
                ))}
              </FormGroup>
            </Grid>
          </Grid>
        </Container>
        <SubmitButton />
      </Grid>
    </Page>
  );
}

ServiceLocation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ServiceLocation;
