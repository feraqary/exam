// add_promotions.js

import React, { useState } from 'react';
import { Grid, TextField, FormHelperText, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Page from 'components/ui-component/Page';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik, Field } from 'formik';
import Layout from 'layout';
const promotionOptions = [
  { id: 0, label: 'Open to All Nationalities' },
  { id: 1, label: 'Flexible Payment Plan' },
  { id: 2, label: 'No Commission' },
  { id: 3, label: '0 ADM Waiver' },
  { id: 4, label: 'Discount' },
  { id: 5, label: 'Low Down Payment' },
];

const inputFieldStyle = { width: '100%' };

function AddPromotions({ projectId, onClose }) {
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
            data: formData,
          },
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
      expiry_date: values.expiry_date,
    })
      .then((response) => {
        if (response && response.data && response.data.Message === 'success') {
          console.log('Promotion created successfully!', response.data.data);
          setSelectedPromotions([]);
          setSelectedDate(null);
          onClose();
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
    <Page title="Add Promotions">
      <Formik
        initialValues={{
          promotion_types: [],
          description: '',
          expiry_date: null,
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  style={{ xs: 12, lg: 12, mb: 3 }}
                  component={MultipleAutoCompleteSelector}
                  options={promotionOptions}
                  label="Promotion Types"
                  name="promotion_types"
                  onChange={handlePromotionsChange}
                  value={selectedPromotions}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Description"
                  rows={8}
                  id="description"
                  placeholder="Describe Promotion"
                  multiline
                  name="description"
                  sx={inputFieldStyle}
                />
                <FormHelperText>Please Describe Promotion</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Field
                    as={DatePicker}
                    label="Expiry Date"
                    id="expiry_date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
                  />
                </LocalizationProvider>
                <FormHelperText>Pick Expiry Date</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Page>
  );
        }

    
        export default AddPromotions;

