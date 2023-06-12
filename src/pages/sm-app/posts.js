// material-ui imports
import { Grid, Button, Typography, Alert } from '@mui/material';
import * as React from 'react';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| Posts ||============================== //

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

  return (
    <Page title="User Details">
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={4}>
          <MainCard title="Add Post">
            <Grid container spacing={2} alignItems="center">
                <AutoCompleteSelector
                  label="Select Action"
                  id="selector"
                  placeholder="Select Main Action"
                  options={mainServiceTypes}
                  style={{ xs: 12, lg: 12 }}
                />
                <AutoCompleteSelector
                  label="Select Service Type"
                  id="selector"
                  placeholder="Choose Property Type"
                  options={departementRole}
                  style={{ xs: 12, lg: 12 }}
                />
              <InputText
                label="Description"
                placeholder="Enter detailed description"
                style={{ xs: 12, lg: 12 }}
                type="number"
                helperText="Please enter detailed description"
                multiline={true}
                rows={7}
              />
              <FileUpload
                label="Upload Video"
                type="file"
                placeholder="Upload Company Video"
                helperText="Please Upload Company Video"
                style={{ xs: 12, lg: 12 }}
              />
              {fileUploads.map((fileUpload) => (
                <React.Fragment key={fileUpload.id}>
                  <FileUpload
                    label={fileUpload.label}
                    type="file"
                    placeholder={fileUpload.placeholder}
                    helperText={fileUpload.helperText}
                    style={{ xs: 8, lg: 6 }}
                  />
                  <Grid item xs={4} md={2}>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={() => handleRemoveFileUpload(fileUpload.id)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </React.Fragment>
              ))}
              <FileUpload
                label="Upload Photo"
                type="file"
                placeholder="Upload Company Video"
                helperText="Please Upload Company Photo"
                style={{ xs: 12, lg: 6 }}
              />
              <Grid item xs={4} md={2}>
                <Button size="large" variant="contained" onClick={handleAddFileUpload}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </MainCard>
          <SubmitButton />
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
