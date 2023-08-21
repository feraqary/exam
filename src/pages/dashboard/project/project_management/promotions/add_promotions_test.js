// add_promotions.js

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Page from 'components/ui-component/Page';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik } from 'formik';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import InputText from 'components/InputArea/TextInput';
import SubmitButton from 'components/Elements/SubmitButton';
import { useCreateProjectPromotionMutation } from 'store/services/project/projectApi';
import { useEffect } from 'react';
import { ToastError, ToastSuccess } from 'utils/toast';
import { dateValidator, multipleSelectorValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';

const promotionOptions = [
  { id: 1, label: 'Open to All Nationalities' },
  { id: 2, label: 'Flexible Payment Plan' },
  { id: 3, label: 'No Commission' },
  { id: 4, label: '0 ADM Waiver' },
  { id: 5, label: 'Discount' },
  { id: 6, label: 'Low Down Payment' }
];

const validationSchema = Yup.object({
  promotion_types: multipleSelectorValidator(),
  description: stringValidator('Please provide a valid description', true),
  expiry_date: dateValidator('Please select a subscription date', true)
});

function AddPromotions({ projectId, onClose }) {
  const [createPromotion, result] = useCreateProjectPromotionMutation();

  const submitForm = (values) => {
    const formData = new FormData();
    formData.append('project_id', projectId);
    formData.append('description', values.description);
    formData.append('expiry_date', values.expiry_date);
    values.promotion_types.forEach((promotion) => {
      formData.append('promotion_type[]', promotion.id);
    });
    createPromotion(formData);
  };

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('promotion has been created successfully');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      ToastError(data.error);
    }
  }, [result.isError]);

  return (
    <Page title="Add Promotions">
      <Formik
        validateOnChange={false}
        initialValues={{
          promotion_types: [],
          description: '',
          expiry_date: null
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm, validateForm }) => {
          await validateForm(values);
          submitForm(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {(props) => (
          <>
            <Grid container lg={12} xs={12} justifyContent="center" gap={3}>
              <MultipleAutoCompleteSelector
                style={{ xs: 12, lg: 12 }}
                label="Promotion Types"
                id="promotion_types"
                name="promotion_types"
                placeholder="Select Promotion Types"
                options={promotionOptions}
              />
              <InputText
                label="Description"
                placeholder="Enter Description"
                style={{ xs: 12, lg: 12 }}
                type="text"
                multiline
                rows={5}
                id="description"
                name="description"
                helperText="Please enter the description for the sub compnay type"
                required={true}
              />
              <CustomDateTime
                helperInfo
                style={{ xs: 12, lg: 12 }}
                label="Expiry Date"
                helperText="Please enter expiry date"
                id="expiry_date"
                name="expiry_date"
                required={true}
                setFieldValue={props.setFieldValue}
              />
              <SubmitButton />
            </Grid>
          </>
        )}
      </Formik>
    </Page>
  );
}

export default AddPromotions;
