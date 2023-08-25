// material-ui
import { Grid, Alert } from '@mui/material';
// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo, useRef } from 'react';
import { Formik } from 'formik';
import { objectValidator, stringValidator, numberValidator, fileValidator, arrayValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

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
const designationOptions = ['Admin', 'Manager', 'Agent', 'Other'];
// ==============================|| Add Company form ||============================== //

const validationSchema = Yup.object({
  companyType: arrayValidator('Mandatory Selection', true),
  agent_first_name: stringValidator('Please provide a valid first name', true),
  agent_last_name: stringValidator('Please select a subscription last name', true),
  agent_email: stringValidator('Please select a valid Email', true),
  agent_phone: numberValidator('Please select a valid Phone Number', true),
  secondary_phone_number: numberValidator('Please select a valid Phone Number', true),
  profilePhoto: fileValidator(SUPPORTED_FORMATS)
});

function AddAgent() {
  const theme = useTheme();
  const [companyType, setCompanyType] = useState(null);
  const profilePhotoRef = useRef(null);

  return (
    <Page title="Add Agent">
      <Formik
        
        initialValues={{
          agent_first_name: '',
          agent_last_name: '',
          agent_email: '',
          agent_phone: '',
          secondary_phone_number: '',
          profilePhoto: '',
          companyType: '',
          designation: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm, validateForm }) => {
          console.log(validationSchema, 'validate schema...');
          await validateForm(values);
          submitForm(values);
          setSubmitting(false);
          resetForm();
          console.log(values, 'values in add agent');
        }}
        validator={() => ({})}
        onReset={(_) => {
          profilePhotoRef.current.value = '';
        }}
      >
        {(props) => (
          <>
            <Grid container spacing={gridSpacing}>
              <Container style={{ xs: 12 }} title="Add Agent Details">
                <Grid container spacing={2} lg={12} justifyContent="center">
                  <Grid container spacing={2} lg={10} justifyContent="center">
                    <InputText
                      label="Agent First Name"
                      id="agent_first_name"
                      name="agent_first_name"
                      placeholder="Agent First Name"
                      helperText="Please enter agent first name"
                      multiline
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <InputText
                      label="Agent Last Name"
                      id="agent_last_name"
                      name="agent_last_name"
                      multiline
                      placeholder="Agent Last Name"
                      helperText="Please enter agent last name"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <InputText
                      label="Agent Email"
                      id="agent_email"
                      name="agent_email"
                      multiline
                      placeholder="Agent Email"
                      helperText="Please enter agent email"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <InputText
                      label="Agent Phone"
                      id="agent_phone"
                      name="agent_phone"
                      multiline
                      placeholder="Agent Phone"
                      helperText="Please enter agent phone"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />
                    <InputText
                      label="Secondary Phone Number"
                      id="secondary_phone_number"
                      name="secondary_phone_number"
                      multiline
                      placeholder="Secondary Phone Number"
                      helperText="Please enter secondary phone"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                    />

                    <FileUpload
                      id="profilePhoto"
                      name="Profile photo"
                      label="Profile Photo"
                      required={true}
                      image={{ alt: 'Company Logo Preview', width: '250px', height: '250px' }}
                      ref={profilePhotoRef}
                      placeholder="Upload Profile Photo"
                      helperText="Upload Profile Photo"
                      setFieldValue={props.setFieldValue}
                      style={{ xs: 12, lg: 6 }}
                    />

                    <AutoCompleteSelector
                      helperInfo
                      label="Company Type"
                      id="companyType"
                      options={mainCompanies}
                      disabled={props.values.community ? true : false}
                      setFieldValue={props.setFieldValue}
                      value={companyType || null}
                      setValue={setCompanyType}
                      placeholder="Company Type"
                      helperText="Please select the company type"
                      style={{ xs: 12, lg: 6 }}
                      required={true}
                    />

                    <Selector
                      label="Designation"
                      options={[
                        { value: 'Admin', label: 'Admin' },
                        { value: 'Manger', label: 'Manger' },
                        { value: 'Agent', label: 'Agent' },
                        { value: 'Other', label: 'Other' }
                      ]}
                      getO
                      id="designation"
                      name="designation"
                      style={{ xs: 12, lg: 6 }}
                    />

                    {/* <Grid item xs={12} lg={6}>
                <FormControlLabel control={<Checkbox />} label="Show/Hide User Details" />
              </Grid> */}
                  </Grid>
                </Grid>
              </Container>
              <SubmitButton />
              {/* <Grid item xs={12} lg={1} spacing={gridSpacing}>
            <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
              Record Added Successfully!
            </Alert>
          </Grid> */}
            </Grid>
          </>
        )}
      </Formik>
    </Page>
  );
}

AddAgent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddAgent;
