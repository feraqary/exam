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
import InputText from 'components/widgets/TextInput';
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';

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

// ==============================|| Add Company form ||============================== //
function AddPages() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);

  return (
    <Page title="Add Page">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Page Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <InputText
              label="Page Title"
              placeholder="Page Title"
              helperText="Please enter the page title"
              style={{ xs: 12, lg: 8 }}
              type="text"
            />

            <Grid item xs={12} lg={8}>
              <InputLabel required>Description</InputLabel>
              <TextEditor />
            </Grid>

            <AutoCompleteSelector
              label="Type"
              placeholder="Type"
              options={userRoleData}
              value={userRole}
              setValue={setUserRole}
              id="type-selector"
              style={{ xs: 12, lg: 8 }}
              helperText="Please select the type of the page"
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

AddPages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddPages;
