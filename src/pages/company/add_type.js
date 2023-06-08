// material-ui
import { Box, Grid } from '@mui/material';

// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useMemo, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { createCompanyType } from 'store/slices/company-section/action/company';
import Lottie from 'react-lottie';
import animationData from '../../components/assets/JSON/98194-loading.JSON';

const roles = [
  { label: 'Broker Company', id: 1 },
  { label: 'Developer Company', id: 2 },
  { label: 'Service Company', id: 3 }
];

// ==============================|| Add Company Type form ||============================== //

const LoaderComponent = () => {
  return (
    <Grid
      item
      sx={{
        height: '100vh',
        width: '100vw',
        background: 'white',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '2000',
        backdropFilter: 'blur(20px)',
        opacity: '0.5'
      }}
    >
      <Lottie options={{ animationData: animationData }} height={200} width={200} />
    </Grid>
  );
};

function CompanyType() {
  const [companyType, setCompanyType] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [description, setDescription] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [iconImage, setIconImage] = useState(null);

  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.companies);

  const handleCompanyTypeChange = (newValue) => {
    setCompanyType(newValue);
  };

  const clearFields = () => {
    setCompanyType(null);
    setCompanyName('');
    setDescription('');
    setLogoImage(null);
    setIconImage(null);

    if (logoRef.current) {
      logoRef.current.value = null;
    }
    if (iconRef.current) {
      iconRef.current.value = null;
    }
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append('main_company_type_id', companyType.id);
    formData.append('title', companyName);
    formData.append('image_url', logoImage);
    formData.append('icon_url', iconImage);
    formData.append('description', description);
    dispatch(createCompanyType(formData));
  };

  // if (loading) return <Lottie options={{ animationData: animationData }} height={200} width={200} />;

  return (
    <Page title="Add Company Types">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Company Type" style={{ xs: 12 }}>
          {loading && <LoaderComponent />}

          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <AutoCompleteSelector
              style={{ xs: 12, lg: 8 }}
              label="Company Type"
              placeholder="Company Type"
              options={roles}
              id="compnType"
              value={companyType}
              setValue={setCompanyType}
              func={handleCompanyTypeChange}
              loading={false}
              error={null}
            />

            <InputText
              label="Service Name"
              placeholder="Enter Service Name"
              helperText="Please enter service name"
              style={{ xs: 12, lg: 8 }}
              type="text"
              value={companyName}
              setValue={setCompanyName}
            />
            <InputText
              label="Description"
              placeholder="Enter Description"
              style={{ xs: 12, lg: 8 }}
              type="text"
              multiline
              rows={5}
              id="outlined-multiline-flexible"
              value={description}
              setValue={setDescription}
            />

            <FileUpload
              label="Upload Logo"
              style={{ xs: 12, lg: 8 }}
              placeholder="Upload Logo"
              type="file"
              helperText="Please upload your logo"
              image={{ alt: 'Logo Preview', width: '250px', height: '250px' }}
              setValue={setLogoImage}
              ref={logoRef}
            />
            <FileUpload
              label="Upload Icon"
              style={{ xs: 12, lg: 8 }}
              placeholder="Upload Icon"
              type="file"
              helperText="Please upload your icon"
              image={{ alt: 'Icon Preview', width: '250px', height: '250px' }}
              setValue={setIconImage}
              ref={iconRef}
            />
          </Grid>
        </Container>
        <SubmitButton clear={clearFields} submit={submitForm} />
      </Grid>
    </Page>
  );
}

CompanyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyType;
