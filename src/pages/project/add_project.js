// material-ui
import { Grid, TextField, FormHelperText, Button } from '@mui/material';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import MapAutocomplete, { NormalMapAutocomplete } from 'components/map/maps-autocomplete';
import { LoadScript } from '@react-google-maps/api';
import Map, { NormalMap } from 'components/map/google-map';

//assets
import InputText, { NormalInputText } from 'components/InputArea/TextInput';
import Selector, { NormalSelector } from 'components/InputArea/Selector';
import AutoCompleteSelector, { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| Add Project ||============================== //
const countries = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];
const cities = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];
const propertyTypeData = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];

const DynamicInput = () => {
  return (
    <>
      <NormalInputText
        label="Phase Name"
        placeholder="Phase Name"
        helperText="Please enter phase name"
        style={{ xs: 12, lg: 4 }}
        type="text"
      />
      <NormalInputText
        label="Number of Properties"
        placeholder="Number of Properties"
        helperText="Please enter number of properties"
        style={{ xs: 12, lg: 4 }}
        type="text"
      />
      <NormalInputText
        label="Location Address"
        placeholder="Location Map URL"
        helperText="Please enter the location address map url"
        type="text"
        style={{ xs: 12, lg: 4 }}
      />
    </>
  );
};

function AddProject() {
  // this is aglobal handle change that requires both value and of the input its used in to return an object with name: value
  const [city, setCity] = useState(null);
  const [developerCompany, setDeveloperCompany] = useState(null);
  const [subDeveloperCompany, setSubDeveloperCompany] = useState(null);

  const [propertyType, setPropertyType] = useState(null);
  const [phaseType, setPhaseType] = useState('Single');
  const [phases, setPhases] = useState([{ phaseName: '', numberOfPhases: 0, mapUrl: '' }]);

  const [long, setlong] = useState(null);
  const [lat, setlat] = useState(null);

  const [address, setAddress] = useState('Abu Dhabi');
  const [country, setCountry] = useState('');

  const [state, setState] = useState('');

  const addComponent = () => {
    const phase = { phaseName: '', numberOfPhases: 0, mapUrl: '' };

    setPhases((prev) => [...prev, phase]);
  };

  const addPhases = () => {
    return phases.map((phase, index) => {
      return <DynamicInput key={index} />;
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places']}>
      <Page title="Add Project">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <MainCard title="Project details">
              <Grid container spacing={2} alignItems="center">
                <NormalInputText
                  label="Project Title"
                  placeholder="Project Title"
                  helperText="Please enter project title"
                  style={{ xs: 12, lg: 4 }}
                  type="text"
                />
                <NormalAutoCompleteSelector
                  label="Country"
                  placeholder="Select Country"
                  options={countries}
                  style={{ xs: 12, lg: 4 }}
                  id="countrySelector"
                  value={country}
                  setValue={setCountry}
                  helperText="Please select country"
                />
                <NormalAutoCompleteSelector
                  label="City"
                  placeholder="Select City"
                  options={cities}
                  style={{ xs: 12, lg: 4 }}
                  id="citySelector"
                  value={city}
                  setValue={setCity}
                  helperText="Please select city"
                />
                <NormalAutoCompleteSelector
                  label="Master Developer"
                  placeholder="Select Master Developer"
                  options={countries}
                  style={{ xs: 12, lg: 4 }}
                  id="masterDeveloperSelector"
                  value={developerCompany}
                  setValue={setDeveloperCompany}
                  helperText="Please select master developer"
                />
                <NormalAutoCompleteSelector
                  label="Sub Developer Company"
                  placeholder="Select Sub Developer Company"
                  options={countries}
                  style={{ xs: 12, lg: 4 }}
                  id="subDeveloperCompanySelector"
                  value={subDeveloperCompany}
                  setValue={setSubDeveloperCompany}
                  helperText="Please select sub developer company"
                />
                <NormalSelector
                  id="phaseTypeSelector"
                  label="Phase Type"
                  placeholder="Select Phase Type"
                  options={['Single', 'Multiple']}
                  style={{ xs: 12, lg: 4 }}
                  value={phaseType}
                  setValue={(e) => setPhaseType(e)}
                />
                {/* <NormalInputText
                  label="Number of Phases"
                  placeholder="Number of Phases"
                  helperText="Please enter Number of Phases"
                  style={{ xs: 12, lg: 4 }}
                  type="text"
                /> */}
                {addPhases()}
                <Grid container justifyContent="center" style={{ xs: 12, lg: 12, marginTop: 20 }}>
                  <Button variant="outlined" style={{ width: '10%' }} onClick={() => addComponent()}>
                    Add More
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Location details">
              <Grid container spacing={2} alignItems="center">
                <NormalAutoCompleteSelector
                  label="Country"
                  placeholder="Select Country"
                  id="countrySelector"
                  style={{ xs: 12, lg: 6 }}
                  value={country}
                  setValue={setCountry}
                  options={countries}
                  helperText="Please select country"
                />
                <NormalInputText
                  style={{ xs: 12, lg: 6 }}
                  label="Map URL"
                  placeholder="Address"
                  helperText="Please enter the location address"
                  type="text"
                />
                <NormalAutoCompleteSelector
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
                  <NormalMapAutocomplete placeHolder onChangeAddress={setAddress} country={setCountry} state={setState} value="uae" />
                  <FormHelperText>Please enter place address</FormHelperText>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <NormalAutoCompleteSelector
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
                  <NormalAutoCompleteSelector
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
                  <NormalAutoCompleteSelector
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
                  <NormalAutoCompleteSelector
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
                <NormalMap locationAddress={address} xs={12} lg={6} />
                {/* </Grid> */}
              </Grid>
            </MainCard>
          </Grid>

          <Grid item xs={12}>
            <MainCard title="Property Details">
              <Grid container spacing={2} alignItems="center">
                <NormalAutoCompleteSelector
                  label="Property Status"
                  placeholder="Select Property Status"
                  options={countries}
                  style={{ xs: 12, lg: 4 }}
                  id="propertyStatusSelector"
                  value={country}
                  setValue={setCountry}
                  helperText="Please select property status"
                />
                <NormalAutoCompleteSelector
                  multiple
                  label="Property Type"
                  placeholder="Select Property Type"
                  filterSelectedOptions
                  defaultValue={[]}
                  options={propertyTypeData}
                  style={{ xs: 12, lg: 4 }}
                  id="propertyTypeSelector"
                  // value={propertyType}
                  setValue={setPropertyType}
                  helperText="Please select property type"
                  func={(newValue) => setPropertyType(newValue)}
                />

                <NormalAutoCompleteSelector
                  label="Life Style"
                  placeholder="Select Life Style"
                  options={countries}
                  style={{ xs: 12, lg: 4 }}
                  id="lifeStyleSelector"
                  value={country}
                  setValue={setCountry}
                  helperText="Please select life style"
                />
                <NormalAutoCompleteSelector
                  label="Ownership"
                  placeholder="Select Ownership"
                  options={countries}
                  style={{ xs: 12, lg: 4 }}
                  id="ownershipSelector"
                  value={country}
                  setValue={setCountry}
                  helperText="Please select ownership"
                />
                <NormalAutoCompleteSelector
                  label="Plot Area (sqft)"
                  placeholder="Select Plot Area"
                  options={countries}
                  style={{ xs: 12, lg: 4 }}
                  id="plotAreaSelector"
                  value={country}
                  setValue={setCountry}
                  helperText="Please select plot area"
                />

                <NormalInputText
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
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Starting Price"
                  placeholder="Starting Price"
                  type="number"
                  helperText="Please enter the starting price"
                />
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Service Charge"
                  placeholder="Service Charge"
                  type="number"
                  helperText="Please enter the service charge"
                />
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Start Date"
                  placeholder="Start Date"
                  type="date"
                  helperText="Please enter the start date"
                />
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Completion Date"
                  placeholder="Completion Date"
                  type="date"
                  helperText="Please enter the completion date "
                />
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Handover Date"
                  placeholder="Handover Date"
                  type="date"
                  helperText="Please enter the handover date"
                />
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Property Title"
                  placeholder="Property Title"
                  helperText="Please enter the property title"
                  type="text"
                />
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Arabic Property Title"
                  placeholder="Arabic Property Title"
                  helperText="Please enter the arabic property title"
                  type="text"
                />
                <Grid item xs={12} lg={4}></Grid>
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Property Description"
                  placeholder="Property Description"
                  type="text"
                  helperText="Please enter the property desciption"
                  multiline
                  rows={4}
                  name="property-details-property-description"
                  fullWidth
                  description
                />
                <NormalInputText
                  style={{ xs: 12, lg: 4 }}
                  label="Arabic Property Description"
                  placeholder="Arabic Property Description"
                  type="text"
                  helperText="Please enter the arabic property desciption"
                  multiline
                  rows={4}
                  name="property-details-arabic-property-description"
                  fullWidth
                  description
                />
              </Grid>
            </MainCard>
            {/* <SubmitButton /> */}
          </Grid>
        </Grid>
      </Page>
    </LoadScript>
  );
}

AddProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddProject;
