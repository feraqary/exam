// material-ui
import {
  Grid,
  TextField,
  FormHelperText,
  Button,
  Box,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  InputLabel
} from '@mui/material';
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
import { FastField, Formik } from 'formik';
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
import { getAllDeveloperCompany, getSubDevCompany, getPropertyTypes } from 'store/slices/company-section/action/company';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import { useGetCountriesQuery } from 'store/slices/location/locationHooks';
import { id } from 'date-fns/locale';
import PopUp from 'components/InputArea/PopUp';
// ==============================|| Add Project ||============================== //

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
    dispatch(getPropertyTypes());

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
    subdev,
    propertyTypes
  } = useSelector((state) => state.companies);
  console.log('property types: ', propertyTypes);

  useEffect(() => {
    console.log(stateCity);
    console.log(masterDeveloper);
  }, [stateCity, masterDeveloper]);
  // this is aglobal handle change that requires both value and of the input its used in to return an object with name: value
  const [city, setCity] = useState(null);
  const [developerCompany, setDeveloperCompany] = useState(null);
  const [subDeveloperCompany, setSubDeveloperCompany] = useState(null);

  const [phaseType, setPhaseType] = useState({ id: 1, type: 'single' });
  const [phaseTypeSelected, setPhaseTypeSelected] = useState(1);

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
    // detailsCountrySelect: objectValidator('Please select a country'),
    // detailsStateSelector: objectValidator('please select a State'),
    // masterDeveloperSelector: objectValidator('Please select a company'),
    // subDeveloperCompanySelector: objectValidator('please select a company'),
    locationCountrySelect: objectValidator('please select a country'),
    mapUrl: stringValidator('Please enter a map url'),
    locationCitySelector: objectValidator('please select a city'),
    locationState: objectValidator('please select a state'),
    propertyStatus: objectValidator('please enter the property status'),
    propertyTitle: stringValidator('Please enter the property title'),
    arabicPropertyTitle: stringValidator('Please enter the arabic title'),
    propertyDescription: stringValidator('Please enter the property description'),
    arabicPropertyDescription: stringValidator('Please enter the arabic description')
    // locationDistrict: objectValidator('please select a district'),
    // locationCommunity: objectValidator('please select a community'),
    // locationSubCommunity: objectValidator('please select a sub community')
  });

  const DynamicInput = ({ first, num }) => {
    const P_TYPE = phases.length != 1 && phases.length > 1 && first != 0;
    const size = P_TYPE ? 3.34 : 3.5;
    const MAP_SIZE = P_TYPE ? 0.9 : 1.5;
    const [open, setOpen] = useState(false);

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
          type="number"
          id="numberofPhases"
          name="numberofPhases"
        />
        <InputText
          label="Location Address"
          placeholder="Location Map URL"
          helperText="Please enter the location address map url"
          type="text"
          id="locationAddress"
          name="locationAddress"
          style={{ xs: 12, lg: size }}
          inputProps={<CloseIcon />}
        />
        <Grid xs={12} lg={MAP_SIZE} justifyContent="center">
          <Button
            onClick={() => {
              setOpen(true);
            }}
            variant="outlined"
            fullWidth
            sx={{ margin: '19px 0px 0px 8px', height: '48px' }}
          >
            Use map
          </Button>
        </Grid>
        <PopUp title="Use the Map" opened={open} setOpen={setOpen} size={'xl'} fullScreen>
          <Map locationAddress={address} xs={12} lg={12} height={'85vh'} />
        </PopUp>
        {P_TYPE ? (
          <>
            <Grid xs={12} lg={1} justifyContent="center" sx={{ marginLeft: '8px', width: '100%' }}>
              <Button
                onClick={() => {
                  removeComponent();
                }}
                variant="outlined"
                // fullWidth
                color="error"
                sx={{ margin: '19px 0px 0px 8px', height: '48px' }}
              >
                <CloseIcon />
              </Button>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  const addPhases = (num) => {
    return phases.map((phase, index) => {
      return (
        <>
          <DynamicInput num={index + 1} key={index} first={index} />
        </>
      );
    });
  };

  const [phasesnum, setPhasesnum] = useState(0);
  const [facilities, setfacilities] = useState([]);
  const [floors, setfloors] = useState({ label: '', id: true });
  const [shared, setShared] = useState(true);

  const isfloors = [
    { label: 'Apartment', id: true },
    { label: 'Farm', id: false },
    { label: 'Compound', id: false }
  ];
  const handleCheck = (e) => {
    setfacilities([...facilities, e]);
  };

  const testing = ['banks', 'rental pool', 'coffee shop', 'parking'];

  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places', 'drawing']}>
      <Page title="Add Project">
        <>
          <Grid container spacing={gridSpacing}>
            <Formik
              initialValues={{
                projectTitle: '',
                brokerCompany: '',
                detailsCountrySelect: '',
                detailsCitySelector: '',
                masterDeveloperSelector: '',
                subDeveloperCompanySelector: '',
                phaseType: phaseType,
                phaseName: '',
                numberofPhases: '',
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
                plotAreaMin: '',
                plotAreaMax: '',
                BuiltupAreaSelector: '',
                startingPrice: '',
                serviceCharge: '',
                projectStartDate: '',
                projectCompletionDate: '',
                handoverDate: '',
                nooffloors: '',
                noofunits: '',
                propertyTitle: '',
                arabicPropertyTitle: '',
                propertyDescription: '',
                arabicPropertyDescription: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log('project values: ', values);
              }}
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

                        <FormControlLabel
                          sx={4}
                          lg={4}
                          onChange={() => {
                            setShared(!shared);
                          }}
                          value={shared}
                          control={<Checkbox color="primary" />}
                          label={'Is Shared'}
                          labelPlacement="start"
                          style={{ margin: '24px 0px 0px 8px', height: '48px' }}
                        />
                        <Grid item lg={12}></Grid>

                        {shared && (
                          <>
                            <AutoCompleteSelector
                              label="Broker Company"
                              placeholder="Select company"
                              options={countries?.map((country) => {
                                return { label: country.Country, id: country.ID, flag: country.Flag };
                              })}
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please select a company"
                              name="brokerCompany"
                              id="BrokerCompany"
                              // func={(newValue) => {
                              //   dispatch(getStateCity(newValue.id));
                              //   console.log(newValue);
                              // }}
                            />
                            <AutoCompleteSelector
                              label="Country"
                              placeholder="Select Country"
                              options={countries?.map((country) => {
                                return { label: country.Country, id: country.ID, flag: country.Flag };
                              })}
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please select country"
                              name="detailsCountrySelect"
                              id="detailsCountrySelect"
                              func={(newValue) => {
                                dispatch(getStateCity(newValue.id));
                                console.log(newValue);
                              }}
                            />

                            <AutoCompleteSelector
                              label="State"
                              placeholder="Select State"
                              options={stateCity.map((state) => {
                                return { label: state.Title, id: state.ID };
                              })}
                              style={{ xs: 12, lg: 4 }}
                              id="detailsStateSelector"
                              helperText="Please select city"
                              name="detailsStateSelector"
                            />
                          </>
                        )}
                        <AutoCompleteSelector
                          label="Master Developer"
                          placeholder="Select Master Developer"
                          options={masterDeveloper?.map((company) => {
                            return { label: company.company_name, id: company.id };
                          })}
                          style={{ xs: 12, lg: 4 }}
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
                          helperText="Please select sub developer company"
                        />
                        <Grid item lg={18}></Grid>

                        <Selector
                          id="phaseTypeSelector"
                          name="phaseTypeSelector"
                          label="Phase Type"
                          placeholder="Select Phase Type"
                          options={['single', ' multiple']}
                          style={{ xs: 12, lg: 4 }}
                          setValue={(e) => {
                            console.log(e);
                            setPhaseTypeSelected(e);
                          }}
                        />
                        <Grid item lg={8}></Grid>
                        {phaseTypeSelected == 2 ? (
                          <>
                            {addPhases()}
                            <Grid container justifyContent="center" style={{ xs: 12, lg: 12, marginTop: 20 }}>
                              <Button
                                variant="outlined"
                                style={{ width: '10%' }}
                                onClick={() => {
                                  setPhasesnum(phasesnum + 1);
                                  addComponent();
                                }}
                              >
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
                          required
                          style={{ xs: 12, lg: 6 }}
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
                          required
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
                          id="locationState"
                          name="locationState"
                          required
                        />

                        <Grid item xs={12} lg={6}>
                          <InputLabel>Place</InputLabel>
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
                            helperText="Please select city"
                            name="locationCitySelector"
                            required
                          />
                          <AutoCompleteSelector
                            label="District"
                            placeholder="District"
                            type="text"
                            id="locationDistrict"
                            name="locationDistrict"
                            helperText="Please enter the location's district"
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
                            options={['option 1', 'option 2', 'option 3']}
                            style={{ xs: 12, lg: 12 }}
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <Map locationAddress={address} height={'30vh'} xs={12} lg={12} />
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>

                  {phaseTypeSelected == 1 ? (
                    <>
                      <Grid item xs={12}>
                        <MainCard title="Property Details">
                          <Grid container spacing={2} alignItems="center">
                            <AutoCompleteSelector
                              label="Property Status"
                              required
                              placeholder="Select Property Status"
                              options={['Upcoming', 'Under Construction', 'Completed', 'Off Plan', 'Ready']}
                              style={{ xs: 12, lg: 4 }}
                              id="propertyStatus"
                              name="propertyStatus"
                              helperText="Please select property status"
                            />

                            <AutoCompleteSelector
                               label="Property Type"
                              required
                              placeholder="Select Property Type"
                              options={propertyTypes}
                              getOptionLabel={(property) => property.Title || ''}
                              style={{ xs: 12, lg: 4 }}
                              id="propertyType"
                              name="propertyType"
                              helperText="Please select property type"
                            />

                            {floors.id === true ? (
                              <>
                                <InputText
                                  label="No Of Floors"
                                  placeholder="provide the number of Floors"
                                  style={{ xs: 12, lg: 4 }}
                                  type="number"
                                  id="nooffloors"
                                  name="nooffloors"
                                  helperText="Please provide the number of floors"
                                />
                                <InputText
                                  label="No Of Units."
                                  placeholder="Please provide the number of units"
                                  style={{ xs: 12, lg: 4 }}
                                  type="number"
                                  id="noofunits"
                                  name="noofunits"
                                  helperText="Please provide the number of units"
                                />
                              </>
                            ) : (
                              <></>
                            )}
                            <AutoCompleteSelector
                              label="Life Style"
                              required
                              placeholder="Select Life Style"
                              options={['luxury', 'Ultra Luxury', 'Standard', 'affordable']}
                              style={{ xs: 12, lg: 4 }}
                              id="lifeStyleSelector"
                              name="lifeStyleSelector"
                              helperText="Please select life style"
                            />
                            <AutoCompleteSelector
                              label="Ownership"
                              placeholder="Select Ownership"
                              options={['Frehold', 'GCC Citizen', 'leashold', 'local citizen', 'other']}
                              style={{ xs: 12, lg: 4 }}
                              id="ownershipSelector"
                              name="ownershipSelector"
                              helperText="Please select ownership"
                            />
                            <InputText
                              label="Plot Area (sqft)"
                              type="number"
                              placeholder="Select Plot Area"
                              style={{ xs: 12, lg: 4 }}
                              id="plotAreaSelector"
                              name="plotAreaSelector"
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
                            />

                            <Grid item xs={12} lg={4}>
                              <InputLabel>Area Range</InputLabel>
                              <Grid item row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <InputText
                                  label="Plot Area (sqft)"
                                  type="number"
                                  placeholder="Select Plot Area"
                                  id="plotAreaMin"
                                  name="plotAreaMin"
                                  value={props.values.plotAreaMin}
                                  setValue={props.setFieldValue}
                                  style={{ xs: 12, lg: 5.5 }}
                                  helperText="Please select plot area"
                                />
                                <span style={{ fontWeight: 'bolder', fontSize: '1.7em' }}>:</span>
                                <InputText
                                  label="Plot Area (sqft)"
                                  type="number"
                                  // xs={{ width: '45%' }}
                                  style={{ xs: 12, lg: 5.5 }}
                                  placeholder="Select Plot Area"
                                  id="plotAreaMax"
                                  name="plotAreaMax"
                                  value={props.values.plotAreaMax}
                                  setValue={props.setFieldValue}
                                  helperText="Please select plot area"
                                />
                              </Grid>
                              <FormHelperText>Please enter the area range</FormHelperText>
                            </Grid>
                            <InputText
                              style={{ xs: 12, lg: 4 }}
                              label="Starting Price"
                              placeholder="Starting Price"
                              type="number"
                              helperText="Please enter the starting price"
                              id="startingPrice"
                              name="startingPrice"
                            />

                            <InputText
                              label="Service Charge"
                              type="number"
                              placeholder="please enter the service charge"
                              style={{ xs: 12, lg: 4 }}
                              id="serviceCharge"
                              name="serviceCharge"
                              helperText="please enter the service"
                            />

                            <CustomDateTime
                              style={{ xs: 12, lg: 4 }}
                              label="Start Date"
                              helperText="Please enter the project start date"
                              id="projectStartDate"
                              name="projectStartDate"
                            />
                            <CustomDateTime
                              style={{ xs: 12, lg: 4 }}
                              label="Completion Date"
                              helperText="Please enter the project completion date"
                              id="projectCompletionDate"
                              name="projectCompletionDate"
                            />
                            <CustomDateTime
                              style={{ xs: 12, lg: 4 }}
                              label="Handover Date"
                              helperText="Please enter the project Handover date"
                              id="handoverDate"
                              name="handoverDate"
                            />
                            {/* <Grid xs={12} lg={4}></Grid> */}
                            <InputText
                              style={{ xs: 12, lg: 6 }}
                              label="Property Title"
                              required
                              placeholder="Property Title"
                              name="propertyTitle"
                              helperText="Please enter the property title"
                              type="text"
                              id="propertyTitle"
                            />
                            <InputText
                              style={{ xs: 12, lg: 6 }}
                              label="Arabic Property Title"
                              placeholder="Arabic Property Title"
                              helperText="Please enter the arabic property title"
                              type="text"
                              id="arabicPropertyTitle"
                              name="arabicPropertyTitle"
                              required
                            />
                            {/* <Grid item xs={12} lg={4}></Grid> */}
                            <InputText
                              style={{ xs: 12, lg: 6 }}
                              label="Property Description"
                              placeholder="Property Description"
                              type="text"
                              helperText="Please enter the property desciption"
                              multiline
                              rows={4}
                              required
                              fullWidth
                              description
                              id="propertyDescription"
                              name="propertyDescription"
                            />
                            <InputText
                              style={{ xs: 12, lg: 6 }}
                              label="Arabic Property Description"
                              placeholder="Arabic Property Description"
                              type="text"
                              helperText="Please enter the arabic property desciption"
                              multiline
                              rows={4}
                              fullWidth
                              required
                              id="arabicPropertyDescription"
                              name="arabicPropertyDescription"
                              description
                            />
                          </Grid>
                        </MainCard>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )}

                  <Grid item xs={12}>
                    <MainCard title="Facilities">
                      <Grid container spacing={2} sx={{ padding: '10px 17px' }} alignItems="center">
                        {/* {facilities} */}
                        {testing.map((x, i) => {
                          return (
                            <FormControlLabel
                              onChange={(e) => {
                                if (e.target.checked == true) {
                                  console.log(e.target.value);
                                  setfacilities([...facilities, e.target.value]);
                                } else {
                                  const updatedState = facilities.filter((item) => item !== e.target.value);
                                  setfacilities(updatedState);
                                }
                              }}
                              value={x}
                              control={<Checkbox color="primary" />}
                              label={x}
                              labelPlacement="end"
                            />
                          );
                        })}
                      </Grid>
                    </MainCard>
                  </Grid>

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
