/**
 * Companies documents mangement
 *
 */

import * as React from 'react';
import { useState } from 'react';

import { Grid } from '@mui/material';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import MainCard from 'components/ui-component/cards/MainCard';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import { Formik } from 'formik';
import { objectValidator, stringValidator, fileValidator } from 'utils/formik-validations';
import * as Yup from 'yup';

// Dummy data
const catOptions = [
  { label: 'Accountant', id: 1 },
  { label: 'Fax document', id: 2 },
  { label: 'General Papers', id: 3 }
];

const titleOptions = [
  { label: 'InVoice', id: 1 },
  { label: 'InCome', id: 2 }
];

const FILE_SUPPORTED_FORMATS = ['document/pdf'];

const validationSchema = Yup.object({
  category: objectValidator('Please select an action', true),
  title: stringValidator('Please select a serviceType', true),
  companyLicense: fileValidator(FILE_SUPPORTED_FORMATS)
});

function ManageDocuments() {
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState([]);

  return (
    <Page title="ManageDocuments">
      <Grid container>
        <Grid item xs={12}>
          <MainCard title="Manage Documents">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Formik
                validateOnChange
                initialValues={{
                  category: '',
                  title: '',
                  companyLicense: ''
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm, validateForm }) => {
                  await validateForm(values);
                  submitForm(values);
                  setSubmitting(false);
                  if (!companyError) {
                    resetForm();
                  }
                }}
                validator={() => ({})}
                onReset={(_) => {}}
              >
                {(props) => (
                  <>
                    <AutoCompleteSelector
                      label="Category"
                      placeholder="Select Category"
                      style={{ xs: 12 }}
                      value={category}
                      setValue={setCategory}
                      options={catOptions}
                      id="category"
                      name="category"
                    />
                    <AutoCompleteSelector
                      label="Title"
                      placeholder="Select Title"
                      style={{ xs: 12 }}
                      value={title}
                      setValue={setTitle}
                      options={titleOptions}
                      id="title"
                      name="title"
                    />
                    <FileUpload
                      label="Docunments"
                      type="png,jpeg,jpg"
                      placeholder="Upload Company License"
                      style={{ xs: 12 }}
                      id="companyLicense"
                      name="companyLicense"
                    />
                    <SubmitButton />
                  </>
                )}
              </Formik>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

ManageDocuments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageDocuments;
