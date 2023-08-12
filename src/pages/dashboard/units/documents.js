// add_promotions.js

import React, { useState } from 'react';
import { Grid, TextField, FormHelperText, Button } from '@mui/material';

import Page from 'components/ui-component/Page';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik, Field } from 'formik';
import Input from '@mui/material/Input';
import MainCard from 'components/ui-component/cards/MainCard';
import { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';

const uploadDocumentOptions = [
  { id: 0, label: 'Accountant' },
  { id: 1, label: 'Fax Documents' },
  { id: 2, label: 'General Papers' },
  { id: 3, label: 'Legal Papers' },
  { id: 4, label: 'Listing Documents' },
  { id: 5, label: 'Images' },
  { id: 6, label: 'Owner Papers' },
  { id: 7, label: 'Property Papers' },
  { id: 8, label: 'Whatsapp' },
  { id: 9, label: 'Email' },
  { id: 10, label: 'Video' }
];

const inputFieldStyle = { width: '100%' };

function AddDocuments({ projectId, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPromotions, setSelectedPromotions] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePromotionsChange = (event) => {
    setSelectedPromotions(event.target.value);
  };  
  const useCreatePromotionsMutation = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = {
          data: {
            Message: 'success',
            data: formData
          }
        };
        resolve(response);
      }, 1000);
    });
  };

  const handleFormSubmit = (values, formikBag) => {
    useCreatePromotionsMutation({
      project_id: projectId,
      promotion_types: values.promotion_types,
      description: values.description,
      expiry_date: values.expiry_date
    })
      .then((response) => {
        if (response && response.data && response.data.Message === 'success') {
          console.log('Promotion created successfully!', response.data.data);
          setSelectedPromotions([]);
          setSelectedDate(null);
          formikBag.setSubmitting(false);
        } else {
          console.error('Error creating promotion:', response && response.data);
          formikBag.setSubmitting(false);
        }
      })
      .catch((error) => {
        console.error('Error creating promotion:', error);
        formikBag.setSubmitting(false);
      });
  };

  return (
    <Page title="Upload Documents" item xs={12} md={6}>
      <Formik
        initialValues={{
          promotion_types: [],
          description: '',
          expiry_date: null
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isUploading, isResetting }) => (
          <form onSubmit={handleSubmit}>
            <MainCard title="Add Documents">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  style={{ xs: 12, lg: 12, mb: 3 }}
                  component={NormalAutoCompleteSelector}
                  options={uploadDocumentOptions}
                  label="Category"
                  name="promotion_types"
                  onChange={handlePromotionsChange}
                  value={selectedPromotions}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Title"
                  id="title"
                  placeholder="add document title"
                  name="title"
                  sx={inputFieldStyle}
                />
                <FormHelperText>Please Add Title </FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={Input}
                  type = "file"
                  label="File"
                  id="file"
                  placeholder="add document title"
                  name="title"
                  sx={inputFieldStyle}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="upload" variant="contained" color="primary" disabled={isUploading}>
                  {isUploading? 'Uploading...' : 'Upload'}
                </Button>
                <Button type="reset" variant="contained" color="primary" disabled={isResetting}>
                  {isResetting? 'Resetting...' : 'Reset'}
                </Button>
              </Grid>
            </Grid>
            </MainCard>
            
          </form>
        )}
      </Formik>
    </Page>
  );
}
export default AddDocuments;
