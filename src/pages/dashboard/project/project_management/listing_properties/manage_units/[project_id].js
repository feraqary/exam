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
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { ToastContainer } from 'react-toastify';
import { fileValidator, objectValidator } from 'utils/formik-validations';
import { ToastError, ToastSuccess } from 'utils/toast';
import { useCreateProjectDocMutation, useGetAllDocCategoriesQuery, useGetSubCategoryByIdQuery } from 'store/services/project/projectApi';
import { useRouter } from 'next/router';
import { useState } from 'react';
import InputText from 'components/InputArea/TextInput';

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
    <Page title="Manage Units">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container style={{ xs: 12 }} title="Manage Units">
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
                <Grid container spacing={gridSpacing}>
                  <AutoCompleteSelector
                    style={{ xs: 12, lg: 6 }}
                    label="Unit type"
                    placeholder="Choose a unit type"
                    options={[]}
                    getOptionLabel={(category) => category.category || ''}
                    id="unitType"
                    name="unitType"
                    setFieldValue={props.setFieldValue}
                    loading={isLoading}
                    required={true}
                  />
                  <AutoCompleteSelector
                    style={{ xs: 12, lg: 6 }}
                    label="Unit name"
                    placeholder="Choose a unit name"
                    options={[]}
                    getOptionLabel={(category) => category.category || ''}
                    id="unitName"
                    name="unitName"
                    setFieldValue={props.setFieldValue}
                    loading={isLoading}
                    required={true}
                  />
                  <AutoCompleteSelector
                    style={{ xs: 12, lg: 6 }}
                    label="Bedroom number"
                    placeholder="Choose a bedroom number"
                    options={[]}
                    getOptionLabel={(category) => category.category || ''}
                    id="bedroomNumber"
                    name="bedroomNumber"
                    setFieldValue={props.setFieldValue}
                    loading={isLoading}
                    required={true}
                  />
                  <InputText
                    label="Title"
                    style={{ xs: 12, lg: 6 }}
                    id="title"
                    name="title"
                    type="text"
                    required
                    helperText="Please enter the title"
                  />
                  <InputText
                    label="Unit area min (sqft)"
                    style={{ xs: 12, lg: 6 }}
                    id="minArea"
                    name="minArea"
                    type="text"
                    required
                    helperText="Please enter the minimum unit area in sqft"
                  />
                  <InputText
                    label="Unit area max (sqft)"
                    style={{ xs: 12, lg: 6 }}
                    id="maxArea"
                    name="maxArea"
                    type="text"
                    required
                    helperText="Please enter the maximum unit area in sqft"
                  />
                  <InputText
                    label="Price min"
                    style={{ xs: 12, lg: 6 }}
                    id="minArea"
                    name="minArea"
                    type="text"
                    required
                    helperText="Please enter the minimum price "
                  />
                  <InputText
                    label="Price max"
                    style={{ xs: 12, lg: 6 }}
                    id="maxArea"
                    name="maxArea"
                    type="text"
                    required
                    helperText="Please enter the maximum price "
                  />
                  <InputText
                    style={{ xs: 12, lg: 6 }}
                    label=" Description"
                    placeholder="Description"
                    type="text"
                    helperText="Please enter the  desciption"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    id="arabicPropertyDescription"
                    name="arabicPropertyDescription"
                    description
                  />
                  <Grid lg={6}></Grid>

                  <FileUpload
                    multiple
                    id="fileUrl"
                    name="fileUrl"
                    required={true}
                    label="Upload floor plan"
                    style={{ xs: 12, lg: 6 }}
                    placeholder="Upload floor plan"
                    setFieldValue={props.setFieldValue}
                    helperText="Please upload your floor plan"
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
