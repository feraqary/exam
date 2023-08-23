// add_promotions.js

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Page from 'components/ui-component/Page';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik } from 'formik';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import InputText from 'components/InputArea/TextInput';
import SubmitButton from 'components/Elements/SubmitButton';
import { useCreateProjectPromotionMutation, useEditPromotionListMutation, useGetAllPromoTypeWithoutPaginationQuery } from 'store/services/project/projectApi';
import { useEffect } from 'react';
import { ToastError, ToastSuccess } from 'utils/toast';
import { dateValidator, multipleSelectorValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
import useToastHook from 'hooks/useToast';

const validationSchema = Yup.object({
  promotion_types: multipleSelectorValidator(),
  description: stringValidator('Please provide a valid description', true),
  expiry_date: dateValidator('Please select a subscription date', true)
});

function AddPromotions({ projectId, onClose }) {
  console.log(projectId,'projectId');
  const [createProjectPromotion, result] = useCreateProjectPromotionMutation();
  const { data: promotionTypes, isLoading, isFetching, isError } = useGetAllPromoTypeWithoutPaginationQuery();
  const [editPromotionList,response]= useEditPromotionListMutation()
  console.log(response,'response from edit')
  const submitForm = async(values) => {
    console.log(values,'values');
    const  form_Data = new FormData()
    
    
    form_Data.append("id", projectId);
    

    form_Data.append('description', values.description);
    form_Data.append('expiry_date', values.expiry_date);
    const data = {formData: form_Data, id:projectId }




    values.promotion_types.forEach((promotion) => {
      form_Data.append('promotion_types[]', promotion.id);
      console.log('Promotion Type:', promotion.id);
    });
    console.log(data,'form data');

  try {
    const response = await editPromotionList(data);
    console.log('Mutation response:', response);
  } catch (error) {
    console.error('Mutation error:', error);
  }
    
    
  };
  // const res = useToastHook(result, 'promotion has been created successfully');

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
  
  useEffect(() => {
    if (response.isSuccess) {
      ToastSuccess('promotion has been Updated successfully');
    }
  }, [response.isSuccess]);
  useEffect(() => {
    if (response.isError) {
      const { data } = result.error;
      ToastError(data.error);
    }
  }, [response.isError]);

  
  return (
    <Page title="Edit Promotions">
      {/* <useToastHook result={result} success="promotion has been created successfully" /> */}

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
