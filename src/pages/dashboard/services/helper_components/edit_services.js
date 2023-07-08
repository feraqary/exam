// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useMemo, useState, useRef } from 'react';
// assets
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import { createServices } from 'store/slices/services/action/services';
import { updateMainService } from 'store/slices/company-section/action/company';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const roles = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company Type form ||============================== //
function Edit_service({ comp_id,  id, description,  service_name,  }) {
  const [compType, setCompType] = useState(null);
  const [desc, setDesc] = useState(null);
  const [serviceName, setServiceName] = useState(null);

  const dispatch = useDispatch();
  // useEffect(() => {
    // setCompType(roles[comp_type]);
    // setDesc(description);
    // setServiceName(service_name);
  //   setSerialNo(serial_no);
  //   seticonUrl(icon_url);
  //   setimgUrl(img_url);
  //   seticonPre(iconPre);
  //   setimgPre(imgPre);
  // }, []);


  const handleCompanyTypeChange = (newValue) => {
    setCompType(newValue);
  };

  const imgRef = useRef(null);
  const iconRef = useRef(null);

  const FILE_SIZE = 1;
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  const handleSubmit = (values) => {
    console.log('values :', values);
    const formData = new FormData();
    formData.append('title', values.serviceName);
    formData.append('description', values.desc);
    formData.append('icon_url', values.iconUrl);
    formData.append('image_url', values.imgUrl);
    formData.append('company_types_id', comp_id);
    dispatch(updateMainService({ id, formData }));
  };
  return (
    <Formik
      initialValues={{
        compType: roles[compType],
        serviceName: service_name,
        desc: description,
        iconUrl: null,
        imgUrl: null
      }}
      validationSchema={Yup.object({
        compType: Yup.string().required('Company Type is required'),
        serviceName: Yup.string().required('Please provide a valid service name'),
        desc: Yup.string().required('Description is required'),
        iconUrl: Yup.mixed()
          .required('Please provide a logo image')
          .test(
            'FILE_SIZE',
            'Uploaded file is too big. File size must not exceed 1MB',
            (value) => value && value.size / (1024 * 1024) <= FILE_SIZE
          )
          .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => value && SUPPORTED_FORMATS.includes(value.type)),
          imgUrl: Yup.mixed()
          .required('Please provide an image')
          .test(
            'FILE_SIZE',
            'Uploaded file is too big. File size must not exceed 1MB',
            (value) => value && value.size / (1024 * 1024) <= FILE_SIZE
          )
          .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => value && SUPPORTED_FORMATS.includes(value.type))
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(props) => (
        <Page>
          <Grid container spacing={gridSpacing}>
            <Container style={{ xs: 12 }}>
              <Grid container spacing={2} xs={12} lg={12} justifyContent="center">
                <AutoCompleteSelector
                  label="Company Type"
                  style={{ xs: 12, lg: 7 }}
                  placeholder="Company Types"
                  options={roles}
                  helperText="Please Select Company Type"
                  func={handleCompanyTypeChange}
                  id="compType"
                  name="compType"
                  setFieldValue={props.setFieldValue}
                  required={true}
                />

                <InputText
                  label="Service Type Name"
                  type="text"
                  placeholder="Service Type Name"
                  style={{ xs: 12, lg: 7 }}
                  helperText="Please enter the service name"
                  value={serviceName}
                  setValue={setServiceName}
                  name="serviceName"
                  id="serviceName"
                  {...Field}
                  required={true}
                />

                <InputText
                  label="Description"
                  type="text"
                  placeholder="Service Description"
                  style={{ xs: 12, lg: 7 }}
                  helperText="Please enter the service description"
                  multiline
                  rows={5}
                  value={desc}
                  setValue={setDesc}
                  id="desc"
                  name="desc"
                  required={true}
                />

                <FileUpload
                  id="iconUrl"
                  name="iconUrl"
                  required={true}
                  label="Upload Logo"
                  style={{ xs: 12, lg: 8 }}
                  placeholder="Upload Logo"
                  setFieldValue={props.setFieldValue}
                  helperText="Please upload your logo"
                  image={{ alt: 'Logo Preview', width: '250px', height: '250px' }}
                  ref={iconRef}
                />

                <FileUpload
                  id="imgUrl"
                  name="imgUrl"
                  required={true}
                  label="Upload Service Image"
                  style={{ xs: 12, lg: 8 }}
                  placeholder="Upload Service Image"
                  setFieldValue={props.setFieldValue}
                  helperText="Please upload service image"
                  image={{ alt: 'image Preview', width: '250px', height: '250px' }}
                  ref={imgRef}
                />
              </Grid>
            </Container>
            <SubmitButton />
          </Grid>
        </Page>
      )}
    </Formik>
  );
}

Edit_service.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Edit_service;
