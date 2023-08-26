// material-ui
import { Grid, Alert } from '@mui/material';
import DateTime from 'pages/forms/components/date-time';
// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import Container from 'components/Elements/Container';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import SubmitButton from 'components/Elements/SubmitButton';
import { Formik } from 'formik';
import { objectValidator, dateValidator, stringValidator, fileValidator } from 'utils/formik-validations';
import * as Yup from 'yup';

// ==============================|| FIELDS ||============================== //

// const fetchCompanyServices = CompanyServices;
const section = [
  'Banner-Project detail page',
  'Banner-Project Home page',
  'Banner-Project detail page',
  'Banner-New Project',
  'Banner-Completed Project',
  'Banner-Offplan Project',
  'Banner-Search On Map-Project',
  'Banner-Project Rating',
  'Banner-Developers',
  'Banner-International Projects'
];

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

// ==============================|| Add Company form ||============================== //

const validationSchema = Yup.object({
  title: stringValidator('Please enter a title', true),
  subTitle: stringValidator('Please enter a sub title', true),
  type: stringValidator('Please enter a type', true),
  target: stringValidator('Please enter a target', true),
  homeBanner: fileValidator(SUPPORTED_FORMATS),
  bannerImage: objectValidator('Please select a banner image', true),
  endingDate: dateValidator('Please select an ending date', true)
});

function AddBanner() {
  const theme = useTheme();
  const [value, setValue] = useState();

  const handleInputChange = (event) => {
    setnewimg(URL.createObjectURL(event.target.files[0]));
  };

  //   const handleCompanyTypeChange = (newValue) => {
  //     setCompanyType(newValue);
  //   };
  const submitForm = (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('subTitle', values.subtitle);
    formData.append('type', values.type);
    formData.append('target', values.target);
    formData.append('homeBanner', values.homeBanner);
    formData.append('bannerImage', values.bannerImage);
    formData.append('endingDate', values.endingDate);

    // createExhibition(formData);
  };
  return (
    <Page title="Add Company">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Banner Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <Formik
              validateOnChange
              initialValues={{
                title: '',
                subTitle: '',
                type: '',
                target: '',
                homeBanner: '',
                bannerImage: '',
                endingDate: ''
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm, validateForm }) => {
                await validateForm(values);
                submitForm(values);
                setSubmitting(false);
                if (!companyError) {
                  resetForm();
                }
              }}
              validator={() => ({})}
              onReset={(_) => {
              }}
            >
              {(props) => (
                <>
                  <InputText
                    label="Title"
                    placeholder="Banner Title"
                    helperInfo
                    helperText="Please enter a banner title"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    id="title"
                    name="title"
                    required
                  />

                  <InputText
                    label="Sub Title"
                    placeholder="Banner Sub Title"
                    helperText="Please enter the banner sub title"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    id="subTitle"
                    name="subTitle"
                    required
                  />

                  <InputText
                    label="Type"
                    placeholder="Banner Type"
                    helperText="Please enter the banner type"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    id="type"
                    name="type"
                    required
                  />

                  <InputText
                    label="Target"
                    placeholder="Banner Target"
                    helperText="Please enter the banner target"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    id="target"
                    name="target"
                    required
                  />

                  <FileUpload
                    label="Home Banner"
                    style={{ xs: 12, lg: 6 }}
                    type="file"
                    setFieldValue={props.setFieldValue}
                    placeholder="upload"
                    helperInfo
                    helperText="HOME BANNER SHOULD BE 1363 X 633 Pixels"
                    id="homeBanner"
                    name="homeBanner"
                    required
                  />

                  <AutoCompleteSelector
                    label="Banner Image"
                    placeholder="Select image"
                    helperInfo
                    helperText="Please select a banner image"
                    options={section}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 6 }}
                    id="bannerImage"
                    name="bannerImage"
                    required
                  />

                  <CustomDateTime
                    helperInfo
                    helperText="Please select an end date"
                    id="endingDate"
                    name="endingDate"
                    label="End Date Time with"
                    style={{ xs: 12, lg: 6 }}
                    setFieldValue={props.setFieldValue}
                    required
                  />
                  <SubmitButton />
                  <Grid item xs={12} lg={5} spacing={gridSpacing}>
                    {/* TODO::show alert message */}
                    {/* <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
                      Record Added Successfully!
                    </Alert> */}
                  </Grid>
                </>
              )}
            </Formik>
          </Grid>
        </Container>
      </Grid>
    </Page>
  );
}

AddBanner.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddBanner;
