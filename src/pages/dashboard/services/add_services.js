// material-ui
import { Grid } from '@mui/material';
import * as Yup from 'yup';
// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useRef, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';

import { ToastContainer } from 'react-toastify';
import { Formik } from 'formik';
import { fileValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import { useCreateServiceMutation, useGetAllMainServicesQuery } from 'store/services/services/serviceApi';
import { ToastSuccess } from 'utils/toast';

// ==============================|| Add Company Type form ||============================== //

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object({
  mainService: objectValidator(),
  serviceName: stringValidator('Please provide a valid service name'),
  description: stringValidator('Please provide a description'),
  logoImage: fileValidator(SUPPORTED_FORMATS),
  iconImage: fileValidator(SUPPORTED_FORMATS)
});

function Service() {
  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const { data: services, isError, isLoading, isFetching, error } = useGetAllMainServicesQuery();

  const [createService, result] = useCreateServiceMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Service hase been created successfully');
    }
  }, [result.isSuccess]);

  return (
    <Page title="Add Sub Services">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <Formik
              initialValues={{
                mainService: '',
                serviceName: '',
                description: '',
                logoImage: '',
                iconImage: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();
                formData.append('title', values.serviceName);
                formData.append('main_services_id', values.mainService.id);
                formData.append('description', values.description);
                formData.append('icon_url', values.logoImage);
                formData.append('image_url', values.iconImage);
                createService(formData);
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
                    label="Choose Main Services"
                    placeholder="Choose Main Services"
                    options={error ? [] : services?.data || []}
                    getOptionLabel={(service) => service.title || ''}
                    id="mainService"
                    name="mainService"
                    setFieldValue={props.setFieldValue}
                  />

                  <InputText
                    label="Add Service Name"
                    placeholder="Add Service Name"
                    helperText="Please enter service name"
                    style={{ xs: 12, lg: 8 }}
                    type="text"
                    name="serviceName"
                    id="serviceName"
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

Service.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Service;
