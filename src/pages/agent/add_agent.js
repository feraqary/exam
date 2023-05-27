// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, Divider, CardActions, Chip } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';
import TagsInput from 'react-tagsinput';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// assets
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import { UploadFile } from '@mui/icons-material';
import CompanyServices from 'components/widget/Data/company_types_data/fetch_company_types';

// ==============================|| FIELDS ||============================== //

const fetchCompanyServices = CompanyServices;
const mainCompanies = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company form ||============================== //
function AddAgent() {
  const theme = useTheme();


  const handleInputChange = (event) => {
    setnewimg(URL.createObjectURL(event.target.files[0]));
  };

  const handleCompanyTypeChange = (newValue) => {
    setCompanyType(newValue);
  };

  return (
    <Page title="Add Company">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Agent Details">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6}>
                <InputLabel required>User First Name</InputLabel>
                <TextField fullWidth placeholder="Enter First Name " />
                <FormHelperText>Please Enter First Name</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>User Last Name</InputLabel>
                <TextField fullWidth placeholder="Enter Last Name " />
                <FormHelperText>Please Enter Last Name</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>Email</InputLabel>
                <TextField fullWidth placeholder="Enter Email" />
                <FormHelperText>Please Enter Email </FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>Phone</InputLabel>
                <TextField fullWidth placeholder="Enter Phone Number" />
                <FormHelperText>Please Enter Phone Number </FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>Secondary Phone Number</InputLabel>
                <TextField fullWidth placeholder="Enter Secondary Phone Number" />
                <FormHelperText>If unanswered, calls will be forwarded to this number</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>Profile Photo</InputLabel>
                <TextField
                  type="file"
                  fullWidth
                  placeholder="Upload Profile Photo"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <UploadFile />
                      </InputAdornment>
                    )
                  }}
                  onChange={handleInputChange}
                />

                <FormHelperText>Please Upload Photo</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>Company Type</InputLabel>
                <AutocompleteForms setCompanyFun={handleCompanyTypeChange} data={mainCompanies} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel required>Designation</InputLabel>
                <FormGroup row>
                  <FormControlLabel control={<Checkbox />} label="Admin" />
                  <FormControlLabel control={<Checkbox />} label="Manager" />
                  <FormControlLabel control={<Checkbox />} label="Agent" />
                  <FormControlLabel control={<Checkbox />} label="Other" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControlLabel control={<Checkbox />} label="Show/Hide User Details" />
              </Grid>
            </Grid>
        <CardActions>
            <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button variant="contained" color="secondary">
                  Add
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Reset</Button>
              </Grid>
            </Grid>
          </CardActions>
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

AddAgent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddAgent;
