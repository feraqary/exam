import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'Link';
import { useRouter } from 'next/router';

// material-ui
import { useTheme } from '@mui/material/styles';
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
  Typography
} from '@mui/material';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { userLogIn } from 'store/slices/user-registration/action/user-registration';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Provider, useDispatch } from 'react-redux';
import { useSession, signIn, signOut } from 'next-auth/react';
import Google from 'next-auth/providers/google';
// ===============================|| JWT LOGIN ||=============================== //

const JWTLogin = ({ loginProp, closePopUp, page, ...others }) => {
  const theme = useTheme();
  const [route, setRoute] = useState(null);
  const { login } = useAuth();
  const scriptedRef = useScriptRef();

  const [checked, setChecked] = React.useState(true);

  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: session } = useSession();

  console.log('session', session);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const normalSignin = useRef(null);
  const [submit, setSubmit] = useState(false);


  const handleSocialLogin = (event) => {

  }
  return (
    <Formik
      initialValues={{
        email: 'info@codedthemes.com',
        password: '123456',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const formData = new FormData();
          formData.append('email', values.email);
          formData.append('password', values.password);
          formData.append('social_login', '');

          dispatch(userLogIn(formData));

          await login(values.email, values.password);

          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }

          router.push('/dashboard/default');
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
          <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
            <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email-login"
              type="email"
              value={values.email}
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              inputProps={{}}
            />
            {touched.email && errors.email && (
              <FormHelperText error id="standard-weight-helper-text-email-login">
                {errors.email}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-login"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              name="password"
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
              label="Password"
            />
            {touched.password && errors.password && (
              <FormHelperText error id="standard-weight-helper-text-password-login">
                {errors.password}
              </FormHelperText>
            )}
          </FormControl>

          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                component={Link}
                href={
                  loginProp
                    ? `/pages/authentication/portal_registration/forgot-password`
                    : '/pages/authentication/portal_registration/forgot-password'
                }
                color="secondary"
                sx={{ textDecoration: 'none' }}
              >
                Forgot Password?
              </Typography>
            </Grid>
          </Grid>

          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                color="secondary"
                disabled={isSubmitting}
                onClick={() => {
                  setSubmit(true);
                }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                ref={normalSignin}
              >
                Sign In
              </Button>
            </AnimateButton>
          </Box>
          {/* <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                color="secondary"
                onClick={() => {
                  signIn('google', {
                    callbackUrl: 'http://localhost:3000/dashboard/default'
                  });
                }}
                fullWidth
                size="large"
                variant="outlined"
                startIcon={<GoogleIcon />}
                disabled={isSubmitting && (session ? true : false)}
                type="submit"
              >
                Sign In With google
              </Button>
            </AnimateButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                color="secondary"
                disabled={isSubmitting}
                onClick={() => {
                  signIn('linkedin', {
                    callbackUrl: 'http://localhost:3000/dashboard/default'
                  });
                }}
                fullWidth
                size="large"
                variant="outlined"
                startIcon={<LinkedInIcon />}
                type="submit"
              >
                Sign In With LinkedIn
              </Button>
            </AnimateButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                color="secondary"
                disabled={isSubmitting}
                onClick={() => {
                  signIn('twitter', {
                    callbackUrl: 'http://localhost:3000/dashboard/default'
                  });
                }}
                fullWidth
                size="large"
                variant="outlined"
                startIcon={<TwitterIcon />}
                type="submit"
              >
                Sign In With Twitter
              </Button>
            </AnimateButton>
          </Box> */}
        </form>
      )}
    </Formik>
  );
};

JWTLogin.propTypes = {
  loginProp: PropTypes.number
};

export default JWTLogin;
