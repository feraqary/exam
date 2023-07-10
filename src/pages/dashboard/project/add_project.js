// material-ui
import { Grid, TextField, FormHelperText, Button, Box, IconButton } from '@mui/material';

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
import { ToastContainer } from 'react-toastify';
//assets
import { useEffect } from 'react';
import InputText, { NormalInputText } from 'components/InputArea/TextInput';
import Selector, { NormalSelector } from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { fileValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import {
  getCountries,
  getStates,
  getCities,
  getCommunities,
  getSubCommunities,
  getAllCountries,
  getAllCurrencies,
  getStateCity
} from 'store/slices/country-section/actions/countries';
import { getAllDeveloperCompany, getSubDevCompany } from 'store/slices/company-section/action/company';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { useGetCountriesQuery } from 'store/slices/location/locationHooks';
// ==============================|| Add Project ||============================== //
const countries = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];
const cities = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];
const propertyTypeData = ['UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];

function AddProject() {
  // const { data, isLoading, isFetching, isError, error } = useGetCountriesQuery();

  // console.log('location: ', useGetCountriesQuery());
  // console.log('fetching:  ', isFetching);
  // console.log('Error:  ', error);
  // console.log('data:  ', data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllCountries());
    dispatch(getAllCurrencies());
    dispatch(getAllDeveloperCompany());
    setPhaseType(1);
    console.log(cities);
  }, [dispatch]);

  const { countries, loading, states, cities, stateCity, communities, bankCountries, subCommunities, currencies } = useSelector(
    (state) => state.countries
  );

  const {
    companyInformation,
    error: companyError,
    loading: companyLoading,
    companyTypes,
    mainServices,
    services,
    masterDeveloper,
    subdev
  } = useSelector((state) => state.companies);

  useEffect(() => {
    console.log(stateCity);
    console.log(masterDeveloper);
  }, [stateCity, masterDeveloper]);
  // this is aglobal handle change that requires both value and of the input its used in to return an object with name: value
  const [city, setCity] = useState(null);
  const [developerCompany, setDeveloperCompany] = useState(null);
  const [subDeveloperCompany, setSubDeveloperCompany] = useState(null);

  const [propertyType, setPropertyType] = useState(null);
  const [phaseType, setPhaseType] = useState(1 ? 'Single' : 'multiple');

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

  const removeComponent = () => {
    setPhases((prev) => {
      // Create a copy of the phases array
      const newPhases = [...prev];

      // Remove the last element from the array
      if (newPhases.length != 1 && newPhases.length > 1) {
        newPhases.pop();
      }

      // Return the updated array
      return newPhases;
    });
  };

  const resetComponents = (phaseType) => {
    if (phaseType == 1) {
      setPhases((prev) => {
        // Create a new array containing only the first element
        const newPhases = [prev[0]];

        // Return the updated array
        return newPhases;
      });
    }
  };
  useEffect(() => {
    resetComponents(phaseType);
  }, [phaseType]);

  const validationSchema = Yup.object({
    projectTitle: stringValidator('Please provide a title'),
    detailsCountrySelect: objectValidator('Please select a country'),
    detailsCitySelector: objectValidator('please select a city'),
    masterDeveloperSelector: objectValidator('Please select a company'),
    subDeveloperCompanySelector: objectValidator('please select a company'),
    locationCountrySelect: objectValidator('please select a country'),
    mapUrl: stringValidator('Please enter a map url'),
    locationCitySelector: objectValidator('please select a city'),
    locationState: objectValidator('please select a state'),
    locationDistrict: objectValidator('please select a district'),
    locationCommunity: objectValidator('please select a community'),
    locationSubCommunity: objectValidator('please select a sub community')
  });

  const DynamicInput = ({ first }) => {
    const P_TYPE = phases.length != 1 && phases.length > 1 && first != 0;
    const size = P_TYPE ? 3.82 : 4;

    return (
      <>
        <InputText
          label="Phase Name"
          placeholder="Phase Name"
          helperText="Please enter phase name"
          style={{ xs: 12, lg: size }}
          type="text"
          id="phaseName"
          name="phaseName"
        />
        <InputText
          label="Number of Properties"
          placeholder="Number of Properties"
          helperText="Please enter number of properties"
          style={{ xs: 12, lg: size }}
          type="text"
          id="numberofProperties"
          name="numberofProperties"
        />
        <InputText
          label="Location Address"
          placeholder="Location Map URL"
          helperText="Please enter the location address map url"
          type="text"
          id="locationAddress"
          name="locationAddress"
          style={{ xs: 12, lg: size }}
        />
        {P_TYPE ? (
          <>
            <Box textAlign="center" sx={{ margin: '17px 0px 0px 8px' }}>
              <IconButton lg={3} color="error" size="large" variant="outlined" alignItems="center">
                <CloseIcon
                  onClick={() => {
                    removeComponent();
                  }}
                />
              </IconButton>
            </Box>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  const addPhases = () => {
    return phases.map((phase, index) => {
      return (
        <>
          <DynamicInput key={index} first={index} />
        </>
      );
    });
  };

  const options = [
    { label: 'Broker Company', id: 1 },
    { label: 'Developer Company', id: 2 },
    { label: 'Service Company', id: 3 }
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places']}>
      <Page title="Add Project">
        <>
          <Grid container spacing={gridSpacing}>
            <Formik
              initialValues={{
                projectTitle: '',
                detailsCountrySelect: '',
                detailsCitySelector: '',
                masterDeveloperSelector: '',
                subDeveloperCompanySelector: '',
                phaseType: phaseType,
                phaseName: '',
                numberofProperties: '',
                locationAddress: '',
                locationCountrySelect: '',
                mapUrl: '',
                locationCitySelector: '',
                locationDistrict: '',
                locationCommunity: '',
                locationSubCommunity: '',

                propertyStatus: '',
                propertyType: '',
                lifeStyleSelector: '',
                ownershipSelector: '',
                plotAreaSelector: '',
                BuiltupAreaSelector: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {}}
              // onReset={(_) => {
              //   logoRef.current.value = '';
              //   iconRef.current.value = '';
              // }}
            >
              {(props) => (
                <>
                  <Grid item xs={12}>
                    <MainCard title="Project details">
                      <Grid container spacing={2} alignItems="center">
                        <InputText
                          label="Project Title"
                          placeholder="Project Title"
                          helperText="Please enter project title"
                          style={{ xs: 12, lg: 4 }}
                          type="text"
                          name="projectTitle"
                          id="projectTitle"
                          required={true}
                        />
                        <AutoCompleteSelector
                          label="Country"
                          placeholder="Select Country"
                          options={countries?.map((country) => {
                            return { label: country.Country, id: country.ID, flag: country.Flag };
                          })}
                          style={{ xs: 12, lg: 4 }}
                          value={country}
                          setValue={props.setFieldValue}
                          helperText="Please select country"
                          name="detailsCountrySelect"
                          id="detailsCountrySelect"
                          func={(newValue) => {
                            dispatch(getStateCity(newValue.id));
                            console.log(newValue);
                          }}
                        />

                        <AutoCompleteSelector
                          label="City"
                          placeholder="Select City"
                          options={stateCity.map((state) => {
                            return { label: state.Title, id: state.ID };
                          })}
                          style={{ xs: 12, lg: 4 }}
                          id="detailsCitySelector"
                          value={city}
                          setValue={props.setFieldValue}
                          helperText="Please select city"
                          name="detailsCitySelector"
                        />
                        <AutoCompleteSelector
                          label="Master Developer"
                          placeholder="Select Master Developer"
                          options={masterDeveloper?.map((company) => {
                            return { label: company.company_name, id: company.id };
                          })}
                          style={{ xs: 12, lg: 4 }}
                          value={developerCompany}
                          setValue={props.setFieldValue}
                          helperText="Please select master developer company"
                          id="masterDeveloperSelector"
                          name="masterDeveloperSelector"
                          func={(newValue) => {
                            dispatch(getSubDevCompany({ parentCompanyId: newValue.id, companyType: 2 }));
                          }}
                        />
                        <AutoCompleteSelector
                          label="Sub Developer Company"
                          placeholder="Select Sub Developer Company"
                          options={subdev?.map((sub) => {
                            return { label: sub.CompanyName, id: sub.ID };
                          })}
                          style={{ xs: 12, lg: 4 }}
                          id="subDeveloperCompanySelector"
                          name="subDeveloperCompanySelector"
                          value={subDeveloperCompany}
                          setValue={props.setFieldValue}
                          helperText="Please select sub developer company"
                        />

                        <Selector
                          id="phaseTypeSelector"
                          name="phaseTypeSelector"
                          label="Phase Type"
                          placeholder="Select Phase Type"
                          options={['Single', 'Multiple']}
                          style={{ xs: 12, lg: 4 }}
                          value={phaseType}
                          setValue={(e) => {
                            setPhaseType(e);
                          }}
                        />
                        <>{addPhases()}</>
                        {phaseType == 2 ? (
                          <>
                            <Grid container justifyContent="center" style={{ xs: 12, lg: 12, marginTop: 20 }}>
                              <Button variant="outlined" style={{ width: '10%' }} onClick={() => addComponent()}>
                                Add More
                              </Button>
                            </Grid>
                          </>
                        ) : (
                          <></>
                        )}
                      </Grid>
                    </MainCard>
                  </Grid>
                  <Grid item xs={12}>
                    <MainCard title="Location details">
                      <Grid container spacing={2} alignItems="center">
                        <AutoCompleteSelector
                          label="Country"
                          placeholder="Select Country"
                          options={countries?.map((country) => {
                            return { label: country.Country, id: country.ID, flag: country.Flag };
                          })}
                          style={{ xs: 12, lg: 6 }}
                          value={country}
                          setValue={props.setFieldValue}
                          helperText="Please select country"
                          name="locationCountrySelect"
                          id="locationCountrySelect"
                          func={(newValue) => {
                            dispatch(getStateCity(newValue.id));
                            console.log(newValue);
                          }}
                        />

                        <InputText
                          style={{ xs: 12, lg: 6 }}
                          label="Map URL"
                          placeholder="Address"
                          helperText="Please enter the location address"
                          type="text"
                          id="mapUrl"
                          name="mapUrl"
                        />
                        <AutoCompleteSelector
                          style={{ xs: 12, lg: 6 }}
                          label="State"
                          placeholder="State"
                          type="text"
                          helperText="Please enter the location's state"
                          options={stateCity.map((state) => {
                            return { label: state.Title, id: state.ID };
                          })}
                          value={state}
                          setValue={props.setFieldValue}
                          id="locationState"
                          name="locationState"
                        />

                        <Grid item xs={12} lg={6}>
                          <InputLabel required>Place</InputLabel>
                          <NormalMapAutocomplete
                            placeHolder
                            onChangeAddress={setAddress}
                            country={setCountry}
                            state={setState}
                            value="uae"
                          />
                          <FormHelperText>Please enter place address</FormHelperText>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <AutoCompleteSelector
                            label="City"
                            placeholder="Select City"
                            options={stateCity.map((state) => {
                              return { label: state.Title, id: state.ID };
                            })}
                            style={{ xs: 12, lg: 12 }}
                            id="locationCitySelector"
                            value={city}
                            setValue={props.setFieldValue}
                            helperText="Please select city"
                            name="locationCitySelector"
                          />
                          <AutoCompleteSelector
                            label="District"
                            placeholder="District"
                            type="text"
                            id="locationDistrict"
                            name="locationDistrict"
                            helperText="Please enter the location's district"
                            value={country}
                            setValue={props.setFieldValue}
                            options={['option 1', 'option 2', 'option 3']}
                            style={{ xs: 12, lg: 12 }}
                          />
                          <AutoCompleteSelector
                            label="Community"
                            placeholder="Community"
                            type="text"
                            id="locationCommunity"
                            name="locationCommunity"
                            helperText="Please enter the location's community"
                            value={country}
                            setValue={props.setFieldValue}
                            options={['option 1', 'option 2', 'option 3']}
                            style={{ xs: 12, lg: 12 }}
                          />
                          <AutoCompleteSelector
                            label="Sub Community"
                            placeholder="Sub Community"
                            type="text"
                            id="locationSubCommunity"
                            name="locationSubCommunity"
                            helperText="Please enter the location's sub community"
                            value={country}
                            setValue={props.setFieldValue}
                            options={['option 1', 'option 2', 'option 3']}
                            style={{ xs: 12, lg: 12 }}
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <NormalMap locationAddress={address} xs={12} lg={6} />
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>
                  {/* {phaseType == 1 ? (
                    <>
                      <Grid item xs={12}>
                        <MainCard title="Property Details">
                          <Grid container spacing={2} alignItems="center">
                            <AutoCompleteSelector
                              label="Property Status"
                              placeholder="Select Property Status"
                              options={['Upcoming', 'Under Construction', 'Completed', 'Off Plan', 'Ready']}
                              style={{ xs: 12, lg: 4 }}
                              id="propertyStatus"
                              name="propertyStatus"
                              value={props.values.propertyStatus}
                              setValue={props.setFieldValue}
                              helperText="Please select property status"
                            />
                            <AutoCompleteSelector
                              // multiple
                              label="Property Type"
                              placeholder="Select Property Type"
                              filterSelectedOptions
                              options={['apartment', 'villa', 'building', 'bungalow']}
                              style={{ xs: 12, lg: 4 }}
                              id="propertyType"
                              name="propertyType"
                              value={props.values.propertyType}
                              setValue={props.setFieldValue}
                              helperText="Please select property type"
                            />

                            <AutoCompleteSelector
                              label="Life Style"
                              placeholder="Select Life Style"
                              options={['luxury', 'Ultra Luxury', 'Standard', 'affordable']}
                              style={{ xs: 12, lg: 4 }}
                              id="lifeStyleSelector"
                              name="lifeStyleSelector"
                              value={props.values.lifeStyleSelector}
                              setValue={props.setFieldValue}
                              helperText="Please select life style"
                            />
                            <AutoCompleteSelector
                              label="Ownership"
                              placeholder="Select Ownership"
                              options={['Frehold', 'GCC Citizen', 'leashold', 'local citizen', 'other']}
                              style={{ xs: 12, lg: 4 }}
                              id="ownershipSelector"
                              name="ownershipSelector"
                              value={props.values.ownershipSelector}
                              setValue={props.setFieldValue}
                              helperText="Please select ownership"
                            />
                            <InputText
                              label="Plot Area (sqft)"
                              type="number"
                              placeholder="Select Plot Area"
                              style={{ xs: 12, lg: 4 }}
                              id="plotAreaSelector"
                              name="plotAreaSelector"
                              value={props.values.plotAreaSelector}
                              setValue={props.setFieldValue}
                              helperText="Please select plot area"
                            />

                            <InputText
                              style={{ xs: 12, lg: 4 }}
                              label="Built up Area (sqft)"
                              placeholder="Built up Area (sqft)"
                              type="number"
                              helperText="Please enter built up area (sqft)"
                              id="BuiltupAreaSelector"
                              name="BuiltupAreaSelector"
                              value={props.values.BuiltupAreaSelector}
                              setValue={props.setFieldValue}
                            />

                            <Grid item xs={12} lg={4}>
                              <InputLabel required>Area Range</InputLabel>
                              <Grid item row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <InputText
                                  label="Plot Area (sqft)"
                                  type="number"
                                  placeholder="Select Plot Area"
                                  id="plotAreaSelector"
                                  name="plotAreaSelector"
                                  value={props.values.plotAreaSelector}
                                  setValue={props.setFieldValue}
                                  style={{ width: '45%' }}
                                  helperText="Please select plot area"
                                />
                                <span style={{ fontWeight: 'bolder', fontSize: '1.7em' }}>:</span>
                                <InputText
                                  label="Plot Area (sqft)"
                                  type="number"
                                  style={{ width: '45%' }}
                                  placeholder="Select Plot Area"
                                  id="plotAreaSelector"
                                  name="plotAreaSelector"
                                  value={props.values.plotAreaSelector}
                                  setValue={props.setFieldValue}
                                  helperText="Please select plot area"
                                />
                              </Grid>
                              <FormHelperText>Please enter the area range</FormHelperText>
                            </Grid>
                            <AutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Starting Price"
                              placeholder="Starting Price"
                              type="number"
                              helperText="Please enter the starting price"
                            />
                            <AutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Service Charge"
                              placeholder="Service Charge"
                              type="number"
                              helperText="Please enter the service charge"
                            />
                            <AutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Start Date"
                              placeholder="Start Date"
                              type="date"
                              helperText="Please enter the start date"
                            />
                            <AutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Completion Date"
                              placeholder="Completion Date"
                              type="date"
                              helperText="Please enter the completion date "
                            />
                            <AutoCompleteSelector
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
                              id=""
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
                              description
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
                              description
                            />
                          </Grid>
                        </MainCard>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )} */}

                  <SubmitButton />
                </>
              )}
            </Formik>
          </Grid>
        </>
      </Page>
    </LoadScript>
  );
}

AddProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddProject;
