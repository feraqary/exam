// material-ui
import { Grid } from '@mui/material';

// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// assets
import InputText from 'components/InputArea/TextInput';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { createCompanyType } from 'store/slices/company-section/action/company';
import { ToastContainer } from 'react-toastify';
import FileUpload from 'components/InputArea/FileUpload';
import { updateCompanyType } from 'store/slices/company-section/action/company';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { update } from 'lodash';

const roles = [
  { label: 'Broker Company', id: 1 },
  { label: 'Developer Company', id: 2 },
  { label: 'Service Company', id: 3 }
];

// ==============================|| Add Company Type form ||============================== //

function EditType({ compType, serviceName, desc, logoImg, imgUrl, id, setClose, open }) {
  const foundObject = roles.find((role) => role.id === compType);

  const [companyType, setCompanyType] = useState(foundObject.label);
  const [companyName, setCompanyName] = useState(serviceName);
  const [description, setDescription] = useState(desc);
  const [logoImage, setLogoImage] = useState(null);
  const [iconImage, setIconImage] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);
//   const [logoImage, setLogoImage] = useState(logoImg);
//   const [iconImage, setIconImage] = useState(imgUrl);
//   const [logoPreview, setLogoPreview] = useState(logoImg);
//   const [iconPreview, setIconPreview] = useState(imgUrl);

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
    formData.append('title', companyName);
    formData.append('description', description);
    formData.append('icon_url', iconImage);
    formData.append('image_url', logoImage);
    formData.append('main_company_type_id', companyType?.id);
    console.table({"title": companyName, "description": description, "icon_url": iconImage, "image": logoImage});
    const data = {
        company_id: 3, // Replace with the desired company ID
        formData: formData,
    };
    dispatch(updateCompanyType(data));
    clearFields();
  };

  return (
    <Page title="Add Company Types">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <IconButton aria-label="close" sx={{ position: 'absolute', right: 30, top: 30 }}>
          <CloseIcon />
        </IconButton>
        <Container title="Add Company Type" style={{ xs: 12 }}>
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

              //new change in the comment
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
              type="jpg,jpeg,png"
              helperText="Please upload your logo"
              image={{ alt: 'Logo Preview', width: '250px', height: '250px' }}
              setValue={setLogoImage}
              ref={logoRef}
              imagePreview={logoPreview}
              setImagePreview={setLogoPreview}
            />
            <FileUpload
              label="Upload Icon"
              style={{ xs: 12, lg: 8 }}
              placeholder="Upload Icon"
              type="jpg,jpeg,png"
              helperText="Please upload your icon"
              image={{ alt: 'Icon Preview', width: '250px', height: '250px' }}
              setValue={setIconImage}
              ref={iconRef}
              imagePreview={iconPreview}
              setImagePreview={setIconPreview}
            />
          </Grid>
        </Container>
        <SubmitButton clear={clearFields} submit={submitForm} />
      </Grid>
    </Page>
  );
}

EditType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default EditType;
