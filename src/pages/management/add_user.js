// material-ui
import { Grid, Alert } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// assets
import InputText from 'components/InputArea/TextInput';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';

//redux actions import
import { createUserRole, getAllDepartments, getAllRoles } from 'store/slices/user-registration/action/user-registration';


// ==============================|| Add Company form ||============================== //
function AddUser() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [department, setDepartment] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDepartments());
    dispatch(getAllRoles());
  }, [dispatch]);

const {roles, departments} = useSelector((state) => state.signUp);

const clearFields = () => {
  setUserRole('');
  setDepartment('');
  setFirstName('');
  setLastName('');
  setEmail('');
  setPhone('');
  setPassword('');
};

const submitForm = () => {
  const formData = new FormData();
  formData.append('first_name', firstname);
  formData.append('last_name', lastname);
  formData.append('email', email);
  formData.append('phone_number', phone);
  formData.append('password', password);
  formData.append('roles_id', userRole);
  formData.append('department', department);
}

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
                value={firstname}
                setValue={setFirstName}
              />
              <InputText
                label="Last Name"
                placeholder="Enter Last Name"
                helperText="Please enter your last name"
                style={{ xs: 12, lg: 6 }}
                type="text"
                value={lastname}
                setValue={setLastName}
              />
              <InputText
                label="Email"
                placeholder="Enter Email"
                style={{ xs: 12, lg: 6 }}
                type="email"
                helperText="Please enter your email"
                value={email}
                setValue={setEmail}
              />
              <InputText
                label="Phone Number"
                placeholder="Enter Phone Number"
                style={{ xs: 12, lg: 6 }}
                type="number"
                helperText="Please enter your phone number"
                value={phone}
                setValue={setPhone}
              />
              <InputText
                label="Password"
                placeholder="Enter Password"
                type="password"
                helperText="Please enter your password"
                style={{ xs: 12, lg: 6 }}
                value={password}
                setValue={setPassword}
              />

              <AutoCompleteSelector
                label="User Role"
                value={userRole}
                id="selector"
                placeholder="Choose User Role"
                options={roles?.map(role => {
                  return {label: role.Role, ...role}
                })}
                func={setUserRole}
                style={{ xs: 12, lg: 6 }}
              />
              
              <AutoCompleteSelector
                label="Departments"
                value={department}
                id="selector"
                placeholder="Choose A Department"
                options={departments?.map(department => {
                  return {label: department.Title, ...department}
                })}
                func={setDepartment}
                style={{ xs: 12, lg: 6 }}
              />

            </Grid>
          </MainCard>
          <SubmitButton submit={submitForm} clear={clearFields} />
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
