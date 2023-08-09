// material-ui
import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

// assets
import SubmitButton, { NormalSubmitButton } from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { ToastContainer } from 'react-toastify';
import { fileValidator, objectValidator } from 'utils/formik-validations';
import { ToastError, ToastSuccess } from 'utils/toast';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NormalInputText } from 'components/InputArea/TextInput';

// ==============================|| Add Company Type form ||============================== //
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object({
  category: objectValidator(),
  subCategory: objectValidator(),
  iconImage: fileValidator(SUPPORTED_FORMATS)
});

const AddMoreBtn = ({ addPaymentPlan }) => {
  return (
    <Button variant="outlined" sx={{ margin: '0px 0px 0px 8px' }} fullWidth onClick={() => addPaymentPlan()}>
      Add More
    </Button>
  );
};

function AddPaymentPlans() {
  const router = useRouter();
  const iconRef = useRef(null);
  const [categoryId, setCategoryId] = useState(null);
  const [paymentPlans, setPaymentPlans] = useState([{ percentage: null, date: null, milestone: null }]);
  console.log(paymentPlans);
  const addPaymentPlans = () => {
    setPaymentPlans((pre) => [...pre, { percentage: null, date: null, milestone: null }]);
  };

  const DynamicInputField = () => {
    return (
      <>
        <NormalInputText
          label="Percentage"
          placeholder="Please enter a percentage"
          helperText="please input a valid input"
          style={{ xs: 12, lg: 4 }}
          type="text"
        />
        <NormalInputText
          label="Date"
          placeholder="Please enter a date"
          helperText="please input a valid input"
          style={{ xs: 12, lg: 4 }}
          type="date"
        />
        <NormalInputText
          label="Milestone"
          placeholder="Please enter a milestone"
          helperText="please input a valid input"
          style={{ xs: 12, lg: 4 }}
          type="text"
        />
      </>
    );
  };

  return (
    <Page title="Add Payment Plans">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container style={{ xs: 12 }} title="Add Payment Plans">
          <Grid container xs={12} lg={12} justifyContent="center" spacing={gridSpacing}>
            {paymentPlans.map((plan) => (
              <DynamicInputField />
            ))}
            <Grid lg={3} mt={10}>
              <AddMoreBtn addPaymentPlan={addPaymentPlans} />
            </Grid>
          </Grid>
        </Container>
        <NormalSubmitButton />
      </Grid>
    </Page>
  );
}

AddPaymentPlans.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddPaymentPlans;