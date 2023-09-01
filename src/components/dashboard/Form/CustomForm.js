// useCustomForm.js
import React, { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import Container from 'components/Elements/Container';
import { ToastContainer } from 'react-toastify';
import CustomField from './CustomField'; // Import the CustomField component
import SubmitButton from 'components/Elements/SubmitButton';
import { Grid } from '@mui/material';

const useCustomForm = ({ initialValues, validationSchema, onSubmit, fields }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
  }, []);

  return (
    <Formik innerRef={formRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(props) => (
        <Container style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <Formik {...props}>
              {(props) => (
                <Grid container lg={12} xs={12} justifyContent="center" gap={3}>
                  {fields.map((field, index) => (
                    <CustomField key={index} {...field} {...props} />
                  ))}
                  <SubmitButton />
                </Grid>
              )}
            </Formik>
          </Grid>
        </Container>
      )}
    </Formik>
  );
};

export default useCustomForm;
