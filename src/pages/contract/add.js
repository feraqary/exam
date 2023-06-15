// material-ui
import { Grid, Alert } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// assets
import Container from 'components/Elements/Container';
import SubmitButton from 'components/Elements/SubmitButton';
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';

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
function AddContract() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [department, setDepartment] = useState([]);

  return (
    <Page title="Contract">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Contract Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <AutoCompleteSelector
              label="Company Categories"
              options={departementRole}
              value={department}
              setValue={setDepartment}
              id="company-category-selector"
              style={{ xs: 12, lg: 8 }}
              placeholder="Company Categories"
              helperText="Please select a category"
            />
            <AutoCompleteSelector
              label="Company Names"
              options={userRoleData}
              value={userRole}
              setValue={setUserRole}
              id="company-name-selector"
              helperText="Please select a company name"
              style={{ xs: 12, lg: 8 }}
              placeholder="Company Names"
            />

            <AutoCompleteSelector
              label="Order"
              options={userRoleData}
              value={userRole}
              setValue={setUserRole}
              id="company-order-selector"
              helperText="Please select an order"
              style={{ xs: 12, lg: 8 }}
              placeholder="Order"
            />

            {/* <FileUpload label = "File Upload"  */}
            <Grid item xs={12} lg={8}>
              <InputLabel required>File Upload From</InputLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="File from Web" />
                <FormControlLabel control={<Checkbox />} label="File from Local" />
              </FormGroup>
            </Grid>
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

AddContract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddContract;
