// add_promotions.js

import { Grid, ListItemText, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import SubmitButton from 'components/Elements/SubmitButton';
import PopUp from 'components/InputArea/PopUp';
import InputText from 'components/InputArea/TextInput';
import { Formik } from 'formik';
import { useState } from 'react';

function ResetPassword({ title, setOpen, opened, size }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <PopUp opened={opened} setOpen={setOpen} size={size} title={title}>
      <Formik
        initialValues={{
          newPassword: '',
          confirmPassword: ''
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          //   resetForm();
        }}
      >
        {(props) => (
          <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
            <InputText
              style={{ xs: 12, lg: 12 }}
              label="New Password"
              id="newPassword"
              name="newPassword"
              helperText="Please input new password"
              placeholder="New Password"
              type={showPassword ? 'text' : 'password'}
              required={true}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <InputText
              style={{ xs: 12, lg: 12 }}
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              helperText="Please input confirm password"
              placeholder="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              required={true}
            />
            <SubmitButton />
          </Grid>
        )}
      </Formik>
    </PopUp>
  );
}

export const Item = ({ primary, secondary }) => {
  return (
    <>
      <Grid item xs={6} lg={4}>
        <ListItemText primary={primary} secondary={secondary} />
      </Grid>
    </>
  );
};

export default ResetPassword;
