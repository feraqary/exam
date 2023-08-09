import React, { useState}  from 'react';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import InputText from 'components/InputArea/TextInput';
import { Grid, TextField, FormHelperText, Button } from '@mui/material';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import { Formik, Field} from 'formik';
import { LoadScript } from '@react-google-maps/api';
import { objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
// ===========================ADD to Exchange Form ======================================//

const validateSchema = Yup.object({
    exchangeCountries: objectValidator('Mandatory Selection', true),
    state: objectValidator('Mandatory Selection', true),

})

const ExchangeForm = () => {
    return (
        <Page title = "Add to Exchange">
            <Grid title="Add to Exchange">
                <Formik
                validateOnChange = {false}
                initialValues={{
                    exchangeCountries:'',
                    state: '',
                    district:'',
                    community:'',
                    subCommunity: '',
                    propertyType: '',
                    bathroom:'',
                    bedrooms:'',
                    completion_status: '',
                    plot_area: '',
                    second_view: '',
                    primary_view: '',
                    parking: '',
                    builtUpArea: '',
                    ownership:  '',
                    furnished:  '',
                    mortgage:   '',
                    maintenanceFee:    '',
                    vat: '',
                    unit_usage: '',
                    vat_value: '',
                    service_charge:'',
                    paid: '',
                    privateAmenities: '',
                    commercial_amenities: '',
                    date: '',
                    description: ''


                }}
                validationSchema={validateSchema}
                onSubmit={ async (values, { setSubmitting, resetForm, validateForm}) => {
                    await validateForm(values);
                    submitForm(values);
                    setSubmitting(false);

                }}
                >
                    {(props) => (
                        <>
                        <Container title="Add to Exchange " style={{ xs:12}}>
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
              
                />
                <FormHelperText>Please Describe Promotion</FormHelperText>
              </Grid>
                        </Container>
                        </>
                    )}
                </Formik>
            </Grid>
        </Page>
    )
}


ExchangeForm.getLayout = function getLayout(page){
    return <Layout>{page}</Layout>;
};

export default (ExchangeForm);