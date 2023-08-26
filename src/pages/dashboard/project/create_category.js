import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';
import AutoCompleteSelector, {
  MultipleAutoCompleteSelector,
  AutoCompleteSelectorAPI,
  NormalAutoCompleteSelector
} from 'components/InputArea/AutoCompleteSelector';
import Page from 'components/ui-component/Page';
import Layout from 'layout';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import FileUpload from 'components/InputArea/FileUpload';
import React, { useEffect } from 'react';
import InputText from 'components/InputArea/TextInput';
import SubmitButton from 'components/Elements/SubmitButton';
import { useCreateCategoryMutation, useCreateSubCategoryMutation, useGetDocsCategoriesQuery } from 'store/services/project/projectApi';
import { useState } from 'react';
import { ToastError, ToastSuccess } from 'utils/toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Category() {
  const [createCategory, CreateCategoryResult] = useCreateCategoryMutation();

  const [success, setSuccess] = useState(CreateCategoryResult.isSuccess);
  useEffect(() => {
    if (CreateCategoryResult.isSuccess) {
      ToastSuccess('Document category has been created successfully');
    }
  }, [CreateCategoryResult.isSuccess]);

  useEffect(() => {
    if (CreateCategoryResult.isError) {
      const { data } = CreateCategoryResult.error;
      ToastError(data.error);
    }
  }, [CreateCategoryResult.isError]);

  useEffect(() => {
    setSuccess(CreateCategoryResult.isSuccess);
  }, [CreateCategoryResult.isSuccess]);
  
  return (
    <>
      <Page title="Add Document Category">
        <ToastContainer />
        <Grid container spacing={3}>
          <Formik
            initialValues={{
              category_name: ''
            }}
            onSubmit={(values, { setSubmitting, resetForm, onSubmit }) => {
              const formData = new FormData();

              formData.append('category', values.category_name);

              createCategory(formData);
            }}
          >
            {(props) => (
              <Grid item xs={12}>
                <MainCard title="Add Document Category">
                  <Grid container spacing={2} alignItems="center">
                    <InputText
                      // disabled={success}
                      label="Category Name"
                      helperText="provide the name of the category"
                      style={{ xs: 12, lg: 6 }}
                      placeholder="Please provide the name of the category"
                      id="category_name"
                      name="category_name"
                      required={true}
                    />

                    <Grid item lg={12} textAlign={'center'}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          props.submitForm();
                          console.log(CreateCategoryResult);
                        }}
                      >
                        Add Category
                      </Button>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
            )}
          </Formik>
          {success && <Sub setSuccess={setSuccess} success={success} />}
        </Grid>
      </Page>
    </>
  );
}

function Sub({ setSuccess }) {
  const [createSubCategory, CreateSubCategoryResult] = useCreateSubCategoryMutation();

  const { data: categories, isLoading, isError } = useGetDocsCategoriesQuery();
  useEffect(() => {
    setSuccess(!CreateSubCategoryResult.isSuccess);
  }, [CreateSubCategoryResult.isSuccess]);

  useEffect(() => {
    if (CreateSubCategoryResult.isSuccess) {
      ToastSuccess('Document Sub-Category has been created successfully');
    }
  }, [CreateSubCategoryResult.isSuccess]);

  useEffect(() => {
    if (CreateSubCategoryResult.isError) {
      const { data } = CreateSubCategoryResult.error;
      ToastError(data.error);
    }
  }, [CreateSubCategoryResult.isError]);
  return (
    <>
      <Formik
        initialValues={{
          category_id: '',
          sub_name: ''
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const formData = new FormData();

          formData.append('category_id', values.category_id.id);
          formData.append('sub_category', values.sub_name);

          createSubCategory(formData);

          // if(){
          //   setSuccess(!CreateSubCategoryResult);
          // }
        }}
      >
        {(props) => (
          <Grid item xs={12}>
            <ToastContainer />
            <MainCard title="Add Document Sub-Category">
              <Grid container spacing={2} alignItems="center" justifyContent={'center'}>
                <AutoCompleteSelector
                  label="Category"
                  helperText="select a category"
                  style={{ xs: 12, lg: 6 }}
                  placeholder="Please select a category"
                  options={categories?.data || []}
                  id="category_id"
                  name="category_id"
                  required={true}
                />

                <InputText
                  label="Sub Category Name"
                  helperText="provide the name of the sub category"
                  style={{ xs: 12, lg: 6 }}
                  placeholder="Please provide the name of the sub category"
                  id="sub_name"
                  name="sub_name"
                  required={true}
                />

                <Grid item lg={12} textAlign={'center'}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      props.submitForm();
                    }}
                  >
                    Add Sub Category
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        )}
      </Formik>
    </>
  );
}

Category.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
