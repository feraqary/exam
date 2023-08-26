// material-ui
import { Grid, Alert } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
import InputText, { NormalInputText } from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import AutoCompleteSelector, { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import Selector, { NormalSelector } from 'components/InputArea/Selector';
import { stringValidator, numberValidator } from 'utils/formik-validations';
// ==============================|| FIELDS ||============================== //

const fetchCompanyServices = CompanyServices;
const mainCompanies = ['Broker Company', 'Developer Company', 'Service Company'];

const validationSchema = Yup.object({
  agentFirstName: stringValidator('Please enter your first name', true),
  agentLastName: stringValidator('Please enter your last name', true),
  agentEmail: stringValidator('Please enter your email', true),
  agentPhone: numberValidator('Please enter the phone', true),
  secondaryPhoneNumber: numberValidator('Please enter the phone', true)
});

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
              <Formik
                initialValues={{
                  agentFirstName: '',
                  agentLastName: '',
                  agentEmail: '',
                  agentPhone: '',
                  agentSecondaryPhoneNumber: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const formData = new FormData();
                  formData.append('agent_first_name', values.agentFirstName);
                  formData.append('agent_last_name', values.agentLastName);
                  formData.append('agent_email', values.agentEmail);
                  formData.append('agent_phone', values.agentPhone);
                  formData.append('secondary_phone', values.agentSecondaryPhoneNumber);
                  createMainService(formData);
                  setSubmitting(false);
                  resetForm();
                }}
              >
                {(props) => (
                  <>
                    <InputText
                      label="Agent First Name"
                      placeholder="Agent First Name"
                      helperText="Please enter agent first name"
                      id="agentFirstName"
                      name="agentFirstName"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                      
                    />
                    <InputText
                      label="Agent Last Name"
                      placeholder="Agent Last Name"
                      helperText="Please enter agent last name"
                      id="agentLastName"
                      name="agentLastName"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <InputText
                      label="Agent Email"
                      placeholder="Agent Email"
                      helperText="Please enter agent email"
                      id="agentEmail"
                      name="agentEmail"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <InputText
                      label="Agent Phone"
                      placeholder="Agent Phone"
                      helperText="Please enter agent phone"
                      id="agentPhone"
                      name="agentPhone"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <InputText
                      label="Secondary Phone Number"
                      placeholder="Secondary Phone Number"
                      helperText="If unanswere, calls will be forwarded to this number"
                      id="secondaryPhoneNumber"
                      name="secondaryPhoneNumber"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <Grid lg={6}></Grid>
                    <SubmitButton />
                  </>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Page>
  );
}

AddAgent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddAgent;
