// material-ui
import { Grid, Button, Typography, Alert } from '@mui/material';
import * as React from 'react';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import PostCard from './components/postCard';
import { gridSpacing } from 'store/constant';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import MainCard from 'components/ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';

// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
// import MultipleFileUpload from 'components/InputArea/MultipleFileUpload';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
// import SubmitButton from 'components/Elements/SubmitButton';
import SubmitButton from 'components/Elements/SubmitButton';
import MultipleFileUpload from 'components/InputArea/MultipleFileUpload';

// import MultipleFileUpload from 'components/InputArea/MultipleFileUploader';
// import { Typography } from '@mui/joy';

// ==============================|| Posts ||============================== //

const userRoleData = [
  'Admin',
  'Legal Manager',
  'Marketing Manager',
  'Finance Manager',
  'HR Manager',
  'Sales Representative',
  'Sales Manager'
];
const mainServiceTypes = ['Sell', 'Rent', 'Propety Hub', 'Project', 'Exchange', 'Career'];
const departementRole = [
  'Brokerage Services',
  'Management Services',
  'Finance Services',
  'Evaluation Services',
  'Education',
  'Design & Decor Services',
  'Maintainance Services',
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
  'Business & investment'
];

function Posts() {
  const theme = useTheme();
  const Avatar1 = '/assets/images/users/avatar-1.png';
  const prod1 = '/assets/images/e-commerce/prod-5.png';
  const disc =
    'Are you in search of the perfect place to call home? Somewhere that resonates with your lifestyle, aspirations, and dreams? Look no further, as we delve into the exhilarating journey of finding your dream home.';
  const disc2 =
    'The first step towards finding your dream home is understanding what it truly means to you. Take the time to envision your ideal living space. Consider factors such as location, size, style, amenities, and the overall atmosphere you desire. This will serve as the compass guiding you throughout the process.';
  const [picture, setPicture] = React.useState('');
  const [video, setVideo] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [name, setName] = React.useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPicture('');
    setVideo('');
    setDescription('');
    setTitle('');
    setLocation('');
    setName('');
  };

  return (
    <Page title="User Details">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} spacing={4}>
          <MainCard title="Add Post">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <AutoCompleteSelector
                  label="Select Action"
                  id="selector"
                  placeholder="Select Main Action"
                  options={mainServiceTypes}
                  style={{ xs: 12, lg: 12 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AutoCompleteSelector
                  label="Select Service Type"
                  id="selector"
                  placeholder="Choose Property Type"
                  options={departementRole}
                  style={{ xs: 12, lg: 12 }}
                />
              </Grid>

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
                label="Upload Photo"
                type="file"
                placeholder="Upload Company Photo"
                helperText="Please Upload Company Photo"
                style={{ xs: 8, lg: 6 }}
              />

              <Grid item xs={4} md={2}>
                <Button size="large" variant="contained">
                  Add +
                </Button>
              </Grid>
              <FileUpload
                label="Upload Video"
                type="file"
                placeholder="Upload Company Video"
                helperText="Please Upload Company Video"
                style={{ xs: 12, lg: 6 }}
              />
            </Grid>
          </MainCard>
          <SubmitButton />
        </Grid>
        <Grid item xs={12} lg={5} spacing={gridSpacing}>
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
