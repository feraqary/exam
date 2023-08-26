import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Page from 'components/ui-component/Page';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik } from 'formik';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import InputText from 'components/InputArea/TextInput';
import SubmitButton from 'components/Elements/SubmitButton';

import {
  useCreateProjectPromotionMutation,
  useEditPromotionListMutation,
  useGetAllPromoTypeWithoutPaginationQuery
} from 'store/services/project/projectApi';
import { ToastError, ToastSuccess } from 'utils/toast';
import { dateValidator, multipleSelectorValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  promotion_types: multipleSelectorValidator(),
  description: stringValidator('Please provide a valid description', true),
  expiry_date: dateValidator('Please select a subscription date', true)
});

function AddPromotions({ projectId, title,setPromotionOpen }) {
  const { data: promotionTypes, isLoading, isFetching, isError } = useGetAllPromoTypeWithoutPaginationQuery();
  const [editPromotionList, response] = useEditPromotionListMutation();
  const [createPromotions, result] = useCreateProjectPromotionMutation();
  const submitForm = (values) => {
    if (title === 'AddPromotion') {
      const form_Data = new FormData();
      form_Data.append('project_id', projectId);
      form_Data.append('description', values.description);
      form_Data.append('expiry_date', values.expiry_date);
      const data = { formData: form_Data, id: projectId };
      values.promotion_types.forEach((promotion) => {
        form_Data.append('promotion_type[]', promotion.id);
      });
      const response = createPromotions(data);
    } else {
      const form_Data = new FormData();
      form_Data.append('id', projectId);
      form_Data.append('description', values.description);
      form_Data.append('expiry_date', values.expiry_date);
      const data = { formData: form_Data, id: projectId };
      values.promotion_types.forEach((promotion) => {
        form_Data.append('promotion_types[]', promotion.id);
      });
      const response = editPromotionList(data);
    }
  };

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('promotion has been created successfully');
      setPromotionOpen(false)
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      ToastError(result.error);
    }
  }, [result.isError]);

  useEffect(() => {
    if (response.isSuccess) {
      ToastSuccess('promotion has been Updated successfully');
      setPromotionOpen(false)
    }
  }, [response.isSuccess]);

  useEffect(() => {
    if (response.isError) {
      const { data } = response.error;
      ToastError(data.error);
    }
  }, [response.isError]);

  return (
    <Page title="Edit Promotions">
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
                loading={isLoading}
                options={isError ? [] : promotionTypes?.data || []}
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
