// add_promotions.js

import React, { useState } from 'react';

import { Grid, Button } from '@mui/material';

import Page from 'components/ui-component/Page';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import FileUpload from 'components/InputArea/FileUpload';
import { Formik } from 'formik';
import SubmitButton from 'components/Elements/SubmitButton';
import Router, { useRouter } from 'next/router';
function AddGallery() {
  const router = useRouter();
  console.log(router.query);

  return (
    <Page title="Add Gallery">
      <Grid container spacing={2} alignItems="center" justifyContent={'center'} sx={{ mt: 3 }}>
        <Formik
          initialValues={{
            galleryType: '',
            planDocument: '',
            mediaType: ''
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
          }}
        >
          {(props) => (
            <Grid sx={12} lg={6} xs={{ border: '1px red solid' }}>
              <AutoCompleteSelector
                label="Gallery Type"
                placeholder="Select Gallery Type"
                options={['Master Plan', 'Main Image', 'Exterior', 'Interior', 'Video', 'Virtual Tour', 'Cover Image']}
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
                id="planDocument"
                name="planDocument"
                required={true}
                label="Images"
                style={{ xs: 12, lg: 12 }}
                placeholder="Upload Plan"
                setFieldValue={props.setFieldValue}
                helperText="Please upload the plan document"
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
