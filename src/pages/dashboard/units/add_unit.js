// material-ui
import { Grid, Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';

//assets
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import Container from 'components/Elements/Container';
import SubmitButton from 'components/Elements/SubmitButton';
import Selector from 'components/InputArea/Selector';
import CustomizedTabs from 'components/Elements/Tab';

// ==============================|| Add Units ||============================== //
function AddUnits() {
  const [globalValues, setGlobalValues] = useState([]);
  const [long, setlong] = useState(null);
  const [lat, setlat] = useState(null);
  const [country, setCountry] = useState('');
  const [invest, setInvest] = useState(false);
  const [locationLink, setLocationLink] = useState({
    latitude: 24.4984312,
    longitude: 54.4036975
  });
  const [numOfPhases, setNumOfPhases] = useState(0);

  let link =
    'https://www.google.com/maps/place/Addax+Office+Tower/@24.4984312,54.4036975,18.25z/data=!4m6!3m5!1s0x3e5e67a52a16039b:0x3b49e7595dafcef7!8m2!3d24.4989329!4d54.4031167!16s%2Fg%2F11b722p3r4?entry=ttu';

  const getLongLat = (link) => {
    const regex = /@([-0-9.]+),([-0-9.]+)/;
    const match = link.match(regex);

    if (match && match.length === 3) {
      const latitude = parseFloat(match[1]);
      const longitude = parseFloat(match[2]);
      return { latitude, longitude };
    }

    return null;
  };

  const handleLocation = (e) => {
    setLocationLink(getLongLat(e.target.value));
    console.log(e.target.value);
    console.log(locationLink);
  };

  const defaultMapProps = {
    center: {
      lat: getLongLat(link).latitude,
      lng: getLongLat(link).longitude
    },
    zoom: 12
  };

  const sugg = {
    countries: ['UAE', 'Egypt', 'United States of America', 'United Kingdom', 'Sudan'],
    projdetcity: ['Abudhabi', 'New york', 'London', 'Khartoum', 'Cairo'],
    brokercomp: [
      'Yas Real Estate LLC',
      'Finehome Inter. Real Estate LLc',
      'Management Real Estate LLC',
      'My Real Estate LLC',
      'Hello Real Estate'
    ],
    masterdev: ['Al dar', 'EMAAR', 'AQARY', 'FINE HOME', 'VERY FINE HOME'],
    subdevco: ['LETS DO IT LLC', 'Subdev LLC', 'ABC LLC', 'Dev LLC', 'Maybe LLC'],
    locCountry: ['Brazil', 'Nigeria', 'Qatar', 'Angola', 'Saudi Arabia'],
    state: ['Rio', 'Nairobi', 'Doha', 'Luena', 'Jedda'],
    city: ['Chicago', 'New Jersy', 'Ohio', 'Manchester', 'Lviv'],
    district: ['Kharkov', 'Denipro', 'Mosscow', 'Doha', 'Riyadh'],
    community: ['Al reem', "Sa'adyat", 'Yas', 'Al Raha', 'MBZ'],
    subcomm: ['Al Qurm', 'Al Mushrif', 'Al Wahda', 'Khaldiya', 'Mussafah'],
    propertystat: ['Upcoming', 'Completed', 'Under Construction', 'Off plan', 'Ready'],
    propertytype: ['Apartment', 'Building', 'Bungalow', 'Land/Plot', 'Retail'],
    lifestyle: ['Luxury', 'Ultra Luxury', 'Standard', 'Affordable'],
    ownership: ['Free Hold', 'GCC citizen', 'Leasehold', 'UAE Citizen', 'Other']
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y'
  });

  return (
    <Page title="Add Project">
      <Grid container spacing={gridSpacing}>
        <Container title="Listing Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <AutoCompleteSelector
              label="Category"
              placeholder="Select Category"
              options={sugg.countries}
              style={{ xs: 12, lg: 4 }}
              id="categorySelector"
              value={country}
              setValue={setCountry}
              helperText="Please select category"
            />
            <AutoCompleteSelector
              label="Unity Type"
              placeholder="Select Unity Type"
              options={sugg.countries}
              style={{ xs: 12, lg: 4 }}
              id="unityTypeSelector"
              value={country}
              setValue={setCountry}
              helperText="Please select Unit Type"
            />

            <AutoCompleteSelector
              label="Property"
              placeholder="Select Property"
              options={sugg.city}
              style={{ xs: 12, lg: 4 }}
              id="property-Selector"
              value={globalValues}
              setValue={setGlobalValues}
              helperText="Please select a property"
            />

            <AutoCompleteSelector
              label="Company"
              placeholder="Select Company"
              options={sugg.masterdev}
              style={{ xs: 12, lg: 4 }}
              id="company-Selector"
              value={globalValues}
              setValue={setGlobalValues}
              helperText="Please select a company"
            />

            <AutoCompleteSelector
              label="Agent"
              placeholder="Select Agent"
              options={sugg.subdevco}
              style={{ xs: 12, lg: 4 }}
              id="agent-Selector"
              value={globalValues}
              setValue={setGlobalValues}
              helperText="Please select a agent"
            />

            <AutoCompleteSelector
              label="Reference No."
              placeholder="Select Reference No."
              options={sugg.subdevco}
              style={{ xs: 12, lg: 4 }}
              id="refernce-number-Selector"
              value={globalValues}
              setValue={setGlobalValues}
              helperText="Please select a refernce number"
            />
            <AutoCompleteSelector
              label="ORN Number"
              placeholder="Select ORN Number"
              options={sugg.subdevco}
              style={{ xs: 12, lg: 4 }}
              id="ORN-number-Selector"
              value={globalValues}
              setValue={setGlobalValues}
              helperText="Please select a ORN number"
            />

            <InputText
              label="RERA Expiry Date"
              placeholder="RERA Expiry Date"
              helperText="Please enter RERA expiry date"
              type="date"
              style={{ xs: 12, lg: 4 }}
            />
          </Grid>
        </Container>
        <Container title="Location details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <AutoCompleteSelector
              label="Country"
              placeholder="Select Country"
              id="countrySelector"
              style={{ xs: 12, lg: 6 }}
              value={country}
              setValue={setCountry}
              options={sugg.countries}
              helperText="Please select country"
            />
            <InputText
              style={{ xs: 12, lg: 6 }}
              label="Address"
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
              options={sugg.countries}
              value={country}
              setValue={setCountry}
              id="location-details-state"
            />

            <InputText
              label="Place"
              style={{ xs: 12, lg: 6 }}
              placeholder="Place"
              type="text"
              helperText="Place the enter location's place"
            />

            <Grid item xs={12} lg={6}>
              <AutoCompleteSelector
                label="City"
                placeholder="City"
                type="text"
                helperText="City the enter location's city"
                options={sugg.city}
                value={globalValues}
                setValue={setGlobalValues}
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
                options={sugg.countries}
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
                options={sugg.countries}
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
                options={sugg.countries}
                style={{ xs: 12, lg: 12 }}
              />
            </Grid>

            <Grid item xs={12} lg={6} style={{ height: '100%' }} rowSpan={4}>
              {/* API Key for google map
                      AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y */}

              {/* //!fix the height*/}
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
        </Container>

        <Container title="Unit Details" style={{ xs: 12 }}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid container spacing={2} xs={12} lg={8}>
              <InputText
                label="Unit No."
                placeholder="Unit Number"
                type="number"
                helperText={<FormControlLabel control={<Checkbox defaultChecked />} label="View for public" />}
                style={{ xs: 12, lg: 6 }}
              />

              <InputText
                label="Bedrooms"
                placeholder="Number Of Bedrooms"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the number of bedrooms"
              />

              <InputText
                label="Bathrooms"
                placeholder="Number of Bathrooms"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the number of bathrooms"
              />

              <InputText
                label="Parking"
                placeholder="Number of parking space"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the number of parking space"
              />

              <AutoCompleteSelector
                label="Primary View"
                placeholder="Primary View"
                style={{ xs: 12, lg: 6 }}
                helperText="Please select the primary view"
                options={sugg.district}
                value={globalValues}
                setValue={setGlobalValues}
                id="primary-view-selector"
              />

              <AutoCompleteSelector
                label="Secondary View"
                placeholder="Secondary View"
                style={{ xs: 12, lg: 6 }}
                helperText="Please select the secondary view"
                options={sugg.district}
                value={globalValues}
                setValue={setGlobalValues}
                id="secondary-view-selector"
              />

              <InputText
                label="PlotArea (sqft)"
                placeholder="Plot Area (sqft)"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the plot area (sqft)"
              />

              <InputText
                label="Price"
                placeholder="Price"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the unit price"
              />

              <InputText
                label="Built up area (sqft)"
                placeholder="Built up area (sqft)"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the unit built up area (sqft)"
              />

              <InputText
                label="Service Charge"
                placeholder="Service Charge"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the unit service charge"
              />

              <InputText
                label="No. of Payments"
                placeholder="No. of Payments"
                type="number"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the unit no. of payments"
              />

              <AutoCompleteSelector
                label="Rent Type"
                placeholder="Rent Type"
                type="number"
                helperText="Please enter the unit rent type"
                options={sugg.district}
                value={globalValues}
                setValue={setGlobalValues}
                id="no-of-payments-selector"
                style={{ xs: 12, lg: 6 }}
              />
              <Selector
                id="furnished-selector"
                label="Furnished"
                style={{ xs: 12, lg: 6 }}
                options={['No', 'Semi Furnished', 'Full Furnished']}
                helperText="Please select whether the unit is furnished or not"
              />

              <AutoCompleteSelector
                label="Ownership"
                placeholder="Ownership"
                style={{ xs: 12, lg: 6 }}
                options={sugg.district}
                value={globalValues}
                setValue={setGlobalValues}
                id="ownership-selector"
                helperText={
                  <FormControlLabel
                    onClick={() => {
                      setInvest(!invest);
                    }}
                    control={<Checkbox defaultChecked />}
                    label="Investment"
                  />
                }
              />

              <InputText
                label="Contract Start Date"
                placeholder="Contract Start Date"
                type="date"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the contract start date"
                disabled={!invest ? 'disabled' : null}
              />

              <InputText
                label="Contract End Date"
                placeholder="Contract End Date"
                type="date"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the contract end date"
                disabled={!invest ? 'disabled' : null}
              />
              <InputText
                label="Amount"
                placeholder="Amount"
                type="number"
                style={{ xs: 12, lg: 6 }}
                disabled={!invest ? 'disabled' : null}
                helperText="Please enter the contract amount"
              />

              <Selector
                label="Completion status"
                style={{ xs: 12, lg: 6 }}
                helperText="Please enter the completion status"
                id="completion-status-selector"
                options={['Up Coming', 'Off Plan', 'Ready', 'Under Construction', 'Up Coming']}
              />
            </Grid>

            <CustomizedTabs />

            {/* <Grid container spacing={2} lg={8} xs={12} alignItems="center">
              <Grid style={{ padding: '16px 0 0 16px' }} container xs={12} lg={12}>
                <Grid item xs={12} lg={6}>
                  <InputLabel required>Custom Amenities</InputLabel>
                  <AutocompleteForms setCompanyFun={handleGlobalChange} data={sugg.district} />
                </Grid>
                <Grid item xs={12} lg={6} alignContent="center">
                  <InputLabel>Choose Type</InputLabel>
                  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" row onChange={handlePhaseType}>
                    <FormControlLabel value="Upload" control={<Radio />} label="Upload" />
                    <FormControlLabel value="Select Existing" control={<Radio />} label="Multiple" />
                  </RadioGroup>
                </Grid>
              </Grid>

              <Grid style={{ padding: '16px 0 0 16px' }} container xs={12} lg={12}>
                <Grid item xs={12} lg={6}>
                  <InputLabel required>Custom Facilities</InputLabel>
                  <AutocompleteForms setCompanyFun={handleGlobalChange} data={sugg.district} />
                </Grid>
                <Grid item xs={12} lg={6} alignContent="center">
                  <InputLabel>choose Type</InputLabel>
                  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" row onChange={handlePhaseType}>
                    <FormControlLabel value="Upload" control={<Radio />} label="Single" />
                    <FormControlLabel value="Select Existing" control={<Radio />} label="Multiple" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </Container>
        <SubmitButton />
      </Grid>
    </Page>
  );
}

AddUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddUnits;
