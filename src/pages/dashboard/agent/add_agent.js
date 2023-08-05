// material-ui
import { Grid, Alert } from '@mui/material';
// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';
// assets
import CompanyServices from 'components/Data/company_types_data/fetch_company_types';
import Container from 'components/Elements/Container';
import SubmitButton from 'components/Elements/SubmitButton';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Selector from 'components/InputArea/Selector';

// ==============================|| FIELDS ||============================== //

const fetchCompanyServices = CompanyServices;
const mainCompanies = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company form ||============================== //
function AddAgent() {
  const theme = useTheme();
  const [companyType, setCompanyType] = useState(null);

  return (
    <Page title="Add Agent">
      <Grid container spacing={gridSpacing}>
        <Container style={{ xs: 12 }} title="Add Agent Details">
          <Grid container spacing={2} lg={12} justifyContent="center">
            <Grid container spacing={2} lg={10} justifyContent="center">
              <InputText
                label="Agent First Name"
                placeholder="Agent First Name"
                helperText="Please enter agent first name"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText
                label="Agent Last Name"
                placeholder="Agent Last Name"
                helperText="Please enter agent last name"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText
                label="Agent Email"
                placeholder="Agent Email"
                helperText="Please enter agent email"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText
                label="Agent Phone"
                placeholder="Agent Phone"
                helperText="Please enter agent phone"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText
                label="Secondary Phone Number"
                placeholder="Secondary Phone Number"
                helperText="If unanswere, calls will be forwarded to this number"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />

              <FileUpload
                label="Profile Photo"
                style={{ xs: 12, lg: 6 }}
                placeholder="Upload Profile Photo"
                helperText="Please Upload Profile Photo"
                type="file"
              />

              <AutoCompleteSelector
                label="Company Type"
                options={mainCompanies}
                value={companyType}
                setValue={setCompanyType}
                placeholder="Company Type"
                helperText="Please select the company type"
                style={{ xs: 12, lg: 6 }}
              />

              <Selector
                label="Designation"
                options={['Admin', 'Manager', 'Agent', 'Other']}
                helperText="Please select the agent designation"
                id="agent_designation"
                style={{ xs: 12, lg: 6 }}
              />

              {/* <Grid item xs={12} lg={6}>
                <FormControlLabel control={<Checkbox />} label="Show/Hide User Details" />
              </Grid> */}
            </Grid>
          </Grid>
        </Container>
        <SubmitButton />
        <Grid item xs={12} lg={1} spacing={gridSpacing}>
          <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
            Record Added Successfully!
          </Alert>
        </Grid>
      </Grid>
    </Page>
  );
}

AddAgent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddAgent;
