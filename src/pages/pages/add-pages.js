// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, Divider, CardActions } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo, useEffect } from 'react';

// assets
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import TextEditor from '../management/components/text_editor';

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
function AddPages() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [departement, setDeparment] = useState([]);

  const handleDeparmentChange = (newValue) => {
    setDeparment(newValue);
  };
  const handleUserRoleChange = (newValue) => {
    setUserRole(newValue);
  };

  useEffect(() => {
    setUserRole(userRoleData);
    setDeparment(departementRole);
  }, []);

  return (
    <Page title="Add Page">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Page Details">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} lg={8}>
                <InputLabel required>Page Title</InputLabel>
                <TextField fullWidth placeholder="Page Title " />
              </Grid>
              <Grid item xs={12} lg={8}>
                <InputLabel required>Description</InputLabel>
                <TextEditor />
              </Grid>

              <Grid item xs={12} lg={8}>
                <InputLabel required>Type</InputLabel>
                <AutocompleteForms setCompanyFun={handleDeparmentChange} data={departement} />
                <FormHelperText>{}</FormHelperText>
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

AddPages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddPages;
