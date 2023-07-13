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
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { ToastContainer } from 'react-toastify';
import { fileValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import { useCreateMainServiceMutation, useGetSubCompanyTypesWithoutPaginationQuery } from 'store/services/services/serviceApi';
import { ToastError, ToastSuccess } from 'utils/toast';

// ==============================|| Add Company Type form ||============================== //
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object({
  subCompanyType: objectValidator(),
  mainServiceName: stringValidator('Please provide a valid sub company type'),
  description: stringValidator('Please provide a description'),
  logoImage: fileValidator(SUPPORTED_FORMATS),
  iconImage: fileValidator(SUPPORTED_FORMATS)
});

function MainService() {
  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const { data: subCompanyTypes, isLoading, isError, isFetching, error } = useGetSubCompanyTypesWithoutPaginationQuery();

  const [createMainService, result] = useCreateMainServiceMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Main service has been created successfully');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      console.log(error);
      ToastError(error);
    }
  }, [result.isError]);

  return (
    <Page title="Add Services">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <Formik
              initialValues={{
                subCompanyType: '',
                mainServiceName: '',
                description: '',
                logoImage: '',
                iconImage: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();
                formData.append('company_types_id', values.subCompanyType.id);
                formData.append('title', values.mainServiceName);
                formData.append('description', values.description);
                formData.append('image_url', values.logoImage);
                formData.append('icon_url', values.iconImage);
                createMainService(formData);
                setSubmitting(false);
                resetForm();
              }}
              onReset={(_) => {
                logoRef.current.value = '';
                iconRef.current.value = '';
              }}
            >
              {(props) => (
                <Grid container lg={12} xs={12} justifyContent="center" gap={3}>
                  <AutoCompleteSelector
                    style={{ xs: 12, lg: 8 }}
                    label="Choose Sub Company Type"
                    placeholder="Choose Sub Company Type"
                    options={error ? [] : subCompanyTypes?.data || []}
                    getOptionLabel={(subCompanyType) => subCompanyType.title || ''}
                    id="subCompanyType"
                    name="subCompanyType"
                    setFieldValue={props.setFieldValue}
                    loading={isLoading}
                  />

                  <InputText
                    label="Add Main Service Name"
                    placeholder="Add Main Service Name"
                    helperText="Please enter main service name"
                    style={{ xs: 12, lg: 8 }}
                    type="text"
                    name="mainServiceName"
                    id="mainServiceName"
                    required={true}
                  />
                  <InputText
                    label="Description"
                    placeholder="Enter Description"
                    style={{ xs: 12, lg: 8 }}
                    type="text"
                    multiline
                    rows={5}
                    id="description"
                    name="description"
                    helperText="Please enter the description for the sub compnay type"
                    required={true}
                  />

                  <FileUpload
                    id="logoImage"
                    name="logoImage"
                    required={true}
                    label="Upload Logo"
                    style={{ xs: 12, lg: 8 }}
                    placeholder="Upload Logo"
                    setFieldValue={props.setFieldValue}
                    helperText="Please upload your logo"
                    image={{ alt: 'Logo Preview', width: '250px', height: '250px' }}
                    ref={logoRef}
                  />
                  <FileUpload
                    id="iconImage"
                    name="iconImage"
                    required={true}
                    label="Upload Icon"
                    style={{ xs: 12, lg: 8 }}
                    placeholder="Upload Icon"
                    setFieldValue={props.setFieldValue}
                    helperText="Please upload your icon"
                    image={{ alt: 'Icon Preview', width: '250px', height: '250px' }}
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

MainService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default MainService;
