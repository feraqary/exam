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
import { Formik } from 'formik';
import { objectValidator, dateValidator, stringValidator, fileValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
//redux actions import
import { createUserRole, getAllDepartments, getAllRoles } from 'store/slices/user-registration/action/user-registration';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const validationSchema = Yup.object({
  firstName: stringValidator('Please enter a first name', true),
  lastName: stringValidator('Please enter a last name', true),
  email: stringValidator('Please enter a email', true),
  phoneNumber: stringValidator('Please enter a phone number', true),
  password: stringValidator('Please enter a password', true),
  userRole: objectValidator('Please select a user role', true),
  department: objectValidator('Please select a department', true)
});
// ==============================|| Add Company form ||============================== //
function AddUser() {
  const theme = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState([]);
  const [department, setDepartment] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDepartments());
    dispatch(getAllRoles());
  }, [dispatch]);

  const { roles, departments } = useSelector((state) => state.signUp);

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
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('password', password);
    formData.append('roles_id', userRole);
    formData.append('department', department);

    dispatch(createUserRole(formData));
  };

  return (
    <Page title="User Details">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add User Information">
            <Grid container spacing={2} alignItems="center">
              <Formik
                validateOnChange
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  phoneNumber: '',
                  password: '',
                  userRole: '',
                  department: ''
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm, validateForm }) => {
                  await validateForm(values);
                  submitForm(values);
                  setSubmitting(false);
                  if (!companyError) {
                    resetForm();
                  }
                }}
                validator={() => ({})}
                onReset={(_) => {}}
              >
                {(props) => (
                  <>
                    <InputText
                      label="First Name"
                      placeholder="Enter First Name"
                      helperText="Please enter a first name"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                      value={firstName}
                      setValue={setFirstName}
                      id="firstName"
                      name="firstName"
                      required
                    />
                    <InputText
                      label="Last Name"
                      placeholder="Enter Last Name"
                      helperText="Please enter a last name"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                      value={lastName}
                      setValue={setLastName}
                      id="lastName"
                      name="lastName"
                      required
                    />
                    <InputText
                      label="Email"
                      placeholder="Enter Email"
                      style={{ xs: 12, lg: 6 }}
                      type="email"
                      helperText="Please enter a email"
                      value={email}
                      setValue={setEmail}
                      id="email"
                      name="email"
                      required
                    />
                    <InputText
                      label="Phone Number"
                      placeholder="Enter Phone Number"
                      style={{ xs: 12, lg: 6 }}
                      type="number"
                      helperText="Please enter a phone number"
                      value={phoneNumber}
                      setValue={setPhoneNumber}
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                    />
                    <InputText
                      label="Password"
                      placeholder="Enter Password"
                      type="password"
                      helperText="Please enter a password"
                      style={{ xs: 12, lg: 6 }}
                      value={password}
                      setValue={setPassword}
                      id="password"
                      name="password"
                      required
                    />

                    <AutoCompleteSelector
                      label="User Role"
                      placeholder="Choose User Role"
                      options={roles?.map((role) => {
                        return { label: role.Role, ...role };
                      })}
                      func={setUserRole}
                      style={{ xs: 12, lg: 6 }}
                      value={userRole}
                      id="userRole"
                      name="userRole"
                      required
                    />

                    <AutoCompleteSelector
                      label="Department"
                      placeholder="Choose A Department"
                      options={departments?.map((department) => {
                        return { label: department.Title, ...department };
                      })}
                      func={setDepartment}
                      style={{ xs: 12, lg: 6 }}
                      value={department}
                      id="department"
                      name="department"
                      required
                    />
                    <SubmitButton submit={submitForm} clear={clearFields} />
                  </>
                )}
              </Formik>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} lg={5} spacing={gridSpacing}>
          {/* TODO::show alert message */}
          {/* <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
            Record Added Successfully!
          </Alert> */}
        </Grid>
      </Grid>
    </Page>
  );
}

AddUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddUser;
