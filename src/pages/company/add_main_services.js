// material-ui
import { Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useRef, useState } from 'react';
import { createMainService, getAllCompanyTypes } from '../../store/slices/company-section/action/company';
import 'react-toastify/dist/ReactToastify.css';

// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// ==============================|| Add Company Type form ||============================== //
function MainService() {
  const FILE_SIZE = 1;
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const dispatch = useDispatch();
  const { companyTypes, loading, error, companyType } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getAllCompanyTypes());
  }, [dispatch]);

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
              validationSchema={Yup.object({
                subCompanyType: Yup.object().typeError().required('Mandatory Selection'),
                mainServiceName: Yup.string().trim().required('Please provide a valid sub company type'),
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
                formData.append('company_types_id', values.subCompanyType.id);
                formData.append('title', values.mainServiceName);
                formData.append('description', values.description);
                formData.append('image_url', values.logoImage);
                formData.append('icon_url', values.iconImage);
                dispatch(createMainService(formData));
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
                    label="Sub CompanyTypes"
                    placeholder="Sub CompanyTypes"
                    options={companyTypes?.map((company) => {
                      return { label: company.title, ...company };
                    })}
                    id="subCompanyType"
                    name="subCompanyType"
                    setFieldValue={props.setFieldValue}
                  />

                  <InputText
                    label="Main Service Name"
                    placeholder="Enter Main Service Name"
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
