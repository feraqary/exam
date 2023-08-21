// material-ui
import { Grid } from '@mui/material';

// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

// assets
import InputText from 'components/InputArea/TextInput';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { createCompanyType } from 'store/slices/company-section/action/company';
import { ToastContainer } from 'react-toastify';
import FileUpload from 'components/InputArea/FileUpload';
import { fileValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import { useCreateSubCompanyTypeMutation } from 'store/services/company/companyApi';
import { ToastSuccess } from 'utils/toast';
<<<<<<< HEAD
=======


>>>>>>> main

const roles = [
  { label: 'Broker Company', id: 1 },
  { label: 'Developer Company', id: 2 },
  { label: 'Service Company', id: 3 }
];

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object({
  companyType: objectValidator(),
  subCompanyTypeName: stringValidator('Please provide a valid sub company type'),
  description: stringValidator('Please provide a description'),
  logoImage: fileValidator(SUPPORTED_FORMATS),
  iconImage: fileValidator(SUPPORTED_FORMATS)
});

function CompanyType() {
  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const [createCompanySubType, result] = useCreateSubCompanyTypeMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Company Sub Type has been successfully created');
    }
  }, [result.isSuccess]);

  const dispatch = useDispatch();

  return (
    <Page title="Add Company Types">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Container title="Add Company Type" style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <Formik
              initialValues={{
                companyType: '',
                subCompanyTypeName: '',
                description: '',
                logoImage: '',
                iconImage: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();
                formData.append('main_company_type_id', values.companyType.id);
                formData.append('title', values.subCompanyTypeName);
                formData.append('image_url', values.logoImage);
                formData.append('icon_url', values.iconImage);
                formData.append('description', values.description);
                createCompanySubType(formData);
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
                    label="Choose Company Type"
                    placeholder="Choose Company Type"
                    options={roles}
                    id="companyType"
                    name="companyType"
                    setFieldValue={props.setFieldValue}
                  />

                  <InputText
                    label="Add Sub Company Type Name"
                    placeholder="Add Sub Company Type Name"
                    helperText="Please enter company sub type name"
                    style={{ xs: 12, lg: 8 }}
                    type="text"
                    name="subCompanyTypeName"
                    id="subCompanyTypeName"
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

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
