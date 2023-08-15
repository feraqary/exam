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
import { useCreateProjectDocMutation, useGetAllDocCategoriesQuery, useGetSubCategoryByIdQuery } from 'store/services/project/projectApi';
import { useRouter } from 'next/router';
import { useState } from 'react';

// ==============================|| Add Company Type form ||============================== //
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object({
  category: objectValidator(),
  subCategory: objectValidator(),
  iconImage: fileValidator(SUPPORTED_FORMATS)
});

function AddDocuments() {
  const router = useRouter();
  const iconRef = useRef(null);
  const [categoryId, setCategoryId] = useState(null);

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

  const { project_id } = router.query;

  return (
    <Page title="Add Project Documents">
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
                console.log(values);
                const formData = new FormData();
                formData.append('project_id', project_id);
                formData.append('category_id', values.category.id);
                formData.append('sub_category_id', values.subCategory.id);
                formData.append('file_url[]', values.fileUrl);
                createProjectDoc(formData);
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
                    getOptionLabel={(category) => category.category || ''}
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
                    label="Choose document category"
                    placeholder="Choose document category"
                    options={error ? [] : subCategories?.data || []}
                    getOptionLabel={(subCategory) => subCategory.sub_category || ''}
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
    </Page>
  );
}

AddDocuments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddDocuments;
