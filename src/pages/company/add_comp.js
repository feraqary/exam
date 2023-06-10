// material-ui
import { Grid, Alert, InputLabel, FormHelperText } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Map from 'components/map/google-map';
import MapAutocomplete from 'components/map/maps-autocomplete';
import { LoadScript } from '@react-google-maps/api';

// redux actions import

import { getCountries, getStates, getCities } from 'store/slices/country-section/actions/countries';

// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import Selector from 'components/InputArea/Selector';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';
import CompanyServices from 'components/Data/company_types_data/fetch_company_types';
import { useEffect } from 'react';
import { setCity, setCountry } from 'store/slices/country-section/slice/country';
import { setState } from 'store/slices/country-section/slice/country';
import { setMainService, setCompany, getMainServices } from 'store/slices/company-section/slice/company';



// ==============================|| FIELDS ||============================== //
// const options = ['Real Estate Broker Company', 'Real Estate Developer Company', 'Service Company'];




const CompanyType = [
  {label:'Real Estate Broker Company', id:1},
  {label:'Real Estate Developer Company', id:2},
  {label:'Service Company', id:3}
]

const fetchCompanyServices = CompanyServices;
// ==============================|| Add Company form ||============================== //
function ColumnsLayouts() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [companyType, setCompanyType] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [subServiceType, setSubServiceType] = useState(null);

  const [companyName, setcompanyName] = useState(null);
  const [companyTagline, setcompanyTagline] = useState(null);
  const [reraNo,setreraNo] = useState(null);
  const [lisenceNo,setlisenceNo] = useState(null);
  const [uploadLisence, setuploadLisence] = useState(null);
  const [lisenceExpiry,setlisenceExpiry] = useState(null);
  const [vatNumber,setvatNumber] = useState(null);
  const [vatStatus,setvatStatus] = useState(null);
  const [vat,setvat] = useState(null);


  const [address, setAddress] = useState('Abu Dhabi');
  // const [Countrytomap, setCountry] = useState('');
  // const [Statetomap, setState] = useState('');


  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const { countries, error, loading, states, country, state, city, cities } = useSelector((state) => state.countries);

  const countryChange = (newValue) => {
    dispatch(setCountry(newValue));
    dispatch(getStates(newValue?.id));
    dispatch(setState(null));
  };
  const stateChange = (newValue) => {
    dispatch(getCities(newValue?.id));
    dispatch(setState(newValue));
    dispatch(setCity(null));
  };
  const cityChange = (newValue) => {
    dispatch(setCity(newValue));
  };

  const companyTypeChange = (newValue) => {
    dispatch(setCompany(newValue));
    dispatch(getMainServices(companyType?.id))
    dispatch(setMainService(companyType))
  }
  
  const onSubmit = () => {
    dispatch(setCity(newValue));

  }


  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places']}>
      <Page title="Add Company">
        <Grid container spacing={gridSpacing}>
          <Container title="Add Company Details" style={{ xs: 12 }}>
            <AutoCompleteSelector
              style={{ xs: 12, lg: 10, mb: 2 }}
              label="Select Company Type"
              id="companyType"
              options={CompanyType}
              placeholder="Select Company Type"
              value={companyType}
              setValue={setCompanyType}
              func={companyTypeChange}
            />

            <AutoCompleteSelector
              style={{ xs: 12, lg: 10, mb: 2 }}
              label="Sub Company Type"
              id="subCompanyType"
              options={fetchCompanyServices.map((x) => x.type)}
              value={serviceType}
              setValue={setServiceType}
            />

            <AutoCompleteSelector
              style={{ xs: 12, lg: 10, mb: 2 }}
              label="Service Type"
              id="serviceType"
              options={fetchCompanyServices.filter((x) => x.type === serviceType).map((x) => x.subTypes)[0]}
              value={subServiceType}
              setValue={setSubServiceType}
            />

            <Grid container spacing={2} alignItems="center">
              <InputText
                label="Company Name"
                placeholder="Enter Company Name"
                helperText="Please Enter Official Company Name"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText
                label="Company Tagline"
                placeholder="Enter Company Tagline"
                helperText="Please Enter Official Tagline"
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <InputText label="RERA No." placeholder="Enter RERA No." helperText="Please Enter RERA No." style={{ xs: 12, lg: 6 }} />
              <InputText
                label="License No."
                placeholder="Enter Company License No."
                helperText="Please enter Company License No."
                style={{ xs: 12, lg: 6 }}
                type="text"
              />
              <FileUpload
                label="Upload License"
                type="file"
                placeholder="Upload Company License"
                helperText="Please Upload Company License"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="License Expiry:"
                placeholder="License Expiry Date"
                helperText="Please enter your License Expiry Date"
                type="date"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="VAT Number:"
                placeholder="VAT Number"
                helperText="Please enter your VAT number"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />
              <Selector
                id="selector"
                style={{ xs: 12, lg: 6 }}
                label="VAT status"
                helperText="Please Choose a VAT status"
                options={['Active', 'Non-Active', 'Pending']}
              />
              <br />
              <FileUpload
                label="Upload VAT"
                type="file"
                placeholder="Upload your VAT"
                helperText="Please upload your VAT"
                style={{ xs: 12, lg: 6 }}
                image={{ alt: 'VAT Preview', width: '250px', height: '250px' }}
              />
            </Grid>
          </Container>
          <Container title="Add Billing Information" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
              <AutoCompleteSelector
                style={{ xs: 12, lg: 6, mb: 2 }}
                label="Countries"
                id="country-selector"
                options={countries?.map((country) => {
                  return { label: country.Country, id: country.ID };
                })}
                placeholder="Select a Country"
                value={country}
                setValue={setCountry}
                helperText="Please select a country"
                loading={loading}
                func={countryChange}
              />

              <AutoCompleteSelector
                style={{ xs: 12, lg: 6, mb: 2 }}
                label="States"
                id="state-selector"
                options={states?.map((state) => {
                  return { label: state.State, id: state.ID };
                })}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                placeholder="Select a State"
                value={state}
                setValue={setState}
                helperText="Please select a state"
                disabled={country ? false : true}
                loading={loading}
                func={stateChange}
              />

              <AutoCompleteSelector
                style={{ xs: 12, lg: 6, mb: 2 }}
                label="Cites"
                id="cites-selector"
                options={cities?.map((city) => {
                  return { label: city.City, id: city.ID };
                })}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                placeholder="Select a City"
                value={city}
                setValue={setCompanyType}
                disabled={state ? false : true}
                helperText="Please select a city"
                loading={loading}
                func={cityChange}
              />
              <InputText
                label="Community"
                placeholder="Enter the community"
                helperText="Please enter the community"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="Office Address"
                placeholder="Enter the office address"
                helperText="Please enter the office address"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="Billing Reference"
                placeholder="Enter the billing reference"
                helperText="Please enter the billing reference"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />
              {/* <InputText
                label="Google Map Link"
                placeholder="Enter the map url"
                helperText="Please enter the map url"
                type="url"
                style={{ xs: 12, lg: 6 }}
              /> */}
            </Grid>
          </Container>

          <Container title="Company Presentation" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid container spacing={2} alignItems="center">


                  <InputText
                    label="Google Map Link"
                    placeholder="Google Map URL"
                    helperText="Please enter Google Map URL for Company Location"
                    // InputProps={{
                    //   endAdornment: (
                    //     <InputAdornment position="end">
                    //       <LinkTwoToneIcon />
                    //     </InputAdornment>
                    //   )
                    // }}
                    type="text"
                    style={{ xs: 12, lg: 6 }}
                  />
                  <Grid item xs={12} lg={6}>
                    <InputLabel required>Place</InputLabel>
                    <MapAutocomplete placeHolder onChangeAddress={setAddress} country={setCountry} state={setState} value="uae" />
                    <FormHelperText>Please enter place address</FormHelperText>
                  </Grid>
                    <Map locationAddress={address}  xs={12} lg={12}/>
                </Grid>
              </Grid>
          </Container>

          <Container title="Company Presentation" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
              <InputText
                label="Company Website"
                placeholder="Enter the company website"
                helperText="Please enter the company website"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />

              <InputText
                label="Company Email Address"
                placeholder="Enter the company email address"
                helperText="Please enter the company email address"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />

              <InputText
                label="Company Contact Number"
                placeholder="Enter the company Contact Number"
                helperText="Please enter the company Contact Number"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="Company Description"
                placeholder="Enter the company description"
                helperText="Please enter the company description"
                type="text"
                style={{ xs: 12, lg: 6 }}
              />

              <FileUpload
                label="Company logo"
                placeholder="Enter the company logo"
                helperText="Please enter the company logo"
                type="file"
                style={{ xs: 12, lg: 6 }}
                image={{ alt: 'Company Logo Preview', width: '250px', height: '250px' }}
              />
              <FileUpload
                label="Company Cover Image"
                placeholder="Enter the company cover image"
                helperText="Please enter the company cover image"
                type="file"
                style={{ xs: 12, lg: 6 }}
                image={{ alt: 'Cover Image Preview', width: '250px', height: '250px' }}
              />
            </Grid>
          </Container>
          <Container style={{ xs: 12 }} title="Social Media">
            <Grid container spacing={2} alignItems="center">
              <InputText
                label="Facebook"
                type="url"
                placeholder="Enter Company Facebook Profile"
                helperText="Please enter company facebook profile"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="Instagram"
                type="url"
                placeholder="Enter Company Instagram Profile"
                helperText="Please enter company instagram profile"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="LinkedIn"
                type="url"
                placeholder="Enter Company LinkedIn Profile"
                helperText="Please enter company linkedIn profile"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="Twitter"
                type="url"
                placeholder="Enter Company Twitter Profile"
                helperText="Please enter company twitter profile"
                style={{ xs: 12, lg: 6 }}
              />
            </Grid>
          </Container>
          <Container title="Company Admin Contact Details" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="First Name"
                placeholder="Admin First Name"
                helperText="Please enter admin first name"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Last Name"
                placeholder="Admin Last Name"
                helperText="Please enter admin last name"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Email Address"
                placeholder="Admin Email Address"
                helperText="Please enter admin email address"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Phone Number"
                placeholder="Admin Phone Number"
                helperText="Please enter admin phone number"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Number of Employees"
                placeholder="Number of Employees"
                helperText="Please enter Number of Employees"
                type="text"
              />
              <Selector
                helperText="Please choose your purchased subscription duration"
                style={{ xs: 12, lg: 4 }}
                label="Subscription Duration"
                id="select"
                options={['1 Month', '3 Months', '6 Months', '9 Months', '12 Months']}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Subscription Start Date"
                placeholder="Subscription Start Date"
                helperText="Please enter subscription start date"
                type="date"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Subscription End Date"
                placeholder="Subscription End Date"
                helperText="Please enter subscription end date"
                type="date"
              />
              <FileUpload
                style={{ xs: 12, lg: 6 }}
                label="Upload Profile Picture"
                placeholder="Upload Profile Picture"
                helperText="Please enter upload profile picture"
                type="file"
                image={{ alt: 'Admin Profile Preview', width: '250px', height: '250px' }}
              />
            </Grid>
          </Container>
          <Container title="Bank Account Details" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Account Number"
                placeholder="Account Number"
                helperText="Please enter account number"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Account Name"
                placeholder="Account Name"
                helperText="Please enter account name"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="IBAN Number"
                placeholder="IBAN Number"
                helperText="Please enter IBAN number"
                type="text"
              />
              <InputText style={{ xs: 12, lg: 4 }} label="Currency" placeholder="Currency" helperText="Please enter currency" type="text" />
              <InputText style={{ xs: 12, lg: 4 }} label="Country" placeholder="Country" helperText="Please enter country" type="country" />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Bank Name"
                placeholder="Bank Name"
                helperText="Please enter bank name"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Bank Branch"
                placeholder="Bank Branch"
                helperText="Please enter bank branch"
                type="text"
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Swift Code"
                placeholder="Swift Code"
                helperText="Please enter swift code"
                type="text"
              />
            </Grid>
          </Container>
          <SubmitButton />
          <Grid item xs={12} lg={5} spacing={gridSpacing}>
            <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
              Record Added Successfully!
            </Alert>
          </Grid>
        </Grid>
      </Page>
    </LoadScript>
  );
}

ColumnsLayouts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ColumnsLayouts;
