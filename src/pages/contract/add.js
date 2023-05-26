// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button,Box, Alert, Divider, Stack, CardActions } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import { UploadFile } from '@mui/icons-material';
import React, { useState, useMemo, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// assets
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import TextEditor from '../../components/widget/Data/managment/text_editor';

// ==============================|| FIELDS ||============================== //

const userRoleData = [
  'Admin',
  'Legal Manager',
  'Marketing Manager',
  'Finance Manager',
  'HR Manager',
  'Sales Representative',
  'Sales Manager'
];
const departementRole = ['Sales Manager', 'HR Manager', 'Marketing Manager', 'Finance Manager', 'Legal Manager', 'Sales Representative'];

// ==============================|| Add Company form ||============================== //
function AddContract() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [departement, setDeparment] = useState([]);
  const [vatimg, changevat] = useState(null);

  const handleDeparmentChange = (newValue) => {
    setDeparment(newValue);
  };
  const handleUserRoleChange = (newValue) => {
    setUserRole(newValue);
  };
  const handleInputChange = (event) => {
    changevat(URL.createObjectURL(event.target.files[0]));
  };
  useEffect(() => {
    setUserRole(userRoleData);
    setDeparment(departementRole);
  }, []);

  return (
    <Page title="Contract">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Contract Details">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} lg={8}>
                <InputLabel required>Company Category</InputLabel>
                <AutocompleteForms setCompanyFun={handleDeparmentChange} data={departement} />
                <FormHelperText>{}</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={8}>
                <InputLabel required>Company Name</InputLabel>
                <AutocompleteForms setCompanyFun={handleUserRoleChange} data={userRole} />
                <FormHelperText>{}</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={8}>
                <InputLabel required>Order</InputLabel>
                <AutocompleteForms setCompanyFun={handleUserRoleChange} data={userRole} />
                <FormHelperText>{}</FormHelperText>
              </Grid>
              <Grid item xs={12} lg={8} >
                <InputLabel required>File Upload From</InputLabel>
                <FormGroup>
                    <FormControlLabel  control={<Checkbox />} label="File from Web" />
                    <FormControlLabel  control={<Checkbox />} label="File from Local" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} lg={6} mb={4} >
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Upload</Button>
                    <Button variant="contained">Reset</Button>
                </Stack>
              </Grid>
            </Grid>
            <Divider />
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

AddContract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddContract;
