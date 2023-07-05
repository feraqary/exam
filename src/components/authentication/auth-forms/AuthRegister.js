import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import Selector from 'components/InputArea/Selector';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { UploadFile } from '@mui/icons-material';
//coder-code: registration FILE
// third party
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';

// import { setCountry } from 'store/slices/country-section/slice/country';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';

import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FileUpload from 'components/InputArea/FileUpload';
import { createUser } from 'store/slices/user-registration/action/user-registration';
import { IconDeviceDesktopSearch } from '@tabler/icons-react';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import {
  setFirst_name,
  setLast_name,
  setCountry,
  setEmail,
  setProfile_image_url,
  setPhone_number,
  setCompany_number,
  setWhatsapp_number,
  setGender,
  setPassword,
  setStatus,
  setUser_types_id,
  setRoles_id,
  setDepartment,
  setSocial_login
} from 'store/slices/user-registration/slice/user-registration';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
// ===========================|| JWT - REGISTER ||=========================== //

const JWTRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState();
  const { register } = useAuth();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const countryChange = (newValue) => {
    dispatch(setCountry(newValue));
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };
  const { countries, loading, country } = useSelector((state) => state.countries);

  useEffect(() => {
    changePassword('123456');
  }, []);

  const { data: session } = useSession();
  console.log('session', session);
  const [flNames, setFlNames] = useState([]);

  useEffect(() => {
    if (session) {
      // console.log('session', session);
      setFlNames(session.user.name.split(' '));
      // console.log('setFlNames', flNames)
    }
  }, [session]);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          first_name: null,
          last_name: null,
          country: null,
          // state: null,
          // city: null,
          // community: null,
          email: session ? session.user.email : null,
          profile_image_url: null,
          phone_number: null,
          company_number: null,
          // whatsapp_number: null,
          gender: 1,
          password: null,
          status: 1,
          user_types_id: 1,
          roles_id: 1,
          department: 1,
          social_login: 'google'
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (session) {
              const formData = new FormData();
              formData.append('first_name', flNames[0]);
              formData.append('last_name', flNames[1]);
              formData.append('country', values.country);
              formData.append('state', values.state);
              formData.append('city', values.city);
              formData.append('community', values.community);
              formData.append('email', session.user.email);
              formData.append('profile_image_url', values.profile_image_url);
              formData.append('phone_number', values.phone_number);
              formData.append('company_number', values.company_number);
              formData.append('whatsapp_number', values.whatsapp_number);
              formData.append('gender', values.gender);
              formData.append('password', values.password);
              formData.append('status', values.status);
              formData.append('user_types_id', values.user_types_id);
              formData.append('roles_id', values.roles_id);
              formData.append('department', values.department);
              formData.append('social_login', values.social_login);

              dispatch(createUser(formData));
            } else {
              console.log(values);
              const formData = new FormData();
              formData.append('first_name', values.first_name);
              formData.append('last_name', values.last_name);
              formData.append('country', values.country);
              formData.append('state', values.state);
              formData.append('city', values.city);
              formData.append('community', values.community);
              formData.append('email', values.email);
              formData.append('profile_image_url', values.profile_image_url);
              formData.append('phone_number', values.phone_number);
              formData.append('company_number', values.company_number);
              formData.append('whatsapp_number', values.whatsapp_number);
              formData.append('gender', values.gender);
              formData.append('password', values.password);
              formData.append('status', values.status);
              formData.append('user_types_id', values.user_types_id);
              formData.append('roles_id', values.roles_id);
              formData.append('department', values.department);
              formData.append('social_login', values.social_login);

              dispatch(createUser(formData));
            }
            await register(values.email, values.password, values.firstName, values.lastName);
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
              dispatch(
                openSnackbar({
                  open: true,
                  message: 'Your registration has been successfully completed.',
                  variant: 'alert',
                  alert: {
                    color: 'success'
                  },
                  close: false
                })
              );

              setTimeout(() => {
                router.push('/pages/autthentication/portal_registration/login.js');
              }, 1500);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={session ? null : 'First Name'}
                  margin="normal"
                  name="firstName"
                  type="text"
                  value={session ? flNames[0] : values.first_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ ...theme.typography.customInput }}
                  disabled={session}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={session ? null : 'Last Name'}
                  margin="normal"
                  name="lastName"
                  type="text"
                  value={session ? flNames[1] : values.last_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ ...theme.typography.customInput }}
                  disabled={session}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AutoCompleteSelector
                  fullWidth
                  style={{ xs: 12, lg: 12, mb: 2 }}
                  id="country-selector"
                  options={countries?.map((country) => {
                    return { label: country.Country, id: country.ID };
                  })}
                  name="country"
                  placeholder="Select a Country"
                  value={values.country}
                  // setValue={setCountry}
                  onChange={handleChange}
                  loading={loading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FileUpload type="jpg,img,jpeg,png" name="profile_image_url" style={{ xs: 12, lg: 12 }} setValue={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company Number"
                  name="compNumber"
                  value={values.company_number}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={values.phone_number}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Whatsapp Number"
                  name="whatsNumber"
                  value={values.whatsapp_number}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Selector
                  id="gender"
                  label="Select Gender:"
                  placeholder="Select Gender"
                  options={['Male', 'Female']}
                  style={{ xs: 12, lg: 12 }}
                  value={values.gender}
                  setValue={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Selector
                  value={values.user_types_id}
                  id="compStatus"
                  label="User Type:"
                  placeholder="Choose Company Type"
                  options={['Company', 'Individual']}
                  style={{ xs: 12, lg: 12 }}
                  setValue={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Selector
                  value={values.status}
                  id="compStatus"
                  label="Select Company Status:"
                  placeholder="Select Company Status:"
                  options={['Active', 'Non-Active']}
                  style={{ xs: 12, lg: 12 }}
                  setValue={handleChange}
                />
              </Grid>
            </Grid>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              {session ? (
                <></>
              ) : (
                <>
                  {' '}
                  <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>{' '}
                </>
              )}
              {/* <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel> */}
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={session ? session.user.email : values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
                disabled={session}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            {session ? (
              <></>
            ) : (
              <>
                <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-register"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{}}
                  />

                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-register">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-password-register">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-register"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    label="Confirm Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{}}
                  />

                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-register">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
                {strength !== 0 && (
                  <FormControl fullWidth>
                    <Box sx={{ mb: 2 }}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Box style={{ backgroundColor: level.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" fontSize="0.75rem">
                            {level.label}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </FormControl>
                )}
              </>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Agree with &nbsp;
                      <Typography variant="subtitle1" component={'a'} href="/">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  onClick={() => {
                    signIn('google');
                  }}
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="secondary"
                  startIcon={<GoogleIcon />}
                >
                  Sign up with Google
                </Button>
              </AnimateButton>
            </Box>
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  onClick={() => {
                    signIn('linkedin');
                  }}
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="secondary"
                  startIcon={<LinkedInIcon />}
                >
                  Sign up with LinkedIn
                </Button>
              </AnimateButton>
            </Box>
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  onClick={() => {
                    signIn('twitter');
                  }}
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="secondary"
                  startIcon={<TwitterIcon />}
                >
                  Sign up with Twitter
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default JWTRegister;
