import { Grid, Button, Typography, Alert } from '@mui/material';
import React from 'react';

import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import { Formik } from 'formik';
import { objectValidator, stringValidator, fileValidator } from 'utils/formik-validations';
import * as Yup from 'yup';

const mainServiceTypes = ['Sell', 'Rent', 'Property Hub', 'Project', 'Exchange', 'Career'];
const departementRole = [
  'Brokerage Services',
  'Management Services',
  'Finance Services',
  'Evaluation Services',
  'Education',
  'Design & Decor Services',
  'Maintenance Services',
  'Building Material Services',
  'Smart Home Services',
  'Engineering Offices',
  'Public Enterprise Services',
  'Contracting Services',
  'Fire Protection Services',
  'Natural Gas Services',
  'Moving Services',
  'Cleaning Services',
  'Marketing Services',
  'Insurance Services',
  'Business & Investment'
];

const IMAGE_SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const VIDEO_SUPPORTED_FORMATS = ['video/mp4'];

const validationSchema = Yup.object({
  action: objectValidator('Please select an action', true),
  serviceType: objectValidator('Please select a serviceType', true),
  description: stringValidator('Please enter a description', true),
  uploadVideo: fileValidator(VIDEO_SUPPORTED_FORMATS),
  uploadPhoto: fileValidator(IMAGE_SUPPORTED_FORMATS)
});

function Posts() {
  const theme = useTheme();

  const [fileUploads, setFileUploads] = React.useState([
    { id: 1, label: 'Upload Photo', placeholder: 'Upload Company Photo', helperText: 'Please Upload Company Photo' }
  ]);

  const handleAddFileUpload = () => {
    const newId = fileUploads.length + 1;
    setFileUploads([
      ...fileUploads,
      { id: newId, label: 'Upload File', placeholder: 'Upload Company File', helperText: 'Please Upload Company File' }
    ]);
  };

  const handleRemoveFileUpload = (id) => {
    const updatedFileUploads = fileUploads.filter((fileUpload) => fileUpload.id !== id);
    setFileUploads(updatedFileUploads);
  };

  const validateFileType = (file, acceptedTypes) => {
    const fileType = file.type;
    const allowedTypes = acceptedTypes.join(',');
    return allowedTypes.includes(fileType);
  };

  const handleFileUpload = (id, file) => {
    if (id === 1) {
      const acceptedTypes = ['image/jpeg', 'image/png'];
      if (!validateFileType(file, acceptedTypes)) {
        console.log('Please upload only JPEG or PNG files.');
        return;
      }

      console.log('Processing photo upload:', file);
    } else {
      const acceptedTypes = ['video/mp4'];
      if (!validateFileType(file, acceptedTypes)) {
        console.log('Please upload only MP4 files.');
        return;
      }

      console.log('Processing video upload:', file);
    }
  };
  const clearFields = () => {
  };

  const submitForm = () => {
    const formData = new FormData();

    // dispatch(createUserRole(formData));
  };
  return (
    <Page title="User Details">
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={4}>
          <MainCard title="Add Post">
            <Grid container spacing={2} alignItems="center">
              <Formik
                validateOnChange
                initialValues={initialFormState}
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
                onReset={(_) => {}}
              >
                {(props) => (
                  <>
                    <AutoCompleteSelector
                      label="Select Action"
                      placeholder="Select Main Action"
                      options={mainServiceTypes}
                      style={{ xs: 12, lg: 12 }}
                      id="action"
                      name="action"
                    />
                    <AutoCompleteSelector
                      label="Select Service Type"
                      placeholder="Choose Property Type"
                      options={departementRole}
                      style={{ xs: 12, lg: 12 }}
                      id="serviceType"
                      name="serviceType"
                    />
                    <InputText
                      label="Description"
                      placeholder="Enter detailed description"
                      style={{ xs: 12, lg: 12 }}
                      type="number"
                      helperText="Please enter detailed description"
                      id="description"
                      name="description"
                      multiline={true}
                      rows={7}
                      description
                    />
                    <FileUpload
                      label="Upload Video"
                      placeholder="Upload Company Video"
                      helperText="Please Upload Company Video"
                      style={{ xs: 12, lg: 12 }}
                      onChange={(e) => handleFileUpload(0, e.target.files[0])}
                      type="file"
                      accept="video/mp4"
                      setFieldValue={props.setFieldValue}
                      id="uploadVideo"
                      name="uploadVideo"
                    />
                    {fileUploads.map((fileUpload) => (
                      <React.Fragment key={fileUpload.id}>
                        <FileUpload
                          label={fileUpload.label}
                          type="file"
                          placeholder={fileUpload.placeholder}
                          helperText={fileUpload.helperText}
                          style={{ xs: 8, lg: 6 }}
                          onChange={(e) => handleFileUpload(fileUpload.id, e.target.files[0])}
                          accept="image/jpeg, image/png"
                          setFieldValue={props.setFieldValue}
                          id={fileUpload.id}
                          name={fileUpload.label}
                        />
                        <Grid item xs={4} md={2}>
                          <Button size="large" variant="contained" onClick={() => handleRemoveFileUpload(fileUpload.id)}>
                            Remove
                          </Button>
                        </Grid>
                      </React.Fragment>
                    ))}
                    <FileUpload
                      label="Upload Photo"
                      placeholder="Upload Company Video"
                      helperText="Please Upload Company Photo"
                      style={{ xs: 12, lg: 6 }}
                      onChange={(e) => handleFileUpload(1, e.target.files[0])}
                      type="file"
                      accept="image/jpeg, image/png"
                      setFieldValue={props.setFieldValue}
                      id="uploadPhoto"
                      name="uploadPhoto"
                    />
                    <Grid item xs={4} md={2}>
                      <Button size="large" variant="contained" onClick={handleAddFileUpload}>
                        Add
                      </Button>
                    </Grid>
                    <SubmitButton submit={submitForm} clear={clearFields} />
                  </>
                )}
              </Formik>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
            Record Added Successfully!
          </Alert>
        </Grid>
      </Grid>
    </Page>
  );
}

Posts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Posts;
