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
import { createService, getAllMainServices, updateSubService } from 'store/slices/company-section/action/company';
import { ToastContainer } from 'react-toastify';
const roles = ['Broker Company', 'Developer Company', 'Service Company'];
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// ==============================|| Add Company Type form ||============================== //

function Edit_Sub_Service({ desc, id, title, close }) {
  const dispatch = useDispatch();

  const { mainServices, loading, error, mainService, services_id } = useSelector((state) => state.companies);

  const [service, setService] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [des, setDesc] = useState(null);

  useEffect(() => {
    dispatch(getAllMainServices());
  }, []);

  const submitSubForm = (values) => {
    const formData = new FormData();
    formData.append('title', values.serviceTitle.title);
    formData.append('description', values.desc);
    formData.append('icon_url', values.iconUrl);
    formData.append('image_url', values.imgUrl);
    formData.append('main_services_id', 1);

    console.log(services_id);
    dispatch(updateSubService({ id, formData }));
    close(false);
  };

  const img_Ref = useRef(null);
  const icon_Ref = useRef(null);

  const FILE_SIZE = 1;
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
  return (
    <Formik
      initialValues={{
        serviceTitle: title,
        service_name: null,
        desc: desc,
        iconUrl: null,
        imgUrl: null
      }}
      validationSchema={Yup.object({
        serviceTitle: Yup.object().typeError().required('Mandatory selection'),
        service_name: Yup.string().trim().required('Please provide a valid service name'),
        desc: Yup.string().required('Please provide a description'),
        iconUrl: Yup.mixed()
          .required('Please provide a logo image')
          .test(
            'FILE_SIZE',
            'Uploaded file is too big. File size must not exceed 1MB',
            (value) => value && value.size / (1024 * 1024) <= FILE_SIZE
          )
          .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => value && SUPPORTED_FORMATS.includes(value.type)),
        imgUrl: Yup.mixed()
          .required('Please provide an logo image')
          .test(
            'FILE_SIZE',
            'Uploaded file is too big. File size must not exceed 1MB',
            (value) => value && value.size / (1024 * 1024) <= FILE_SIZE
          )
          .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => value && SUPPORTED_FORMATS.includes(value.type))
      })}
      onSubmit={(values) => submitSubForm(values)}
    >
      {(props) => (
        <Page>
          <Grid container spacing={gridSpacing}>
            <ToastContainer />
            <Container style={{ xs: 12 }}>
              <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
                <AutoCompleteSelector
                  label="Services"
                  style={{ xs: 12, lg: 8 }}
                  placeholder="Services"
                  options={mainServices.map((service) => {
                    return { label: service.title, ...service };
                  })}
                  helperText="Please select a service"
                  id="serviceTitle"
                  name="serviceTitle"
                  setFieldValue={props.setFieldValue}
                  required={true}
                />

                <InputText
                  style={{ xs: 12, lg: 7 }}
                  label="Service Name"
                  value={serviceName}
                  setValue={setServiceName}
                  helperText="Please enter the service name"
                  placeholder="Service Name"
                  name="service_name"
                  id="service_name"
                  type="text"
                  // {...Field}
                  required={true}
                />
                <InputText
                  label="Description"
                  placeholder="Service Description"
                  helperText="Please enter the service description"
                  setValue={setDesc}
                  value={desc}
                  id="desc"
                  name="desc"
                  type="text"
                  style={{ xs: 12, lg: 7 }}
                  multiline
                  rows={5}
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
                  ref={icon_Ref}
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
                  ref={img_Ref}
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

Edit_Sub_Service.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Edit_Sub_Service;
