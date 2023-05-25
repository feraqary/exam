// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, Divider, CardActions } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo, useEffect } from 'react';

// assets
import ManAuction from 'components/widget/Data/manage-auction-contents';

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
function ManageAuctionContents() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [departement, setDeparment] = useState([]);

  const handleDeparmentChange = (newValue) => {
    setDeparment(newValue);
  };
  const handleUserRoleChange = (newValue) => {
    setUserRole(newValue);
  };

  useEffect(() => {
    setUserRole(userRoleData);
    setDeparment(departementRole);
  }, []);

  return (
    <Page title="Add Page">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManAuction />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageAuctionContents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageAuctionContents;
