// material-ui
import { Grid, Alert } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';
// import TagsInput from 'react-tagsinput';
// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import Selector from 'components/InputArea/Selector';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ColumnsLayouts() {
  const theme = useTheme();

  return (
    <Page title="Add Company">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Compnay Details" style={{ xs: 12 }}>
          <AutoCompleteSelector style={{ xs: 12, lg: 10, mb: 2 }} label="Select Company Type" id="companyType" />
          {false && (
            <>
              <AutoCompleteSelector style={{ xs: 12, lg: 10, mb: 2 }} label="Sub Company Type" id="subCompanyType" />
              <AutoCompleteSelector style={{ xs: 12, lg: 10, mb: 2 }} label="Service Type" id="serviceType" />
            </>
          )}
          <Grid container spacing={2} alignItems="center">
            <InputText
              label="Company Name"
              placeholder="Enter Company Name"
              helperText="Please Enter Official Company Name"
              style={{ xs: 12, lg: 6 }}
              type="text"
            />
            <InputText
              label="Company Tagline"
              placeholder="Enter Company Tagline"
              helperText="Please Enter Official Tagline"
              style={{ xs: 12, lg: 6 }}
              type="text"
            />
            <InputText label="RERA No." placeholder="Enter RERA No." helperText="Please Enter RERA No." style={{ xs: 12, lg: 6 }} />
            <InputText
              label="License No."
              placeholder="Enter Company License No."
              helperText="Please enter Company License No."
              style={{ xs: 12, lg: 6 }}
              type="text"
            />
            <FileUpload
              label="Upload License"
              type="file"
              placeholder="Upload Company License"
              helperText="Please Upload Company License"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="License Expiry:"
              placeholder="License Expiry Date"
              helperText="Please enter your License Expiry Date"
              type="date"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="VAT Number:"
              placeholder="VAT Number"
              helperText="Please enter your VAT number"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />
            <Selector
              id="selector"
              style={{ xs: 12, lg: 6 }}
              label="VAT status"
              helperText="Please Choose a VAT status"
              options={[
                { value: 1, label: 'Active' },
                { value: 2, label: 'Non-Activ' },
                { value: 3, label: 'Pending' }
              ]}
            />
            <br />
            <FileUpload
              label="Upload VAT"
              type="file"
              placeholder="Upload your VAT"
              helperText="Please upload your VAT"
              style={{ xs: 12, lg: 6 }}
              image={{ alt: 'VAT Preview', width: '250px', height: '250px' }}
            />
          </Grid>
        </Container>
        <Container title="Add Billing Information" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <InputText
              label="Country"
              placeholder="Enter the country"
              helperText="Please enter the country"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText label="City" placeholder="Enter the city" helperText="Please enter the city" type="text" style={{ xs: 12, lg: 6 }} />
            <InputText
              label="State"
              placeholder="Enter the state"
              helperText="Please enter the state"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="Community"
              placeholder="Enter the community"
              helperText="Please enter the community"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="Office Address"
              placeholder="Enter the office address"
              helperText="Please enter the office address"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="Billing Reference"
              placeholder="Enter the billing reference"
              helperText="Please enter the billing reference"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="Google Map Link"
              placeholder="Enter the map url"
              helperText="Please enter the map url"
              type="url"
              style={{ xs: 12, lg: 6 }}
            />
          </Grid>
        </Container>
        <Container title="Company Presentation" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <InputText
              label="Company Website"
              placeholder="Enter the company website"
              helperText="Please enter the company website"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />

            <InputText
              label="Company Email Address"
              placeholder="Enter the company email address"
              helperText="Please enter the company email address"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />

            <InputText
              label="Company Contact Number"
              placeholder="Enter the company Contact Number"
              helperText="Please enter the company Contact Number"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="Company Description"
              placeholder="Enter the company description"
              helperText="Please enter the company description"
              type="text"
              style={{ xs: 12, lg: 6 }}
            />

            <FileUpload
              label="Company logo"
              placeholder="Enter the company logo"
              helperText="Please enter the company logo"
              type="file"
              style={{ xs: 12, lg: 6 }}
              image={{ alt: 'Company Logo Preview', width: '250px', height: '250px' }}
            />
            <FileUpload
              label="Company Cover Image"
              placeholder="Enter the company cover image"
              helperText="Please enter the company cover image"
              type="file"
              style={{ xs: 12, lg: 6 }}
              image={{ alt: 'Cover Image Preview', width: '250px', height: '250px' }}
            />
          </Grid>
        </Container>
        <Container style={{ xs: 12 }} title="Social Media">
          <Grid container spacing={2} alignItems="center">
            <InputText
              label="Facebook"
              type="url"
              placeholder="Enter Company Facebook Profile"
              helperText="Please enter company facebook profile"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="Instagram"
              type="url"
              placeholder="Enter Company Instagram Profile"
              helperText="Please enter company instagram profile"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="LinkedIn"
              type="url"
              placeholder="Enter Company LinkedIn Profile"
              helperText="Please enter company linkedIn profile"
              style={{ xs: 12, lg: 6 }}
            />
            <InputText
              label="Twitter"
              type="url"
              placeholder="Enter Company Twitter Profile"
              helperText="Please enter company twitter profile"
              style={{ xs: 12, lg: 6 }}
            />
          </Grid>
        </Container>
        <Container title="Company Admin Contact Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="First Name"
              placeholder="Admin First Name"
              helperText="Please enter admin first name"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Last Name"
              placeholder="Admin Last Name"
              helperText="Please enter admin last name"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Email Address"
              placeholder="Admin Email Address"
              helperText="Please enter admin email address"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Phone Number"
              placeholder="Admin Phone Number"
              helperText="Please enter admin phone number"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Number of Employees"
              placeholder="Number of Employees"
              helperText="Please enter Number of Employees"
              type="text"
            />
            <Selector
              helperText="Please choose your purchased subscription duration"
              style={{ xs: 12, lg: 4 }}
              label="Subscription Duration"
              id="select"
              options={[
                { value: 1, label: '1 Month' },
                { value: 3, label: '3 Months' },
                { value: 6, label: '6 Months' },
                { value: 9, label: '9 Months' },
                { value: 12, label: '12 Months' }
              ]}
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Subscription Start Date"
              placeholder="Subscription Start Date"
              helperText="Please enter subscription start date"
              type="date"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Subscription End Date"
              placeholder="Subscription End Date"
              helperText="Please enter subscription end date"
              type="date"
            />
            <FileUpload
              style={{ xs: 12, lg: 6 }}
              label="Upload Profile Picture"
              placeholder="Upload Profile Picture"
              helperText="Please enter upload profile picture"
              type="file"
              image={{ alt: 'Admin Profile Preview', width: '250px', height: '250px' }}
            />
          </Grid>
        </Container>
        <Container title="Bank Account Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Account Number"
              placeholder="Account Number"
              helperText="Please enter account number"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Account Name"
              placeholder="Account Name"
              helperText="Please enter account name"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="IBAN Number"
              placeholder="IBAN Number"
              helperText="Please enter IBAN number"
              type="text"
            />
            <InputText style={{ xs: 12, lg: 4 }} label="Currency" placeholder="Currency" helperText="Please enter currency" type="text" />
            <InputText style={{ xs: 12, lg: 4 }} label="Country" placeholder="Country" helperText="Please enter country" type="country" />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Bank Name"
              placeholder="Bank Name"
              helperText="Please enter bank name"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Bank Branch"
              placeholder="Bank Branch"
              helperText="Please enter bank branch"
              type="text"
            />
            <InputText
              style={{ xs: 12, lg: 4 }}
              label="Swift Code"
              placeholder="Swift Code"
              helperText="Please enter swift code"
              type="text"
            />
          </Grid>
        </Container>
        <SubmitButton />
        <Grid item xs={12} lg={5} spacing={gridSpacing}>
          <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
            Record Added Successfully!
          </Alert>
        </Grid>
      </Grid>
    </Page>
  );
}

ColumnsLayouts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ColumnsLayouts;
