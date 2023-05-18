// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, Stack } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';

// assets
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import { UploadFile } from '@mui/icons-material';
import AutocompleteFormManagement from 'components/forms/forms-validation/AutoCompleteFormManagement';
import AutocompleteFormService from 'components/forms/forms-validation/AutoCompleteFormService';
import { Stack } from '@mui/system';

// ==============================|| Add Company form ||============================== //
function ColumnsLayouts() {
  const theme = useTheme();
  const [licenseimg, setnewimg] = useState(null);
  const [vatimg, changevat] = useState(null);
  const [logoimg, changelogo] = useState(null);
  const [profilepicture, changeprofilepicture] = useState(null);
  const [companyType, setCompanyType] = useState(null);

  const handleInputChange = (event) => {
    setnewimg(URL.createObjectURL(event.target.files[0]));
  };
  const handleVatInputChange = (event) => {
    changevat(URL.createObjectURL(event.target.files[0]));
  };
  const handlelogoInputChange = (event) => {
    changelogo(URL.createObjectURL(event.target.files[0]));
  };
  const handleprofileInputChange = (event) => {
    changeprofilepicture(URL.createObjectURL(event.target.files[0]));
  };

  const subCompanyType = () => {
    if (companyType === 'Service Company' || companyType === 'Management Company') {
      return (
        <Grid item xs={12} lg={10}>
          <InputLabel required>Sub Company Type</InputLabel>
          {companyType === 'Service Company' && <AutocompleteFormService />}
          {companyType === 'Management Company' && <AutocompleteFormManagement />}
        </Grid>
      );
    }
    return null;
  };

  return (
    <Page title="Add Company">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Company Details">
            <Grid item xs={12} lg={10}>
              <InputLabel required>Company Type</InputLabel>
              <AutocompleteForms companyType={companyType} setCompanyType={setCompanyType} />
            </Grid>
            {subCompanyType()}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6}>
                <InputLabel required>Company Name</InputLabel>
                <TextField fullWidth placeholder="Enter Company " />
                <FormHelperText>Please Enter Official Company Name</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>License No.</InputLabel>
                <TextField fullWidth placeholder="Enter Company License No." />
                <FormHelperText>Please enter Company License No. </FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>Upload License</InputLabel>
                <TextField
                  type="file"
                  fullWidth
                  placeholder="Upload Company License"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <UploadFile />
                      </InputAdornment>
                    )
                  }}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>License Expiry:</InputLabel>
                <TextField type="date" fullWidth placeholder="License Expiry Date" InputProps={{}} />
                <FormHelperText>Please enter your License Expiry Date</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>VAT Number:</InputLabel>
                <TextField fullWidth placeholder="VAT Number...." InputProps={{}} />
                <FormHelperText>Please enter your License Expiry Date</FormHelperText>
              </Grid>
              <Grid fullwidth item xs={12} lg={6}>
                <InputLabel required>VAT status</InputLabel>
                <NativeSelect id="select" fullWidth>
                  <option value="1">Active</option>
                  <option value="2">Non-Active</option>
                  <option value="3">Pending</option>
                </NativeSelect>

                <FormHelperText>Please Choose a VAT status</FormHelperText>
              </Grid>
              <br />
              <Grid item xs={12} lg={6}>
                <InputLabel required>Upload VAT</InputLabel>
                <TextField
                  type="file"
                  fullWidth
                  onChange={handleVatInputChange}
                  placeholder="Please enter your License Expiry Date"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <UploadFile />
                      </InputAdornment>
                    )
                  }}
                />
                <FormHelperText>Upload VAT</FormHelperText>
                <Grid item xs={3} lg={8} alignContent="right">
                  <img src={vatimg} alt="VAT Preview" width="250px" height="250px" />
                </Grid>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Add Billing Information">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={4}>
                <InputLabel required>Country</InputLabel>
                <TextField fullWidth placeholder="Select Country" />
                <FormHelperText>Please Select Country</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>City</InputLabel>
                <TextField fullWidth placeholder="Selecy City" />
                <FormHelperText>Please Select City</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>State</InputLabel>
                <TextField fullWidth placeholder="Select State" />
                <FormHelperText>Please Select State</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>Community</InputLabel>
                <TextField fullWidth placeholder="Select Community" />
                <FormHelperText>Please Select Community</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Office Address</InputLabel>
                <TextField fullWidth placeholder="Enter Office Address" />
                <FormHelperText>Please enter company Office Address</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Billing Reference</InputLabel>
                <TextField fullWidth placeholder="Enter Billing Reference" />
                <FormHelperText>Please enter Billing Reference</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Google Map Link</InputLabel>
                <TextField
                  fullWidth
                  type="url"
                  placeholder="Google Map URL"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkTwoToneIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <FormHelperText>Please enter Google Map URL for Company Location</FormHelperText>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Company Presentation">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={4}>
                <InputLabel required>Company Name</InputLabel>
                <TextField fullWidth placeholder="Company Name for Listings" />
                <FormHelperText>Please Enter Company Name to be listed for Listings</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Company Website</InputLabel>
                <TextField fullWidth type="url" />
                <FormHelperText>Please enter Billing Reference</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Company Email Address</InputLabel>
                <TextField fullWidth type="email" />
                <FormHelperText>Please select your contact</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Company Contact Number:</InputLabel>
                <TextField fullWidth placeholder="Enter Contact Number" />
              </Grid>
              <Grid item xs={12} lg={8}>
                <InputLabel>Company Description</InputLabel>
                <TextField fullWidth placeholder="Enter Company Details Here" multiline rows={3} />
              </Grid>
              <Grid item xs={4} lg={8}>
                <InputLabel required>Company Logo</InputLabel>
                <TextField fullWidth type="file" accept="application/png" onChange={handlelogoInputChange} />
                <Grid item xs={3} lg={8} alignContent="right">
                  <img src={logoimg} alt="Company Logo Preview" width="250px" height="250px" />
                </Grid>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Social Media">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={4}>
                <InputLabel>Facebook</InputLabel>
                <TextField fullWidth type="url" />
                <FormHelperText>Please Enter Company Facebook Page URL</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>Instagram</InputLabel>
                <TextField fullWidth type="url" />
                <FormHelperText>Please Enter Company Instagran Page URL</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>LinkedIn</InputLabel>
                <TextField fullWidth type="url" />
                <FormHelperText>Please Enter Company LinkedIn Page URL</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>Twitter</InputLabel>
                <TextField fullWidth type="url" />
                <FormHelperText>Please Enter Company Twitter Page URL</FormHelperText>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Company Admin Contact Details">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={4}>
                <InputLabel required>First Name:</InputLabel>
                <TextField fullWidth placeholder="Admin First Name" required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>Last Name:</InputLabel>
                <TextField fullWidth placeholder="Admin Last Name" />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Email Address:</InputLabel>
                <TextField fullWidth placeholder="Admin Email Address:" type="email" />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Phone</InputLabel>
                <TextField fullWidth placeholder="Admin Phone Number:" type="tel" />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Number of Employees</InputLabel>
                <TextField fullWidth type="number" />
              </Grid>
              <Grid fullwidth item xs={12} lg={5}>
                <InputLabel>Subscription Duration</InputLabel>
                <NativeSelect id="select" fullWidth>
                  <option value="1">1 Month</option>
                  <option value="2">3 Months</option>
                  <option value="3">6 Months</option>
                  <option value="4">9 Months</option>
                  <option value="5">12 Months</option>
                </NativeSelect>

                <FormHelperText>Please Choose your Purchased Subscription Duration</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>Subscription Start Date</InputLabel>
                <TextField fullWidth type="date" />
                yarn Developer
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel>Subscription End Date</InputLabel>
                <TextField fullWidth type="date" />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Upload Profile Picture</InputLabel>
                <TextField fullWidth type="file" required onChange={handleprofileInputChange} />
                <Grid item xs={3} lg={8} alignContent="right">
                  <img src={profilepicture} alt=" Admin Profile Preview" width="250px" height="250px" />
                </Grid>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Bank Account Details">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={4}>
                <InputLabel required>Account Name</InputLabel>
                <TextField fullWidth required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel reuiqred>Account Number</InputLabel>
                <TextField fullWidth required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>IBAN Number</InputLabel>
                <TextField fullWidth required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Currency</InputLabel>
                <TextField fullWidth required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Swift Code</InputLabel>
                <TextField fullWidth required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Bank Name</InputLabel>
                <TextField fullWidth required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Branch</InputLabel>
                <TextField fullWidth required />
              </Grid>
              <Grid item xs={12} lg={4}>
                <InputLabel required>Country</InputLabel>
                <TextField fullWidth required />
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
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
