// material-ui
import { Grid } from '@mui/material';

// project imports
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useRef, useState } from 'react';
import { createMainService, getAllCompanyTypes } from '../../store/slices/company-section/action/company';
import 'react-toastify/dist/ReactToastify.css';
import { setCompanyType, setMainService } from 'store/slices/company-section/slice/company';

// assets
import InputText from 'components/widgets/TextInput';
import FileUpload from 'components/widgets/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const roles = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company Type form ||============================== //
function MainService() {
  const [logoImage, setLogoImage] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [iconImage, setIconImage] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);
  const [mainServiceName, setMainServiceName] = useState(null);
  const [description, setDescription] = useState(null);

  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const dispatch = useDispatch();
  const { companyTypes, loading, error, companyType } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getAllCompanyTypes());
  }, [dispatch]);

  const handleCompanyTypeChange = (newValue) => {
    dispatch(setCompanyType(newValue));
  };

  const clearFields = () => {
    dispatch(setCompanyType(null));
    setMainServiceName('');
    setDescription('');
    setLogoImage(null);
    setIconImage(null);
    setLogoPreview(null);
    setIconPreview(null);

    if (logoRef.current) {
      logoRef.current.value = null;
    }
    if (iconRef.current) {
      iconRef.current.value = null;
    }
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append('title', mainServiceName);
    formData.append('image_url', logoImage);
    formData.append('icon_url', iconImage);
    formData.append('company_types_id', companyType?.id);
    formData.append('description', description);
    dispatch(createMainService(formData));
    clearFields();
  };

  return (
    <Page title="Add Main Services">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container title="Add Main Services" style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <AutoCompleteSelector
              style={{ xs: 12, lg: 8 }}
              label="Company Type"
              placeholder="Company Type"
              options={companyTypes?.map((company) => {
                return { label: company.title, ...company };
              })}
              id="compnType"
              value={companyType}
              func={handleCompanyTypeChange}
              loading={loading}
            />

            <InputText
              label="Main Service Name"
              placeholder="Enter Main Service Name"
              helperText="Please enter main service name"
              style={{ xs: 12, lg: 8 }}
              type="text"
              value={mainServiceName}
              setValue={setMainServiceName}
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
              type="png,jpeg,jpg"
              helperText="Please upload your logo"
              image={{ alt: 'Logo Preview', width: '250px', height: '250px' }}
              ref={logoRef}
              imagePreview={logoPreview}
              setImagePreview={setLogoPreview}
              setValue={setLogoImage}
            />
            <FileUpload
              label="Upload Icon"
              style={{ xs: 12, lg: 8 }}
              placeholder="Upload Icon"
              type="png,jpeg,jpg"
              helperText="Please upload your Icon"
              image={{ alt: 'Icon Preview', width: '250px', height: '250px' }}
              ref={iconRef}
              imagePreview={iconPreview}
              setImagePreview={setIconPreview}
              setValue={setIconImage}
            />
          </Grid>
        </Container>
        <SubmitButton clear={clearFields} submit={submitForm} />
      </Grid>
    </Page>
  );
}

MainService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default MainService;
