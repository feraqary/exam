// // material-ui
import { Button, Grid } from '@mui/material';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import FileUpload from 'components/InputArea/FileUpload';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { Formik } from 'formik';
import Layout from 'layout';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useUpdatePlansByPropertyIdMutation } from 'store/services/project/projectApi';

export default function Plans() {
  const router = useRouter();
  const { id } = router.query;
  const documents = useRef(null);

  const [updatePlan, updatePlanResult] = useUpdatePlansByPropertyIdMutation();
  return (
    <>
      <Page title="Add Project">
        <Formik
          initialValues={{
            planTitle: '',
            planDocument: []
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();

            formData.append('id', values.category_id.id);
            formData.append('title', values.sub_name);
            formData.append('sub_category', values.sub_name);

            createSubCategory(formData);

            // if(){
            //   setSuccess(!CreateSubCategoryResult);
            // }
            updatePlan(formData);
          }}
        >
          {(props) => (
            <MainCard title="Add Plans">
              <Grid container spacing={2} alignItems="center" justifyContent={'center'}>
                <Grid sx={12} lg={6} xs={{ border: '1px red solid' }}>
                  <AutoCompleteSelector
                    label="Title"
                    placeholder="Select Plan Title"
                    options={[
                      { label: 'Master Plan', value: 1 },
                      { label: 'Floor Plan', value: 2 },
                      { label: 'Tower Structure', value: 3 }
                    ]}
                    style={{ xs: 12, lg: 12 }}
                    helperText="Please Select Plan Title"
                    id="planTitle"
                    name="planTitle"
                  />
                  <FileUpload
                    id="planDocument"
                    name="planDocument"
                    required={true}
                    label="Upload Plan"
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
