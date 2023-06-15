// material-ui
import { Grid, Alert } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';

// assets
import InputText from 'components/InputArea/TextInput';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| Add user form ||============================== //

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
function AddUser() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [department, setDepartment] = useState([]);

  return (
    <Page title="User Details">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add User Information">
            <Grid container spacing={2} alignItems="center">
              <InputText
                label="First Name"
                placeholder="Enter First Name"
                helperText="Please enter your first name"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText
                label="Last Name"
                placeholder="Enter Last Name"
                helperText="Please enter your last name"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText
                label="Email"
                placeholder="Enter Email"
                style={{ xs: 12, lg: 6 }}
                type="email"
                helperText="Please enter your email"
              />
              <InputText
                label="Phone Number"
                placeholder="Enter Phone Number"
                style={{ xs: 12, lg: 6 }}
                type="number"
                helperText="Please enter your phone number"
              />
              <InputText
                label="Password"
                placeholder="Enter Password"
                type="password"
                helperText="Please enter your password"
                style={{ xs: 12, lg: 6 }}
              />

              <AutoCompleteSelector
                label="User Role"
                setValue={setUserRole}
                value={userRole}
                id="selector"
                placeholder="Choose User Role"
                options={userRoleData}
                style={{ xs: 12, lg: 6 }}
              />
              <AutoCompleteSelector
                label="Departments"
                setValue={setDepartment}
                value={department}
                id="selector"
                placeholder="Choose A Department"
                options={departementRole}
                style={{ xs: 12, lg: 6 }}
              />
            </Grid>
          </MainCard>
          <SubmitButton />
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

AddUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddUser;
