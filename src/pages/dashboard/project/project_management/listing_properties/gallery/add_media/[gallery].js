// // material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';
import AutoCompleteSelector, {
  MultipleAutoCompleteSelector,
  AutoCompleteSelectorAPI,
  NormalAutoCompleteSelector
} from 'components/InputArea/AutoCompleteSelector';
import Page from 'components/ui-component/Page';
import Layout from 'layout';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import FileUpload from 'components/InputArea/FileUpload';
import React, { useRef } from 'react';

export default function Plans() {
  const router = useRouter();
  const { id } = router.query;
  const documents = useRef(null);
  return (
    <>
      <Page title="Add Project">
        <Formik
          initialValues={{
            planType: '',
            planDocument: ''
          }}
        >
          {(props) => (
            <MainCard title="Add More Images">
              <Grid container spacing={2} alignItems="center" justifyContent={'center'}>
                <Grid sx={12} lg={6} xs={{ border: '1px red solid' }}>
                  <AutoCompleteSelector
                    label="Gallery Type"
                    placeholder="Select Plan Type"
                    options={[
                      { label: 'Master Plan', value: 1 },
                      { label: 'Main Image', value: 2 },
                      { label: 'Exterior', value: 3 },
                      { label: 'Interior', value: 3 },
                      { label: 'Video', value: 3 },
                      { label: 'Virtual Tour', value: 3 },
                      { label: 'Cover Image', value: 3 }
                    ]}
                    style={{ xs: 12, lg: 12 }}
                    helperText="Please Select Plan Type"
                    id="planType"
                    name="planType"
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
                    ref={documents}
                  />
                  <Grid item lg={12} textAlign={'center'}>
                    <Button variant="contained">Submit</Button>
                  </Grid>
                </Grid>
              </Grid>
            </MainCard>
          )}
        </Formik>
      </Page>
    </>
  );
}

Plans.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
