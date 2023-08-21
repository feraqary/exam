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
import { ProjectStepper } from 'components/dashboard/Project/Stepper';
import { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';

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
  const [optionId, setOptionId] = useState(null);

  return (
    <Page title="Add Payment Plans">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container style={{ xs: 12 }} title="Add Payment Plans">
          <Grid container xs={12} lg={12} spacing={gridSpacing}>
            <NormalAutoCompleteSelector
              label="Payment plans"
              placeholder="enter number of payment plans"
              style={{ xs: 12, lg: 4 }}
              options={[
                { label: '1 Plan', value: 1 },
                { label: '2 Plans', value: 2 },
                { label: '3 Plans', value: 3 },
                { label: '4 Plans', value: 4 },
                { label: '5 Plans', value: 5 }
              ]}
              func={(val) => {
                setCategoryId(val);
                setOptionId(val.value);
              }}
              value={categoryId}
            />
            <ProjectStepper option={optionId} />
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
