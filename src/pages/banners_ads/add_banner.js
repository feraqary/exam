// material-ui
import { FormControl, Select, MenuItem, Grid, InputAdornment, TextField, FormHelperText, Button, Alert, CardActions } from '@mui/material';
// import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import DateTime from 'pages/forms/components/date-time';
// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';
import { UploadFile } from '@mui/icons-material';
// import CompanyServices from 'components/widget/Data/company_types_data/fetch_company_types';
import Container from 'components/Elements/Container';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import Selector from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputDateTime from 'components/InputArea/InputDate';
import SubmitButton from 'components/Elements/SubmitButton';
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

// ==============================|| Add Company form ||============================== //
function AddBanner() {
  const theme = useTheme();
  const [value, setValue] = useState();
  const handleInputChange = (event) => {
    setnewimg(URL.createObjectURL(event.target.files[0]));
  };

  //   const handleCompanyTypeChange = (newValue) => {
  //     setCompanyType(newValue);
  //   };

  return (
    <Page title="Add Company">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Banner Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <InputText
              label="Title"
              placeholder="Banner Title"
              helperText="Pleas enter the banner title"
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setValue}
            />

            <InputText
              label="Sub Title"
              placeholder="Banner Sub Title"
              helperText="Pleas enter the banner sub title"
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setValue}
            />

            <InputText
              label="Type"
              placeholder="Banner Type"
              helperText="Pleas enter the banner type"
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setValue}
            />

            <InputText
              label="Target"
              placeholder="Banner Target"
              helperText="Pleas enter the banner target"
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setValue}
            />

            <FileUpload
              label="Upload"
              style={{ xs: 12, lg: 6 }}
              type="file"
              placeholder="upload"
              helperText="HOME BANNER SHOULD BE 1363 X 633 Pixels"
            />

            <AutoCompleteSelector
              label="Banner Image"
              style={{ xs: 12, lg: 6 }}
              options={section}
              id="banner-image-selector"
              placeholder="select image"
            />

            <InputDateTime label="End Date Time with" style={{ xs: 12, lg: 6 }} />
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

AddBanner.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddBanner;
