// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, Divider, CardActions } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo, useEffect } from 'react';
import { UploadFile } from '@mui/icons-material';

// assets
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import TextEditor from '../../components/widget/Data/managment/text_editor';

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
const fetchType = ['Image', 'Video'];

// ==============================|| Add Company form ||============================== //
function ManageExchangeContents() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [type, setType] = useState('Image');
  const [vatimg, changevat] = useState(null);

  const handleTypeDatahange = (newValue) => {
    setType(newValue);
  };
  const handleUserRoleChange = (newValue) => {
    setUserRole(newValue);
  };
  const handleInputChange = (event) => {
    changevat(URL.createObjectURL(event.target.files[0]));
  };
  useEffect(() => {
    setUserRole(userRoleData);
    setTypeData(fetchType);
  }, []);

  return (
    <Page title="Add Content">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Content Details">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} lg={8}>
                <InputLabel required>Title</InputLabel>
                <TextField fullWidth placeholder="Title " />
              </Grid>
              <Grid item xs={12} lg={8}>
                <InputLabel required>Description</InputLabel>
                <TextEditor />
              </Grid>

              <Grid item xs={12} lg={8}>
                <InputLabel required>Type</InputLabel>
                <AutocompleteForms setCompanyFun={handleTypeDatahange} data={typeData} />
                <FormHelperText>{}</FormHelperText>
              </Grid>
              {type === 'Image' && (
                <Grid item xs={12} lg={8}>
                  <InputLabel required>Upload VAT</InputLabel>
                  <TextField
                    type="file"
                    fullWidth
                    onChange={handleInputChange}
                    placeholder="Please enter your License Expiry Date"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <UploadFile />
                        </InputAdornment>
                      )
                    }}
                  />
                  <FormHelperText>Upload VAT</FormHelperText>
                  <Grid item xs={3} lg={12} alignContent="right">
                    <img src={vatimg} alt="VAT Preview" width="250px" height="250px" />
                  </Grid>
                </Grid>
              )}
              {type === 'Video' && (
                <Grid item xs={12} lg={8}>
                  <InputLabel required>Video Url</InputLabel>
                  <TextField fullWidth placeholder="Video " />
                </Grid>
              )}
            </Grid>
            <Divider />
            <CardActions>
              <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Clear</Button>
                </Grid>
              </Grid>
            </CardActions>
          </MainCard>
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

ManageExchangeContents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageExchangeContents;
