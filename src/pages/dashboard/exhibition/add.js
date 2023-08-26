// material-ui
import { Grid, CardActions } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import { Formik } from 'formik';
import { objectValidator, dateValidator, stringValidator, numberValidator, fileValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| Google Map ||============================== //

// ==============================|| Fields ||============================== //

const exhibitionType = ['Conference', 'Local', 'International', 'Online'];
const exhibitionActivities = ['Real Estate', 'Technology'];
const companyName = ['Abu Dhabi Commercial Bank', 'Al Dar', 'Febno Technologies', 'Fine Home Exchange', 'First Gulf Bank', 'Imkan', 'MTM'];
const country = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla'];
const state = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'];
const community = ['Alberta', 'British Columbia', 'Manitoba'];
const subCommunity = ['British Columbia', 'Manitoba', 'New Brundish Columbia', 'Newfoundland and Labrador', 'Nova Scotia'];
const city = ['Abu Dhabi'];
const district = ['Abu Dhabi'];

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
// ==============================|| Add Exhibitions form validator ||============================== //
const validationSchema = Yup.object({
  exhibitionType: objectValidator('Please select an exhibition type', true),
  exhibitionActivities: objectValidator('Please select an exhibition activity', true),
  companyName: objectValidator('Please select a company', true),
  country: objectValidator('Please select a country', true),
  state: objectValidator('Please select a state', true),
  city: objectValidator('Please select a city', true),
  district: objectValidator('Please select a district', true),
  community: objectValidator('Please select a community', true),
  subCommunity: objectValidator('Please select a sub community', true),
  startingDate: dateValidator('Please select an starting date', true),
  endingDate: dateValidator('Please select an ending date', true),
  description: stringValidator('Please enter a description', true),
  exhibitionAddress: stringValidator('Please enter an exhibition address', true),
  phoneNumber: numberValidator('Please enter a phone number', true),
  emailAddress: stringValidator('Please enter the email address', true),
  whatsappNumber: numberValidator('Please enter a whatsapp number', true),
  eventLogo: fileValidator(SUPPORTED_FORMATS),
  imageGallery: fileValidator(SUPPORTED_FORMATS),
  place: stringValidator('Please enter a place', true)
});

function AddExhibition() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y'
  });
  const [lat, setlat] = useState(null);
  const [long, setlong] = useState(null);

  const [value, setValue] = useState(null);

  const exhibitionState = useSelector((state) => state.exhibitionType);

  const submitForm = (values) => {
    const formData = new FormData();
    formData.append('exhibition_type', values.exhibitionType.id);
    formData.append('exhibition_activities', values.exhibitionActivities.id);
    formData.append('company', values.companyName.id);
    formData.append('country', values.country);
    formData.append('state', values.state);
    formData.append('city', values.city);
    formData.append('district', values.district);
    formData.append('community', values.community);
    formData.append('sub_community', values.subCommunity);
    formData.append('starting_date', values.startingDate);
    formData.append('ending_date', values.endingDate);
    formData.append('description', values.description);
    formData.append('exhibition_address', values.exhibitionAddress);
    formData.append('phone_number', values.phoneNumber);
    formData.append('email', values.emailAddress);
    formData.append('whatsapp_number', values.whatsappNumber);
    formData.append('event_logo', values.eventLogo);
    formData.append('image_gallery', values.imageGallery);
    formData.append('place', values.place);

    console.log('formData:', formData);
    // createExhibition(formData);
  };
  return (
    <Page title="Add Exhibition">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Exhibition Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <Formik
              validateOnChange={false}
              initialValues={{
                exhibitionType: '',
                exhibitionActivities: '',
                companyName: '',
                country: '',
                state: '',
                city: '',
                district: '',
                community: '',
                subCommunity: '',
                startingDate: '',
                endingDate: '',
                description: '',
                exhibitionAddress: '',
                phoneNumber: '',
                emailAddress: '',
                whatsappNumber: '',
                eventLogo: '',
                imageGallery: '',
                place: ''
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
              onReset={(_) => {
                exhibitionType.current.value = '';
                exhibitionActivities.current.value = '';
                companyName.current.value = '';
                country.current.value = '';
                state.current.value = '';
                community.current.value = '';
                subCommunity.current.value = '';
                city.current.value = '';
                district.current.value = '';
                startingDate.current.value = '';
                endingDate.current.value = '';
                description.current.value = '';
                exhibitionAddress.current.value = '';
                phoneNumber.current.value = '';
                emailAddress.current.value = '';
                whatsappNumber.current.value = '';
                eventLogo.current.value = '';
                imageGallery.current.value = '';
                place.current.value = '';
              }}
            >
              {(props) => (
                <>
                  <AutoCompleteSelector
                    label="Exhibition Type:"
                    placeholder="Exhibition types"
                    helperInfo
                    helperText="Please select an exhibition type"
                    options={exhibitionType}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="exhibitionType"
                    name="exhibitionType"
                    required={true}
                  />
                  <AutoCompleteSelector
                    label="Exhibition Activities:"
                    placeholder="Exhibition activities"
                    helperInfo
                    helperText="Please select an exhibition activity"
                    options={exhibitionActivities}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="exhibition-activities-selector"
                    name="exhibitionActivities"
                    required={true}
                  />
                  <AutoCompleteSelector
                    label="Company Name:"
                    placeholder="Company name"
                    helperInfo
                    helperText="Please select a company name"
                    options={companyName}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="companyName"
                    name="companyName"
                    required={true}
                  />
                  <CustomDateTime
                    helperInfo
                    helperText="Please select a Starting Date"
                    id="startingDate"
                    name="startingDate"
                    label="Starting Date:"
                    style={{ xs: 12, lg: 6 }}
                    setFieldValue={props.setFieldValue}
                    required={true}
                  />
                  <CustomDateTime
                    helperInfo
                    helperText="Please select a Ending Date"
                    id="endingDate"
                    name="endingDate"
                    label="Ending Date:"
                    style={{ xs: 12, lg: 6 }}
                    setFieldValue={props.setFieldValue}
                    required={true}
                  />
                  <AutoCompleteSelector
                    label="Country"
                    placeholder="Country"
                    helperInfo
                    helperText="Please select a country"
                    options={country}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="country"
                    name="country"
                    required
                  />
                  <AutoCompleteSelector
                    label="State"
                    placeholder="State"
                    helperInfo
                    helperText="Please select a state"
                    options={state}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="state"
                    name="state"
                    required
                  />
                  <AutoCompleteSelector
                    label="City"
                    placeholder="City"
                    helperInfo
                    helperText="Please select a city"
                    options={city}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="city"
                    name="city"
                    required
                  />
                  <AutoCompleteSelector
                    label="Districts"
                    placeholder="Districts"
                    helperInfo
                    helperText="Please select a District"
                    options={district}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="district"
                    name="district"
                    required
                  />

                  <AutoCompleteSelector
                    label="Community"
                    placeholder="Community"
                    helperInfo
                    helperText="Please select a community"
                    options={community}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="community"
                    name="community"
                    required
                  />

                  <AutoCompleteSelector
                    label="Sub Community"
                    placeholder="Sub Community"
                    helperInfo
                    helperText="Please select a sub community"
                    options={subCommunity}
                    value={value}
                    setValue={setValue}
                    style={{ xs: 12, lg: 4 }}
                    id="subCommunity"
                    name="subCommunity"
                    required
                  />
                  <InputText
                    label="Description"
                    placeholder="Enter Description"
                    helperInfo
                    helperText="Please Enter Description"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    id="description"
                    name="description"
                    required={true}
                  />
                  <InputText
                    label="Exhibition Address"
                    placeholder="Exhibition Address"
                    helperInfo
                    helperText="Please enter the exihibition address"
                    style={{ xs: 12, lg: 4 }}
                    type="text"
                    id="exhibitionAddress"
                    name="exhibitionAddress"
                    required={true}
                  />
                  <InputText
                    label="Phone Number"
                    placeholder="Phone Number"
                    helperInfo
                    helperText="Please enter phone number"
                    style={{ xs: 12, lg: 4 }}
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    required={true}
                  />

                  <InputText
                    label="Email"
                    placeholder="Email Address"
                    helperInfo
                    helperText="Please enter the email address"
                    style={{ xs: 12, lg: 4 }}
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    required={true}
                  />
                  <InputText
                    label="Whatsapp number"
                    placeholder="Whatsapp number"
                    helperInfo
                    helperText="Please enter whatsapp number"
                    style={{ xs: 12, lg: 4 }}
                    type="number"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    required={true}
                  />

                  <FileUpload
                    label="Event Logo"
                    placeholder="Event Logo"
                    helperInfo
                    helperText="Please choose an event logo"
                    style={{ xs: 12, lg: 4 }}
                    type="file"
                    setFieldValue={props.setFieldValue}
                    id="eventLogo"
                    name="eventLogo"
                    required={true}
                  />

                  <FileUpload
                    label="Image Gallery"
                    placeholder="Image Gallery"
                    helperInfo
                    helperText="Please choose an image gallery"
                    style={{ xs: 12, lg: 4 }}
                    type="file"
                    setFieldValue={props.setFieldValue}
                    id="imageGallery"
                    name="imageGallery"
                    required={true}
                  />

                  <InputText
                    label="Place"
                    placeholder="Place"
                    helperInfo
                    helperText="Please enter the exibition place"
                    style={{ xs: 12, lg: 4 }}
                    type="text"
                    id="place"
                    name="place"
                    required={true}
                  />
                  <Grid item xs={12} lg={12}>
                    <InputLabel>Map</InputLabel>
                    {!isLoaded ? (
                      <div>loading....</div>
                    ) : (
                      <>
                        <GoogleMap
                          bootstrapURLKeys={{
                            key: 'YOUR_API_KEY',
                            language: 'en'
                          }}
                          style={{ height: '43vh' }}
                          mapContainerStyle={{ position: 'relative', height: '40vh', width: '100%' }}
                          center={lat != null || long != null ? { lat: lat, lng: long } : { lat: 24.4984312, lng: 54.4036975 }}
                          zoom={13}
                        >
                          <Marker position={lat != null || long != null ? { lat: lat, lng: long } : { lat: 24.4984312, lng: 54.4036975 }} />
                        </GoogleMap>
                      </>
                    )}
                  </Grid>
                  <SubmitButton />
                </>
              )}
            </Formik>
          </Grid>

          <CardActions></CardActions>
        </Container>
      </Grid>
    </Page>
  );
}

AddExhibition.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddExhibition;
