// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useMemo, useState } from 'react';
// assets
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';

const roles = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company Type form ||============================== //
function CompanyType() {
  const [companyType, setCompanyType] = useState(null);
  const [licenseimg, setnewimg] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const handleInputChange = (event) => {
    setnewimg(URL.createObjectURL(event.target.files[0]));
  };

  const handleCompanyTypeChange = (newValue) => {
    setCompanyName(null);
    setCompanyType(newValue);
  };
  return (
    <Page title="Add Main Services">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Main Services" style={{ xs: 12 }}>
          <Grid container spacing={2} xs={12} lg={12} justifyContent="center">
            <AutoCompleteSelector
              label="Company Type"
              value={companyType}
              setValue={setCompanyType}
              options={roles}
              placeholder="Company Types"
              helperText="Please Select Company Type"
              id="companyType-selector"
              style={{ xs: 12, lg: 7 }}
            />

            <InputText
              label="Service Type Name"
              type="text"
              placeholder="Service Type Name"
              style={{ xs: 12, lg: 7 }}
              helperText="Please enter the service name"
            />

            <InputText
              label="Description"
              type="text"
              placeholder="Service Description"
              style={{ xs: 12, lg: 7 }}
              helperText="Please enter the service description"
              multiline
              rows={5}
              description
            />
            <FileUpload
              label="Upload Logo"
              placeholder="Upload Logo"
              style={{ xs: 12, lg: 7 }}
              helperText="Please upload service logo"
              image={{ alt: 'Service Logo', width: '250px', height: '250px' }}
              type="file"
            />
          </Grid>
        </Container>
        <SubmitButton />
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
