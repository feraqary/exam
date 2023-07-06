// material-ui
import { Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';
import { createMainService, getAllCompanyTypes } from '../../../store/slices/company-section/action/company';
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
import { fileValidator, objectValidator, stringValidator } from 'utils/formik-validations';

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

  const dispatch = useDispatch();
  const { companyTypes } = useSelector((state) => state.companies);

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
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();
                formData.append('company_types_id', values.subCompanyType.id);
                formData.append('title', values.mainServiceName);
                formData.append('description', values.description);
                formData.append('image_url', values.logoImage);
                formData.append('icon_url', values.iconImage);
                dispatch(createMainService(formData));
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
                    options={companyTypes?.map((company) => {
                      return { label: company.title, ...company };
                    })}
                    id="subCompanyType"
                    name="subCompanyType"
                    setFieldValue={props.setFieldValue}
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
