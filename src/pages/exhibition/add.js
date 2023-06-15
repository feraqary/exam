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
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';
import InputText from 'components/widgets/TextInput';
import FileUpload from 'components/widgets/FileUpload';

// ==============================|| Google Map ||============================== //

// ==============================|| Fields ||============================== //

const exhibitionType = ['Conference', 'Local', 'International', 'Online'];
const exhibitionActivities = ['Real Estate', 'Technology'];
const companies = ['Abu Dhabi Commercial Bank', 'Al Dar', 'Febno Technologies', 'Fine Home Exchange', 'First Gulf Bank', 'Imkan', 'MTM'];
const countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla'];
const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'];
const communities = ['Alberta', 'British Columbia', 'Manitoba'];
const subCommunities = ['British Columbia', 'Manitoba', 'New Brundish Columbia', 'Newfoundland and Labrador', 'Nova Scotia'];
const cities = ['Abu Dhabi'];

function AddExhibition() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y'
  });
  const [lat, setlat] = useState(null);
  const [long, setlong] = useState(null);

  const [value, setValue] = useState(null);

  return (
    <Page title="Add Exhibition">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Exhibition Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <AutoCompleteSelector
              label="Exhibition Type:"
              placeholder="Exhibition types"
              options={exhibitionType}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="exhibition-type-selector"
              helperText="Please select an exhibition type"
            />
            <AutoCompleteSelector
              label="Exhibition Activities:"
              placeholder="Exhibition activities"
              options={exhibitionActivities}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="exhibition-activities-selector"
              helperText="Please select an exhibition activity"
            />
            <InputText
              label="Exhibition Name:"
              placeholder="Exhibition name"
              helperText="Please enter exhibition name"
              style={{ xs: 12, lg: 4 }}
              type="text"
            />
            <AutoCompleteSelector
              label="Company Name:"
              placeholder="Company name"
              options={companies}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="company-name-selector"
              helperText="Please select a company name"
            />
            <InputText
              label="Starting Date:"
              style={{ xs: 12, lg: 4 }}
              type="data"
              placeholder="Starting Date"
              helperText="Please pick a starting date"
            />
            <InputText
              label="Ending Date:"
              style={{ xs: 12, lg: 4 }}
              type="data"
              placeholder="Ending Date"
              helperText="Please pick an ending date"
            />
            <AutoCompleteSelector
              label="Country"
              placeholder="Country"
              options={countries}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="country-selector"
              helperText="Please select a country"
            />

            <AutoCompleteSelector
              label="State"
              placeholder="State"
              options={states}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="state-selector"
              helperText="Please select a state"
            />

            <AutoCompleteSelector
              label="City"
              placeholder="City"
              options={cities}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="city-selector"
              helperText="Please select a city"
            />

            <AutoCompleteSelector
              label="Districts"
              placeholder="Districts"
              options={cities}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="district-selector"
              helperText="Please select a district"
            />

            <AutoCompleteSelector
              label="Community"
              placeholder="Community"
              options={communities}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="community-selector"
              helperText="Please select a community"
            />

            <AutoCompleteSelector
              label="Sub Community"
              placeholder="Sub Community"
              options={subCommunities}
              value={value}
              setValue={setValue}
              style={{ xs: 12, lg: 4 }}
              id="sub-community-selector"
              helperText="Please select a sub community"
            />

            <InputText
              label="Description"
              placeholder="Description"
              helperText="Please enter a description"
              style={{ xs: 12, lg: 4 }}
              type="text"
            />
            <InputText
              label="Exhibition Address"
              placeholder="Exhibition Address"
              helperText="Please enter the exihibition address"
              style={{ xs: 12, lg: 4 }}
              type="text"
            />

            <InputText
              label="Phone Number"
              placeholder="Phone Number"
              helperText="Please enter phone number"
              style={{ xs: 12, lg: 4 }}
              type="number"
            />

            <InputText
              label="Email"
              placeholder="Email Address"
              style={{ xs: 12, lg: 4 }}
              type="email"
              helperText="Please enter the email address"
            />
            <InputText
              label="Whatsapp number"
              placeholder="Whatsapp number"
              style={{ xs: 12, lg: 4 }}
              type="number"
              helperText="Please enter whatsapp number"
            />

            <FileUpload
              label="Event Logo"
              style={{ xs: 12, lg: 4 }}
              placeholder="Event Logo"
              type="file"
              helperText="Please choose an event logo"
            />

            <FileUpload
              label="Image Gallery"
              style={{ xs: 12, lg: 4 }}
              placeholder="Image Gallery"
              type="file"
              helperText="Please choose an image gallery"
            />

            <InputText
              label="Place"
              placeholder="Place"
              helperText="Please enter the exibition place"
              style={{ xs: 12, lg: 4 }}
              type="text"
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
