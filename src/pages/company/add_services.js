// material-ui
import { Grid } from '@mui/material';
import * as Yup from 'yup';
// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { createService, getAllMainServices } from 'store/slices/company-section/action/company';
import { ToastContainer } from 'react-toastify';
import { Formik } from 'formik';

// ==============================|| Add Company Type form ||============================== //

function Service() {
  const FILE_SIZE = 1;
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const dispatch = useDispatch();

  const { mainServices } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getAllMainServices());
  }, [dispatch]);

  return (
    <Page title="Add Sub Services">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container title="Add Sub Services" style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <Formik
              initialValues={{
                mainService: '',
                serviceName: '',
                description: '',
                logoImage: '',
                iconImage: ''
              }}
              validationSchema={Yup.object({
                mainService: Yup.object().typeError().required('Mandatory selection'),
                serviceName: Yup.string().trim().required('Please provide a valid service name'),
                description: Yup.string().required('Please provide a description'),
                logoImage: Yup.mixed()
                  .required('Please provide a logo image')
                  .test(
                    'FILE_SIZE',
                    'Uploaded file is too big. File size must not exceed 1MB',
                    (value) => value && value.size / (1024 * 1024) <= FILE_SIZE
                  )
                  .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => value && SUPPORTED_FORMATS.includes(value.type)),
                iconImage: Yup.mixed()
                  .required('Please provide an logo image')
                  .test(
                    'FILE_SIZE',
                    'Uploaded file is too big. File size must not exceed 1MB',
                    (value) => value && value.size / (1024 * 1024) <= FILE_SIZE
                  )
                  .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => value && SUPPORTED_FORMATS.includes(value.type))
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();
                formData.append('title', values.serviceName);
                formData.append('main_services_id', values.mainService.id);
                formData.append('description', values.description);
                formData.append('icon_url', values.logoImage);
                formData.append('image_url', values.iconImage);
                dispatch(createService(formData));
                setSubmitting(false);
                logoRef.current.value = '';
                iconRef.current.value = '';
                resetForm();
              }}
              onReset={(values) => {
                logoRef.current.value = '';
                iconRef.current.value = '';
              }}
            >
              {(props) => (
                <Grid container lg={12} xs={12} justifyContent="center" gap={3}>
                  <AutoCompleteSelector
                    style={{ xs: 12, lg: 8 }}
                    label="Main Services"
                    placeholder="Main Services"
                    options={mainServices.map((service) => {
                      return { label: service.title, ...service };
                    })}
                    id="mainService"
                    name="mainService"
                    setFieldValue={props.setFieldValue}
                  />

                  <InputText
                    label="Service Name"
                    placeholder="Enter Service Name"
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
