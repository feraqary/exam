// material-ui
import { Grid } from '@mui/material';

// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { createService, getAllMainServices } from 'store/slices/company-section/action/company';
import { setMainService } from 'store/slices/company-section/slice/company';
import { ToastContainer } from 'react-toastify';
import { updateServices } from 'store/slices/services/action/services';
const roles = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company Type form ||============================== //

function Service() {
  const dispatch = useDispatch();
  const [service, setService] = useState(null);
  const [description, setDescription] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [iconImage, setIconImage] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);

  const logoRef = useRef(null);
  const iconRef = useRef(null);

  const { mainServices, loading, error, mainService } = useSelector((state) => state.companies);

  let dataToUpdate = {
    title: null,
    description: [],
    icon_url: [],
    image_url: [],
    loading: false,
    error: null
  };

  
  useEffect(() => {
    dispatch(getAllMainServices());
    dispatch(updateServices(dataToUpdate));
    console.log(error);
  }, [dispatch]);

  const handleMainServiceChange = (newValue) => {
    dispatch(setMainService(newValue));
  };

  const clearFields = () => {
    dispatch(setMainService(null));
    setService('');
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
    formData.append('title', service);
    formData.append('main_services_id', mainService?.id);
    formData.append('description', description);
    formData.append('icon_url', logoImage);
    formData.append('image_url', iconImage);
    dispatch(createService(formData));
    if (!error) {
      clearFields();
    }
  };

  return (
    <Page title="Add Sub Services">
      <Grid container spacing={gridSpacing}>
        <ToastContainer />
        <Container title="Add Sub Services" style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <AutoCompleteSelector
              style={{ xs: 12, lg: 8 }}
              label="Main Services"
              placeholder="Main Services"
              options={mainServices.map((service) => {
                return { label: service.title, ...service };
              })}
              id="compnType"
              value={mainService}
              helperText="Please select a main service"
              func={handleMainServiceChange}
            />

            <InputText
              label="Service Name"
              placeholder="Enter Service Name"
              helperText="Please enter service name"
              style={{ xs: 12, lg: 8 }}
              type="text"
              value={service}
              setValue={setService}
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
              ref={logoRef}
              imagePreview={logoPreview}
              setImagePreview={setLogoPreview}
              setValue={setLogoImage}
            />
            <FileUpload
              label="Upload Icon"
              style={{ xs: 12, lg: 8 }}
              placeholder="Upload Icon"
              type="file"
              helperText="Please upload your Icon"
              image={{ alt: 'Icon Preview', width: '250px', height: '250px' }}
              ref={iconRef}
              imagePreview={iconPreview}
              setImagePreview={setIconPreview}
              setValue={setIconImage}
            />
          </Grid>
        </Container>
        <SubmitButton submit={submitForm} clear={clearFields} />
      </Grid>
    </Page>
  );
}

Service.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Service;
