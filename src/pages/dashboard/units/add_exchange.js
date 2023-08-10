import React, { useState } from 'react';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import InputText from 'components/InputArea/TextInput';
import { Grid, TextField, FormHelperText, Button } from '@mui/material';
import Container from 'components/Elements/Container';
import { Formik, Field } from 'formik';
import { LoadScript } from '@react-google-maps/api';
import { objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
// ===========================ADD to Exchange Form ======================================//

const countries = [
  { id: 0, label: 'United States' },
  { id: 1, label: ' Pakistan ' },
  { id: 2, label: 'Egypt' },
  { id: 3, label: 'Syria' }
];
const propertyTypes = [
  { id: 0, label: 'Hotel Apartment' },
  { id: 1, label: 'Villa'},
  { id: 2, label: 'Commercial Villa'},
  { id: 3, label: 'Townhouse' },
  { id: 4, label: 'Apartment'},
  { id: 5, label: 'Penthouse' },
  { id: 6, label: 'Residential Land'},
  { id: 7, label: 'Commercial Land'},
  { id: 8, label: 'Mixed Used Land'},
  { id: 9, label: 'Industrial Land'},
  { id: 10, label: ' Office'},
  { id: 11, label: ' Commercial Floor'}, 
  { id: 12, label: 'Showroom'}, 
  { id: 13, label: 'Retail'},
  { id: 14, label: 'Shop'},
  { id: 15, label: 'Labour Camp'},
  { id: 16, label: 'Farm'}
];
 

const bedrooms = [
  { id: 0, label: 'Studio' },
  { id: 1, label: '1 Bedroom'},
  { id: 1, label: '2 Bedroom'},
  { id: 1, label: '3 Bedroom'},
  { id: 1, label: '4 Bedroom'},
  { id: 1, label: '5 Bedroom'},
  { id: 1, label: '6 Bedroom'},
  { id: 1, label: '7 Bedroom'},
]

const completion_status = [
  { id: 0, label: 'Ready'},
  { id: 1, label: 'Completed'},
  { id: 2, label: 'Off-Plan'},
  { id: 3, label: 'Upcoming'},
  { id:4, label: 'Under Construction'}
]

const view= [
  { id: 0, label: 'Sea'},
  { id: 1, label: 'Street'},
  { id: 2, label: 'City View'}
]

const ownership = [

  { id: 0, label: 'Freehold'},
  { id: 1, label: 'Leasehold'},
  { id: 2, label: 'Local Citizen'},
  {
    id: 3, label: 'GCC Citizenship'
  },
  { label: 4, label: ' Others'}


]
const furnished = [
  { id: 0, label: 'All Furnished'},
  { id: 1, label: 'Non-Furnished'},
  { id: 2, label: ' Partially Furnished'}
]

const vat = [
  { id: 0, label: 'Commercial Property'},
  {id: 1, label: 'New Residential Property'},
  { id: 2, label: 'Existing Residential Property'},
  { id: 3, label: 'Bare Island'},
  { id: 4, label: 'Covered Land'},
  { id: 5, label: 'Supply of a Charitable Building'},
  { id: 6, label: 'Subsequent Supply of Charitable Building'},
  { id: 7, label: 'Property Located within a Designated Zone'}
]


const unit_usage = [
  { id: 0, label: 'Residential'},
  { id: 1, label: 'Industrial'},
  { id: 2, label: 'Mixed Used'},
  { id: 3, label: 'Chemical Processing'},
  { id: 4, label: 'Commercial'},
  { id: 5, label: 'Heavy Industrial'},
  { id:6, label: 'Light Industrial'},
  { id:7, label: 'Storage'},
  { id: 8, label: 'Cafeteria'},
  { id: 9, label: 'Restaurant'},
  { id: 10, label: 'Showrooms'},
  { id: 11, label: 'Business Center'},
  { id: 12, label: 'Offices'}
]

const validateSchema = Yup.object({
  exchangeCountries: objectValidator('Mandatory Selection', true),
  state: objectValidator('Mandatory Selection', true)
});
const ExchangeForm = () => {
  return (
    <Page title="Add to Exchange">
      <Grid title="Add to Exchange">
        <Formik
          validateOnChange={false}
          initialValues={{
            exchangeCountries: '',
            state: '',
            district: '',
            community: '',
            subCommunity: '',
            propertyType: '',
            bathroom: '',
            bedrooms: '',
            completion_status: '',
            plot_area: '',
            second_view: '',
            primary_view: '',
            parking: '',
            builtUpArea: '',
            ownership: '',
            furnished: '',
            mortgage: '',
            maintenanceFee: '',
            vat: '',
            unit_usage: '',
            vat_value: '',
            service_charge: '',
            paid: '',
            privateAmenities: '',
            commercial_amenities: '',
            date: '',
            description: ''
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, { setSubmitting, resetForm, validateForm }) => {
            await validateForm(values);
            submitForm(values);
            setSubmitting(false);
          }}
        >
          {(props) => (
            <>
              <Container title="Add to Exchange " style={{ xs: 12 }} columns={2}>
                <Grid container spacing={2} justifyContent="center" style={{ xs: 12 }}>
                  <Grid item xs={12}>
                    <Field
                      style={{ xs: 12, lg: 12, mb: 3 }}
                      component={AutoCompleteSelector}
                      options={countries}
                      label="Select Countries"
                      name="countries"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                    as={TextField} 
                    fullWidth 
                    label="State"
                     id="state" 
                     name="status" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                    as={TextField} 
                    fullWidth 
                    label="City"
                     id="city" 
                     name="city" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                    as={TextField} 
                    fullWidth 
                    label="Districts"
                     id="district" 
                     name="district" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                    as={TextField} 
                    fullWidth 
                    label="Community"
                     id="community" 
                     name="community" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                    as={TextField} 
                    fullWidth 
                    label="Sub-Community"
                     id="sub-community" 
                     name="sub-commmunity" />
                  </Grid>
                </Grid>
             
              </Container>
           
            </>
          )}
        </Formik>
      </Grid>
    </Page>
  );
};

ExchangeForm.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ExchangeForm;
