import React, { useState } from 'react';
import { Grid, TextField, FormGroup, FormControlLabel, FormControl, InputLabel, FormHelperText, Select, MenuItem, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik, Form, Field } from 'formik';
import { useCreatePromotionsMutation } from 'store/services/project/projectApi';

const promotionOptions = [
  { id: 0, label: 'Open to All Nationalities' },
  { id: 1, label: 'Flexible Payment Plan' },
  { id: 2, label: 'No Commission' },
  { id: 3, label: '0 ADM Waiver' },
  { id: 4, label: 'Discount' },
  { id: 5, label: 'Low Down Payment' },
];

const inputFieldStyle = { width: '100%' };
const selectFieldStyle = { width: '100%' };

function AddPromotions() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPromotions, setSelectedPromotions] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePromotionsChange = (event) => {
    setSelectedPromotions(event.target.value);
  };

  const [createPromotions, { isLoading }] = useCreatePromotionsMutation(); // define Mutation Hook

  return (
    <Page title="Add Promotions">
      <Formik
        initialValues={{
          promotion_types: [],
          description: '',
          expiry_date: null,
        }}
        onSubmit={(values) => {
          // Handle form submission 
          createPromotions({
            promotion_types: values.promotion_types,
            description: values.description,
            expiry_date: values.expiry_date,
          })
            .then((response) => {
              console.log('Promotion created successfully!', response.data);
              // Reset form fields after successful submission
              setSelectedPromotions([]);
              setSelectedDate(null);
            })
            .catch((error) => {
              console.error('Error creating promotion:', error);
            });
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <MainCard title="Add Promotions">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <MultipleAutoCompleteSelector
                  style={{ xs: 12, lg: 12, mb: 3 }} 
                  label="Promotion Types"
                  id="promotion-types"
                  name="promotion_types"
                  options={promotionOptions}
                  placeholder="Select Promotion Types"
                  func={(value) => {
                    console.log('Selected Promotion Types:', value);
                  }}
                  helperText="Select one or more promotion types."
                />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Description"
                    rows = {8}
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
                      name="expiry_date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
                    />
                  </LocalizationProvider>
                  <FormHelperText>Pick Expiry Date</FormHelperText>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Form>
        )}
      </Formik>
    </Page>
  );
}

export default AddPromotions;