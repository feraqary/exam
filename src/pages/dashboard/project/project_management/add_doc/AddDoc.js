// material-ui
import { Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

// assets
import FileUpload, { MultipleFileUpload } from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { ToastContainer } from 'react-toastify';
import { fileValidator, objectValidator } from 'utils/formik-validations';
import { ToastError, ToastSuccess } from 'utils/toast';
import {
  useCreateProjectDocMutation,
  useGetAllDocCategoriesQuery,
  useGetSubCategoryByIdQuery,
  useCreateProjectPropertyDocMutation
} from 'store/services/project/projectApi';
import { useRouter } from 'next/router';
import { useState } from 'react';

// ==============================|| Add Company Type form ||============================== //
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object({
  category: objectValidator(),
  subCategory: objectValidator()
  // iconImage: fileValidator(SUPPORTED_FORMATS)
});

function AddDocuments({ project_id, close, type }) {
  const iconRef = useRef(null);
  const [categoryId, setCategoryId] = useState(null);
  console.log('type: ', type);
  const { data: categories, isLoading, isError, isFetching, error } = useGetAllDocCategoriesQuery();

  const {
    data: subCategories,
    isLoading: isLoadingSubCategories,
    isError: isErrorSubCategories,
    isFetching: isFetchingSubCategories,
    error: errorSubCategories
  } = useGetSubCategoryByIdQuery(categoryId, {
    skip: categoryId === null || categoryId === undefined
  });

  const [createProjectDoc, result] = useCreateProjectDocMutation();
  const [createProjectPropertyDoc, propResult] = useCreateProjectPropertyDocMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Documents Uploaded successfully');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      ToastError('Error: ', data?.message);
    }
  }, [result.isError]);

  useEffect(() => {
    if (propResult.isSuccess) {
      ToastSuccess('Documents Uploaded successfully');
    }
  }, [propResult.isSuccess]);

  useEffect(() => {
    if (propResult.isError) {
      const { data } = propResult.error;
      ToastError('Error: ', data?.message);
    }
  }, [propResult.isError]);

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container style={{ xs: 12 }} title="Add Project Documents">
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <Formik
              initialValues={{
                category: null,
                subCategory: '',
                fileUrl: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const fileLength = values.fileUrl.length;
                console.log(fileLength);
                const formData = new FormData();
                if (type == 'project') {
                  formData.append('project_id', project_id);
                  formData.append('category_id', values.category.id);
                  formData.append('sub_category_id', values.subCategory.id);
                  for (let i = 0; i < fileLength; i++) {
                    formData.append('file_url[]', values.fileUrl[i]);
                  }
                  createProjectDoc(formData);
                } else if (type == 'property') {
                  formData.append('project_property_id', project_id);
                  formData.append('category_id', values.category.id);
                  formData.append('sub_category_id', values.subCategory.id);
                  for (let i = 0; i < fileLength; i++) {
                    formData.append('file_url[]', values.fileUrl[i]);
                  }
                  createProjectPropertyDoc(formData);
                }
                close(false);
                setSubmitting(false);
                resetForm();
                // router.back();
              }}
              onReset={(_) => {
                iconRef.current.value = '';
              }}
            >
              {(props) => (
                <Grid container lg={12} xs={12} justifyContent="center" gap={3}>
                  <AutoCompleteSelector
                    style={{ xs: 12, lg: 8 }}
                    label="Choose document category"
                    placeholder="Choose document category"
                    options={error ? [] : categories?.data || []}
                    getOptionLabel={(category) => category.label || ''}
                    id="category"
                    name="category"
                    setFieldValue={props.setFieldValue}
                    loading={isLoading}
                    required={true}
                    func={(newValue) => {
                      setCategoryId(newValue?.id);
                    }}
                  />
                  <AutoCompleteSelector
                    style={{ xs: 12, lg: 8 }}
                    label="Choose document sub-category"
                    placeholder="Choose document sub-category"
                    options={error ? [] : subCategories?.data || []}
                    getOptionLabel={(subCategory) => subCategory.label || ''}
                    disabled={!props.values.category}
                    id="subCategory"
                    name="subCategory"
                    setFieldValue={props.setFieldValue}
                    loading={isLoading}
                    required={true}
                  />

                  <FileUpload
                    multiple
                    id="fileUrl"
                    name="fileUrl"
                    required={true}
                    label="Upload Icon"
                    style={{ xs: 12, lg: 8 }}
                    placeholder="Upload Icon"
                    setFieldValue={props.setFieldValue}
                    helperText="Please upload your icon"
                    ref={iconRef}
                  />
                  <SubmitButton />
                </Grid>
              )}
            </Formik>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

AddDocuments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddDocuments;
