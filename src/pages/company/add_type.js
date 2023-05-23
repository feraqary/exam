// material-ui
import { Grid, TextField, InputAdornment, FormHelperText, CardActions, Divider, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useMemo, useState } from 'react';
import AutocompleteFormService from 'components/forms/forms-validation/AutoCompleteFormService';
import { UploadFile } from '@mui/icons-material';
// assets
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';

const roles = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company Type form ||============================== //
function CompanyType() {
  const [companyType, setCompanyType] = useState(null);
  const [licenseimg, setnewimg] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const handleInputChange = (event) => {
    setnewimg(URL.createObjectURL(event.target.files[0]));
  };
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
  const handleCompanyTypeChange = (newValue) => {
    setCompanyName(null);
    setCompanyType(newValue);
  };
  return (
    <Page title="Add Company Types">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Company Type">
            <Grid item xs={12} lg={10}>
              <InputLabel required>Company Type</InputLabel>
              <AutocompleteForms data={roles} setCompanyFun={handleCompanyTypeChange} />
              {subCompanyType}
              <Grid item xs={12} lg={12}>
                <InputLabel required>Description</InputLabel>
                <TextField fullWidth id="outlined-multiline-flexible" label="Description" multiline rows={5} defaultValue="" />
              </Grid>
              <Grid item xs={12} lg={6} sx={{ mt: 2 }}>
                <InputLabel required>Upload Icon</InputLabel>
                <TextField
                  type="file"
                  fullWidth
                  placeholder="Upload Icon"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <UploadFile />
                      </InputAdornment>
                    )
                  }}
                  onChange={handleInputChange}
                />
                <FormHelperText>Please Upload Icon</FormHelperText>
                <Grid item xs={12} lg={6}>
                  <img src={licenseimg} alt="Icon Preview" width="250px" height="250px" />
                </Grid>
              </Grid>
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
