// add_promotions.js

import React from 'react';

import { Grid } from '@mui/material';

import Page from 'components/ui-component/Page';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import FileUpload from 'components/InputArea/FileUpload';
import { Formik } from 'formik';
import SubmitButton from 'components/Elements/SubmitButton';
import { useRouter } from 'next/router';
import { useCreateProjectPropertyMediaMutation } from 'store/services/project/projectApi';

function AddGallery({ closeModal }) {
  const router = useRouter();
  const property_id = router.query.property_id;
  const [createGalleryMedia, result] = useCreateProjectPropertyMediaMutation();

  return (
    <Page title="Add Gallery">
      <Grid container spacing={2} alignItems="center" justifyContent={'center'} sx={{ mt: 3 }}>
        <Formik
          initialValues={{
            galleryType: '',
            mediaType: null,
            mediaFiles: ''
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            formData.append('id', property_id);
            formData.append('main_media_section', values.galleryType);
            formData.append('file_no', values.mediaType?.value);
            for (const file of values.mediaFiles) {
              formData.append('files', file);
            }
            createGalleryMedia(formData);
            resetForm();
            closeModal(false);
          }}
        >
          {(props) => (
            <Grid sx={12} lg={6} xs={{ border: '1px red solid' }}>
              <AutoCompleteSelector
                label="Gallery Type"
                placeholder="Select Gallery Type"
                options={['Main Image', 'Exterior', 'Interior', 'Video', 'Virtual Tour', 'Cover Image']}
                style={{ xs: 12, lg: 12 }}
                helperText="Please Select Gallery Type"
                id="galleryType"
                name="galleryType"
                required={true}
              />
              <AutoCompleteSelector
                label="Media Type"
                placeholder="Select Media Type"
                options={[
                  { label: 'Image', value: 1 },
                  { label: 'Image360', value: 2 },
                  { label: 'Video', value: 3 },
                  { label: 'Panaroma', value: 4 }
                ]}
                style={{ xs: 12, lg: 12 }}
                helperText="Please Select Media Type"
                id="mediaType"
                name="mediaType"
                required={true}
              />
              <FileUpload
                id="mediaFiles"
                name="mediaFiles"
                required={true}
                label="Images"
                style={{ xs: 12, lg: 12 }}
                placeholder="Upload Media"
                setFieldValue={props.setFieldValue}
                helperText="Please upload the Media as Above Type"
                multiple={true}
                // ref={documents}
              />
              <Grid item lg={12} textAlign={'center'}>
                <SubmitButton />
              </Grid>
            </Grid>
          )}
        </Formik>
      </Grid>
    </Page>
  );
}

export default AddGallery;
