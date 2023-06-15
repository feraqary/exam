// material-ui
import { Grid, Alert } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';

// assets
import TextEditor from '../../components/Data/managment/text_editor';
import Container from 'components/Elements/Container';
import SubmitButton from 'components/Elements/SubmitButton';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';

// ==============================|| FIELDS ||============================== //

const userRoleData = [
  'Admin',
  'Legal Manager',
  'Marketing Manager',
  'Finance Manager',
  'HR Manager',
  'Sales Representative',
  'Sales Manager'
];
const departementRole = ['Sales Manager', 'HR Manager', 'Marketing Manager', 'Finance Manager', 'Legal Manager', 'Sales Representative'];

// ==============================|| Add Company form ||============================== //
function AddBlog() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [departement, setDeparment] = useState([]);

  return (
    <Page title="Add Blog">
      <Grid container spacing={gridSpacing}>
        <Container style={{ xs: 12 }} title="Add Blog Details">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <AutoCompleteSelector
              label="Companies"
              placeholder="Select Company"
              helperText="Please select a company"
              style={{ xs: 12, lg: 8 }}
              id="company-selector"
              value={departement}
              setValue={setDeparment}
              options={departementRole}
            />
            <AutoCompleteSelector
              label="Categoies"
              placeholder="Select Category"
              helperText="Please select a category"
              style={{ xs: 12, lg: 8 }}
              id="category-selector"
              value={userRole}
              setValue={setUserRole}
              options={userRoleData}
            />
            <InputText
              label="Bolg Title"
              placeholder="Blog Title"
              helperText="Please enter a blog title"
              style={{ xs: 12, lg: 8 }}
              type="text"
            />

            <Grid item xs={12} lg={8}>
              <InputLabel required>Description</InputLabel>
              <TextEditor />
            </Grid>

            <FileUpload
              label="Upload Image"
              placeholder="Upload Image"
              helperText="Please upload an image"
              type="file"
              style={{ xs: 12, lg: 8 }}
              image={{ alt: 'Blog Image Preview', width: '250px', height: '250px' }}
            />
          </Grid>
        </Container>
        <SubmitButton />
        <Grid item xs={12} lg={5} spacing={gridSpacing}>
          <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
            Record Added Successfully!
          </Alert>
        </Grid>
      </Grid>
    </Page>
  );
}

AddBlog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddBlog;
