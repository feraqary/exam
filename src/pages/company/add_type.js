// material-ui
import { Grid } from '@mui/material';

// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';
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

const roles = [
  { label: 'Broker Company', id: 1 },
  { label: 'Developer Company', id: 2 },
  { label: 'Service Company', id: 3 }
];

// ==============================|| Add Company Type form ||============================== //

function CompanyType() {
  const FILE_SIZE = 1;
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  const logoRef = useRef(null);
  const iconRef = useRef(null);

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
              validationSchema={Yup.object({
                companyType: Yup.object().typeError().required('Mandatory selection'),
                subCompanyTypeName: Yup.string().trim().required('Please provide a valid sub company type'),
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
                formData.append('main_company_type_id', values.companyType.id);
                formData.append('title', values.subCompanyTypeName);
                formData.append('image_url', values.logoImage);
                formData.append('icon_url', values.iconImage);
                formData.append('description', values.description);
                dispatch(createCompanyType(formData));
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
                    label="Company Type"
                    placeholder="Company Type"
                    options={roles}
                    id="companyType"
                    name="companyType"
                    setFieldValue={props.setFieldValue}
                  />

                  <InputText
                    label="Company Sub Type Name"
                    placeholder="Enter Company Sub Type Name"
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
