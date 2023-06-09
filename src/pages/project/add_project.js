// material-ui
import { Grid, TextField, FormHelperText } from '@mui/material';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import MapAutocomplete from 'components/map/maps-autocomplete';
import { LoadScript } from '@react-google-maps/api';
import Map from 'components/map/google-map';

//assets
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import InputText from 'components/InputArea/TextInput';
import Selector from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| Add Project ||============================== //
const countries = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];
const cities = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];
function AddProject() {
  // this is aglobal handle change that requires both value and of the input its used in to return an object with name: value
  const [globalValues, setGlobalValues] = useState({});
  const [city, setCity] = useState(null);
  const [developerCompany, setDeveloperCompany] = useState(null);
  const [subDeveloperCompany, setSubDeveloperCompany] = useState(null);
  const [long, setlong] = useState(null);
  const [lat, setlat] = useState(null);
  
  const [address, setAddress] = useState('Abu Dhabi');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const handleGlobalChange = ({ target: { name, value } }) => {
    setGlobalValues((values) => {
      return { ...values, [name]: value };
    });
  };




  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places']}>
      <Page title="Add Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Project details">
            <Grid container spacing={2} alignItems="center">
              <InputText
                label="Project Title"
                placeholder="Project Title"
                helperText="Please enter project title"
                style={{ xs: 12, lg: 4 }}
                type="text"
              />
              <AutoCompleteSelector
                label="Country"
                placeholder="Select Country"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="countrySelector"
                value={country}
                setValue={setCountry}
                helperText="Please select country"
              />
              <AutoCompleteSelector
                label="City"
                placeholder="Select City"
                options={cities}
                style={{ xs: 12, lg: 4 }}
                id="citySelector"
                value={city}
                setValue={setCity}
                helperText="Please select city"
              />
              <AutoCompleteSelector
                label="Master Developer"
                placeholder="Select Master Developer"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="masterDeveloperSelector"
                value={developerCompany}
                setValue={setDeveloperCompany}
                helperText="Please select master developer"
              />
              <AutoCompleteSelector
                label="Sub Developer Company"
                placeholder="Select Sub Developer Company"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="subDeveloperCompanySelector"
                value={subDeveloperCompany}
                setValue={setSubDeveloperCompany}
                helperText="Please select sub developer company"
              />
              <Selector
                id="phaseTypeSelector"
                label="Phase Type"
                placeholder="Select Phase Type"
                options={['Single', 'Multiple']}
                style={{ xs: 12, lg: 4 }}
              />
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Location details">
            <Grid container spacing={2} alignItems="center">
              <AutoCompleteSelector
                label="Country"
                placeholder="Select Country"
                id="countrySelector"
                style={{ xs: 12, lg: 6 }}
                value={country}
                setValue={setCountry}
                options={countries}
                helperText="Please select country"
              />
              <InputText
                style={{ xs: 12, lg: 6 }}
                label="Map URL"
                placeholder="Address"
                helperText="Please enter the location address"
                type="text"
              />
              <AutoCompleteSelector
                style={{ xs: 12, lg: 6 }}
                label="State"
                placeholder="State"
                type="text"
                helperText="Please enter the location's state"
                options={countries}
                value={country}
                setValue={setCountry}
                id="location-details-state"
              />

                <Grid item xs={12} lg={6}>
                  <InputLabel required>Place</InputLabel>
                  <MapAutocomplete placeHolder onChangeAddress={setAddress} country={setCountry} state={setState} value="uae" />
                  <FormHelperText>Please enter place address</FormHelperText>
                </Grid>

              <Grid item xs={12} lg={6}>
                <AutoCompleteSelector
                  label="City"
                  placeholder="City"
                  type="text"
                  helperText="City the enter location's city"
                  options={cities}
                  value={city}
                  setValue={setCity}
                  id="location-details-city"
                  style={{ xs: 12, lg: 12 }}
                />
                <AutoCompleteSelector
                  label="District"
                  placeholder="District"
                  type="text"
                  id="location-details-district"
                  helperText="Please enter the location's district"
                  value={country}
                  setValue={setCountry}
                  options={countries}
                  style={{ xs: 12, lg: 12 }}
                />
                <AutoCompleteSelector
                  label="Community"
                  placeholder="Community"
                  type="text"
                  id="location-details-community"
                  helperText="Please enter the location's community"
                  value={country}
                  setValue={setCountry}
                  options={countries}
                  style={{ xs: 12, lg: 12 }}
                />
                <AutoCompleteSelector
                  label="Sub Community"
                  placeholder="Sub Community"
                  type="text"
                  id="location-details-sub-community"
                  helperText="Please enter the location's sub community"
                  value={country}
                  setValue={setCountry}
                  options={countries}
                  style={{ xs: 12, lg: 12 }}
                />
              </Grid>

              {/* <Grid item xs={12} lg={6}> */}
                <Map locationAddress={address} xs={12} lg={6}/>
              {/* </Grid> */}
            </Grid>
          </MainCard>
        </Grid>

        <Grid item xs={12}>
          <MainCard title="Property Details">
            <Grid container spacing={2} alignItems="center">
              <AutoCompleteSelector
                label="Property Status"
                placeholder="Select Property Status"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="propertyStatusSelector"
                value={country}
                setValue={setCountry}
                helperText="Please select property status"
              />
              <AutoCompleteSelector
                label="Property Type"
                placeholder="Select Property Type"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="propertyTypeSelector"
                value={country}
                setValue={setCountry}
                helperText="Please select property type"
              />

              <AutoCompleteSelector
                label="Life Style"
                placeholder="Select Life Style"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="lifeStyleSelector"
                value={country}
                setValue={setCountry}
                helperText="Please select life style"
              />
              <AutoCompleteSelector
                label="Ownership"
                placeholder="Select Ownership"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="ownershipSelector"
                value={country}
                setValue={setCountry}
                helperText="Please select ownership"
              />
              <AutoCompleteSelector
                label="Plot Area (sqft)"
                placeholder="Select Plot Area"
                options={countries}
                style={{ xs: 12, lg: 4 }}
                id="plotAreaSelector"
                value={country}
                setValue={setCountry}
                helperText="Please select plot area"
              />

              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Built up Area (sqft)"
                placeholder="Built up Area (sqft)"
                type="number"
                helperText="Please enter built up area (sqft)"
              />

              <Grid item xs={12} lg={4}>
                {/* //!figure this out */}
                <InputLabel required>Area Range</InputLabel>
                <Grid item row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <TextField type="number" sx={{ width: '45%' }} />
                  <span style={{ fontWeight: 'bolder', fontSize: '1.7em' }}>:</span>
                  <TextField type="number" sx={{ width: '45%' }} />
                </Grid>
                <FormHelperText>Please enter the area range</FormHelperText>
              </Grid>
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Starting Price"
                placeholder="Starting Price"
                type="number"
                helperText="Please enter the starting price"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Service Charge"
                placeholder="Service Charge"
                type="number"
                helperText="Please enter the service charge"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Start Date"
                placeholder="Start Date"
                type="date"
                helperText="Please enter the start date"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Completion Date"
                placeholder="Completion Date"
                type="date"
                helperText="Please enter the completion date "
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Handover Date"
                placeholder="Handover Date"
                type="date"
                helperText="Please enter the handover date"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Property Title"
                placeholder="Property Title"
                helperText="Please enter the property title"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Arabic Property Title"
                placeholder="Arabic Property Title"
                helperText="Please enter the arabic property title"
                type="text"
              />
              <Grid item xs={12} lg={4}></Grid>
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Property Description"
                placeholder="Property Description"
                type="text"
                helperText="Please enter the property desciption"
                multiline
                rows={4}
                name="property-details-property-description"
                fullWidth
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Arabic Property Description"
                placeholder="Arabic Property Description"
                type="text"
                helperText="Please enter the arabic property desciption"
                multiline
                rows={4}
                name="property-details-arabic-property-description"
                fullWidth
              />
            </Grid>
          </MainCard>
          <SubmitButton />
        </Grid>
      </Grid>
    </Page>
    </LoadScript>
  )
}

AddProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddProject;
