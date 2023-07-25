import { Button, Checkbox, FormControlLabel, FormHelperText, Grid, InputLabel } from '@mui/material';
import { LoadScript } from '@react-google-maps/api';
import Map from 'components/map/google-map';
import MapAutocomplete, { NormalMapAutocomplete } from 'components/map/maps-autocomplete';
// material-ui
import {
  Grid,
  FormHelperText,
  Button,
  FormControlLabel,
  Checkbox,
  InputLabel
} from '@mui/material';
// project imports
import Layout from 'layout';
import Categorization from './helper/Categorization';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import Layout from 'layout';
import { useState } from 'react';
import { gridSpacing } from 'store/constant';
import Categorization from './helper/Categorization';
import SubmitButton from 'components/Elements/SubmitButton';
import AutoCompleteSelector, { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import Selector from 'components/InputArea/Selector';
import InputText from 'components/InputArea/TextInput';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { arrayValidator, numberValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import PopUp from 'components/InputArea/PopUp';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllDeveloperCompany,
  getCompanyByType,
  getFacilities,
  getPropertyTypes,
  getSubDevCompany
} from 'store/slices/company-section/action/company';
import { getAllCountries, getAllCurrencies, getCountries, getStateCity } from 'store/slices/country-section/actions/countries';
import { useGetStatesOrCitiesQuery } from 'store/services/country/countryApi';
import {
  useCreateProjectMutation,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useGetPropertyTypeQuery
} from 'store/services/project/projectApi';

function AddProject() {
  const dispatch = useDispatch();

  const [countryLocationID, setCountryLocationID] = useState(null);
  const [isState_Id, setIsState_Id] = useState({ id: null, isState: null });
  const [address, setAddress] = useState('Dubai');
  const [single, setSingle] = useState(false);
  const [shared, setShared] = useState(false);
  const [propertyType, setPropertyType] = useState([]);
  const [long, setlong] = useState(null);
  const [lat, setlat] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  //API============================================================================================================
  const { data: Types, isLoading, isError } = useGetPropertyTypeQuery();
  const { data: Allfacilities } = useGetAllfacilitiesQuery();
  const { data: SharedStates } = useGetStatesOrCitiesQuery(countryLocationID, {
    skip: countryLocationID === null || countryLocationID === undefined
  });
  const [createProject, result] = useCreateProjectMutation();
  const { data: brokerComp, error: brokerCompError } = useGetBrokerCompaniesByCitiesQuery(isState_Id, {
    skip: isState_Id === null || isState_Id === null
  });
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllCountries());
    dispatch(getAllCurrencies());
    dispatch(getAllDeveloperCompany());
    dispatch(getPropertyTypes());
    dispatch(getFacilities());
    dispatch(getCompanyByType());
  }, [dispatch]);

  const { countries, stateCity } = useSelector((state) => state.countries);
  const { masterDeveloper, subdev } = useSelector((state) => state.companies);

  //PHASES====================================================================================
  const handleDelete = (index, values, setFieldValues) => {
    const updatedPhases = values.phases?.filter((phase, idx) => idx !== index);
    setFieldValues('phases', updatedPhases);
  };

  const DynamicInput = ({ num, values, setFieldValues, onSelect, DeleteFunc }) => {
    const size = 5.1;
    const MAP_SIZE = 1.2;
    const phaseID = num;
    const [open, setOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [mapSubmitted, setMapSubmitted] = useState(false);
    useEffect(() => {
      setFieldValues(`phases[${num}].id`, num + 1);
      setFieldValues('numberofPhases', num + 1);
    }, []);

    if (isLoading) return null;

    return (
      <>
        <InputText
          label="Phase Name"
          placeholder="Phase Name"
          helperText="Please enter phase name"
          style={{ xs: 12, lg: size }}
          type="text"
          id={`phases[${num}].phaseName`}
          name={`phases[${num}].phaseName`}
          required
        />
        <InputText
          label="Number of Properties"
          placeholder="Number of Properties"
          helperText="Please enter number of properties"
          style={{ xs: 12, lg: size }}
          id={`phases[${num}].NoOfProperties`}
          name={`phases[${num}].NoOfProperties`}
          required
          type="number"
        />

        <Grid xs={6} lg={MAP_SIZE} justifyContent="center" fullWidth>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            variant={mapSubmitted ? 'contained' : 'outlined'}
            fullWidth
            sx={{ margin: '19px 0px 0px 8px', height: '48px' }}
          >
            {mapSubmitted ? 'Edit Location' : 'Select Location'}
          </Button>
        </Grid>
        <PopUp title="Use the Map" opened={open} setOpen={setOpen} size={'xl'} fullWidth>
          <Map
            locationAddress={address}
            setFieldValues={setFieldValues}
            xs={12}
            num={num}
            phaseID={phaseID}
            lg={12}
            values={values}
            height={'65vh'}
            forPhase={true}
            close={setOpen}
            setSubmitted={setMapSubmitted}
          />
        </PopUp>
        <Grid xs={6} lg={0.5} justifyContent="center" fullWidth>
          <Button
            onClick={() => {
              DeleteFunc(num, values, setFieldValues);
            }}
            fullWidth
            variant="outlined"
            color="error"
            sx={{ margin: '19px 0px 0px 8px', height: '48px' }}
          >
            <CloseIcon />
          </Button>
        </Grid>
      </>
    );
  };

  const resetComponents = (phaseType) => {
    if (phaseType) {
      setPhases((prev) => {
        const newPhases = [prev[0]];

        return newPhases;
      });
    }
  };

  useEffect(() => {
    resetComponents(single);
  }, [single]);

  //PROPERTY DETAILS============================================================================
  const SinglePhase = (key) => {
    switch (key) {
      case 'Furnished':
        return (
          <>
            <AutoCompleteSelector
              label="Furnished"
              required
              options={['Furnished', 'Semi-Furnished', 'Not Furnished']}
              placeholder="furnished"
              style={{ xs: 12, lg: 4 }}
              id="isfurnished"
              name="isfurnished"
              helperText="Please select property status"
            />
          </>
        );
      case 'No. Of Floors':
        return (
          <>
            <InputText
              label="No. of Floors"
              required
              type="number"
              placeholder="Number of bedrooms"
              style={{ xs: 12, lg: 4 }}
              id="noOfFloors"
              name="noOfFloors"
              helperText="Please select property status"
            />
          </>
        );
      case 'Price':
        return (
          <>
            <InputText
              label="Price"
              required
              placeholder="enter the price"
              style={{ xs: 12, lg: 4 }}
              id="price"
              name="price"
              helperText="Please select property status"
            />
          </>
        );
    }
  };
  const SinglePhasesInputs = propertyType?.map((component) => component.facts?.map((fact) => SinglePhase(fact)));

  const validationSchema = Yup.object({
    projectTitle: stringValidator('Please provide a title'),
    locationCountrySelect: objectValidator('please select a country'),
    mapUrl: stringValidator('Please enter a map url'),
    locationCitySelector: objectValidator('please select a city'),
    locationState: objectValidator('please select a state'),
    propertyStatus: objectValidator('please enter the property status'),
    propertyTitle: stringValidator('Please enter the property title'),
    arabicPropertyTitle: stringValidator('Please enter the arabic title'),
    propertyDescription: stringValidator('Please enter the property description'),
    arabicPropertyDescription: stringValidator('Please enter the arabic description'),
    phases: arrayValidator(),
    propertyType: objectValidator('Please enter the property type'),
    view: stringValidator('Please enter the view details'),
    noOfBedrooms: numberValidator('Please enter the number of bedrooms'),
    noOfbathrooms: numberValidator('Please enter the number of bathrooms'),
    plotArea: numberValidator('please enter the plot area'),
    isfurnished: objectValidator('please enter the furnish status'),
    noOfFloors: numberValidator('Please enter the number of floors'),
    price: numberValidator('Please enter the price'),
    builtUpArea: numberValidator('please enter the built up area'),
    parking: stringValidator('please enter the parking area'),
    ownership: stringValidator('please enter the ownership status'),
    completionStatus: stringValidator('please enter the completion status'),
    plotAreaMin: numberValidator('please enter the minimum plot area'),
    plotAreaMax: numberValidator('please enter the maximum plot area'),
    noOfunits: numberValidator('please enter the number of available units'),
    availableUnits: numberValidator('please enter the number of available units'),
    serviceCharge: numberValidator('please enter the service charge')
  });
  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places', 'drawing']}>
      <Page title="Add Project">
        <>
          <Grid container spacing={gridSpacing}>
            <Formik
              initialValues={{
                projectTitle: '',
                brokerCompanies: null,
                detailsCountrySelect: '',
                detailsStateSelector: '',
                masterDeveloperSelector: '',
                subDeveloperCompanySelector: '',
                phaseType: 'single',
                phases: [{ id: null, phaseName: '', NoOfProperties: null, polygonCoords: [] }],
                numberofPhases: 1,
                isshared: shared,
                locationCountrySelect: '',
                locationAddress: '',
                locationCitySelector: '',
                locationDistrict: '',
                locationState: '',
                locationCommunity: '',
                locationSubCommunity: '',
                propertyStatus: '',
                mapUrl: '',
                lat: 27,
                long: 25,
                propertyType: propertyType,
                projectView: '',
                parking: '',
                ownerShip: '',
                completionStatus: '',
                isfurnished: '',
                noOfFloors: '',
                price: '',
                noOfunits: '',
                availableUnits: '',
                serviceCharge: '',
                lifeStyleSelector: '',
                ownershipSelector: '',
                plotAreaMin: '',
                plotAreaMax: '',
                serviceCharge: '',
                projectStartDate: '',
                projectCompletionDate: '',
                nooffloors: '',
                noofunits: '',
                propertyTitle: '',
                arabicPropertyTitle: '',
                propertyDescription: '',
                arabicPropertyDescription: '',
                facilities: checkedItems
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const ProjectData = {
                  project_name: values.projectTitle,
                  parent_developer_company_id: values?.masterDeveloperSelector?.id,
                  branch_developer_company_id: values?.subDeveloperCompanySelector.ID,
                  ref_number: null,
                  country_id: values?.locationCountrySelect?.ID,
                  state_id: values?.detailsStateSelector?.ID,
                  city_id: values?.locationCitySelector?.id,
                  community_id: values?.locationCommunity?.ID,
                  sub_community_id: values?.locationSubCommunity?.ID,
                  lat: lat?.toString() || '25',
                  lng: long?.toString() || '100',
                  is_shared: shared,
                  property_title: values.propertyTitle,
                  property_title_arabic: values.property_title_arabic,
                  description: values.propertyDescription,
                  description_arabic: values.arabicPropertyDescription,
                  completion_status_id: values.completionStatus,
                  no_of_floors: values.noOfFloors,
                  no_of_unit_types: values.no_of_unit_types,
                  start_date: values.start_date,
                  completion_date: values.completion_date,
                  handover_date: values.handover_date,
                  ownership_id: values.ownerShip,
                  starting_price: values.starting_price,
                  service_charges: values.serviceCharge,
                  'property_type_i[]': propertyType?.map((type) => type.id),
                  'facilities_id[]': checkedItems,
                  'broker_companies_id[]': values.brokerCompanies?.map((broker) => broker.id),
                  'phases[]': values.phases?.map((phase) => {
                    return {
                      name: phase?.phaseName,
                      no_of_unittypes: phase?.NoOfProperties,
                      polygons: phase?.polygonCoords?.map((poly) => {
                        return {
                          lat: poly?.lat,
                          lng: poly?.lng
                        };
                      })
                    };
                  })
                };

                const data = JSON.stringify(ProjectData);
                createProject(data);
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
                          id="projectTitle project-title"
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
                          name="isshared"
                          id="isshared"
                        />

                        <Grid item lg={12}></Grid>
                        {shared && (
                          <>
                            <AutoCompleteSelector
                              label="Country"
                              placeholder="Select Country"
                              options={countries}
                              getOptionLabel={(country) => country.Country || ''}
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please select country"
                              name="detailsCountrySelect"
                              id="detailsCountrySelect"
                              func={(newValue) => {
                                setCountryLocationID(newValue?.ID);
                              }}
                            />

                            <AutoCompleteSelector
                              helperText="Please select country"
                              label="State"
                              disabled={props.values.detailsCountrySelect ? false : true}
                              placeholder="Select State"
                              options={SharedStates?.data || []}
                              getOptionLabel={(state) => state.Title || ''}
                              style={{ xs: 12, lg: 4 }}
                              id="detailsStateSelector"
                              name="detailsStateSelector"
                              func={(newValue) => {
                                setIsState(newValue?.IsState);
                                setStateId(newValue?.ID);
                                setIsState_Id({
                                  id: newValue?.ID,
                                  isState: newValue?.IsState
                                });
                              }}
                            />

                            <MultipleAutoCompleteSelector
                              disabled={props.values?.detailsStateSelector ? false : true}
                              label="Broker Company"
                              placeholder="Select company"
                              options={brokerCompError ? [] : brokerComp?.data || []}
                              getOptionLabel={(broker) => broker?.company_name || ''}
                              helperText="Please select a company"
                              style={{ xs: 12, lg: 4 }}
                              func={(newValue) => {
                                props.setFieldValue('brokerCompanies', newValue);
                              }}
                            />
                          </>
                        )}

                        <AutoCompleteSelector
                          label="Master Developer"
                          placeholder="Select Master Developer"
                          options={masterDeveloper}
                          getOptionLabel={(company) => company.company_name || ''}
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
                          options={subdev}
                          getOptionLabel={(sub) => sub.CompanyName || ''}
                          style={{ xs: 12, lg: 4 }}
                          id="subDeveloperCompanySelector"
                          name="subDeveloperCompanySelector"
                          helperText="Please select sub developer company"
                        />

                        <Grid item lg={18}></Grid>

                        {props.values.phaseTypeSelector == 2 ? setSingle(true) : setSingle(false)}

                        <Selector
                          id="phaseType"
                          name="phaseType"
                          label="Phase Type"
                          placeholder="Select Phase Type"
                          options={[
                            { value: 'single', label: 'single' },
                            { value: 'multiple', label: 'multiple' }
                          ]}
                          getOptionLabel={(type) => type.label || ''}
                          style={{ xs: 12, lg: 4 }}
                        />
                        <Grid item lg={8}></Grid>

                        {props.values.phaseType === 'multiple' && (
                          <>
                            {/* Iterate through each phase in the 'phases' array */}
                            {props.values?.phases?.map((phase, index) => {
                              return (
                                // Render the 'DynamicInput' component for each phase
                                <DynamicInput
                                  setFieldValues={props.setFieldValue}
                                  DeleteFunc={handleDelete}
                                  values={props.values}
                                  num={index}
                                  key={index}
                                />
                              );
                            })}

                            {/* Container for a button to add more phases */}
                            <Grid container justifyContent="center" style={{ xs: 12, lg: 7, marginTop: 20 }}>
                              <Button
                                variant="outlined"
                                sx={{ margin: '0px 0px 0px 8px' }}
                                fullWidth
                                onClick={() => {
                                  // Update the 'numberofPhases' field with the current number of phases
                                  props.setFieldValue('numberofPhases', props.values.phases.length);

                                  // Create a new phase object with default values
                                  const newPhases = {
                                    id: null,
                                    phaseName: '',
                                    NoOfProperties: null,
                                    locationAddress: ''
                                  };

                                  // Add the new phase to the 'phases' array using spread operator
                                  props.setFieldValue('phases', [...props.values.phases, newPhases]);
                                }}
                              >
                                Add More
                              </Button>
                            </Grid>
                          </>
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
                          options={countries}
                          getOptionLabel={(country) => country.Country || ''}
                          required
                          style={{ xs: 12, lg: 6 }}
                          helperText="Please select country"
                          name="locationCountrySelect"
                          id="locationCountrySelect"
                          func={(newValue) => {
                            dispatch(getStateCity(newValue.ID));
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
                          options={stateCity?.map((state) => {
                            return { label: state.Title, id: state.ID };
                          })}
                          id="locationState"
                          name="locationState"
                          required
                        />

                        <Grid item xs={12} lg={6}>
                          <InputLabel>Place</InputLabel>
                          <MapAutocomplete placeHolder onChangeAddress={setAddress} value="uae" setlong={setlong} setlat={setlat} />
                          <FormHelperText>Please enter place address</FormHelperText>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <AutoCompleteSelector
                            label="City"
                            placeholder="Select City"
                            options={stateCity?.map((state) => {
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
                          <Map normallng={long} normallat={lat} locationAddress={address} height={'30vh'} xs={12} lg={12} />
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>

                  {props.values.phaseType === 'single' && (
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

                            <MultipleAutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Property Type"
                              placeholder="Select Property Type"
                              options={isError || isLoading ? [] : Types?.data || []}
                              getOptionLabel={(property) => property?.title || ''}
                              helperText="Please select property type"
                              required
                              func={(e, value) => {
                                setPropertyType(e);
                                props.setFieldValue('propertyType', e);
                              }}
                            />
                            <InputText
                              label="View"
                              required
                              placeholder="view"
                              style={{ xs: 12, lg: 4 }}
                              id="view"
                              name="view"
                              helperText="Please enter the view"
                            />

                            <InputText
                              label="Parking"
                              required
                              placeholder="Parking"
                              style={{ xs: 12, lg: 4 }}
                              id="parking"
                              name="parking"
                              helperText="parking"
                              type="number"
                            />
                            <InputText
                              label="Ownership"
                              required
                              placeholder="Ownership"
                              style={{ xs: 12, lg: 4 }}
                              id="ownerShip"
                              name="ownerShip"
                              helperText="Ownership"
                            />
                            <InputText
                              label="Completion status"
                              required
                              placeholder="enter the completion status"
                              style={{ xs: 12, lg: 4 }}
                              id="completionStatus"
                              name="completionStatus"
                              helperText="Please select the completion status"
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
                              label="Handover Date"
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please enter the project handover date"
                              id="projectHandoverDate"
                              required
                              name="projectHandoverDate"
                            />

                            <InputText
                              label="No. Of Units"
                              required
                              type="number"
                              placeholder="Number of bedrooms"
                              style={{ xs: 12, lg: 4 }}
                              id="noOfunits"
                              name="noOfunits"
                              helperText="Please select the number of units"
                            />
                            <InputText
                              label="Available Units"
                              required
                              type="number"
                              placeholder="please enter the umber of available units"
                              style={{ xs: 12, lg: 4 }}
                              id="availableUnits"
                              name="availableUnits"
                              helperText="Please select the number of available units"
                            />
                            <InputText
                              label="Service Charge"
                              required
                              type="number"
                              placeholder="service charge amount"
                              style={{ xs: 12, lg: 4 }}
                              id="serviceCharge"
                              name="serviceCharge"
                              helperText="Please enter the service charge amount"
                            />

                            <>{SinglePhasesInputs}</>
                            <Grid lg={12} xs={12}></Grid>
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
                  )}

                  <Grid item xs={12}>
                    <MainCard title="Facilities">
                      <Grid container spacing={2} sx={{ padding: '10px 17px' }}>
                        {Allfacilities?.data &&
                          Object.keys(Allfacilities?.data).map((category) => {
                            return (
                              <Categorization
                                list={Allfacilities.data[category]}
                                list_header={category}
                                icon={Allfacilities.data[category].icon}
                                setFieldValue={props.setFieldValue}
                                setCheckedItems={setCheckedItems}
                              />
                            );
                          })}
                      </Grid>
                    </MainCard>
                  </Grid>
                  <SubmitButton />
                  <Button
                    onClick={() => {
                      console.log('values=======> ', props.values);
                    }}
                  >
                    test
                  </Button>
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
