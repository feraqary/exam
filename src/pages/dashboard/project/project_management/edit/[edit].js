import { Button, Checkbox, FormControlLabel, FormHelperText, Grid, InputLabel } from '@mui/material';
import { LoadScript } from '@react-google-maps/api';
import Map from 'components/map/google-map';
import MapAutocomplete from 'components/map/maps-autocomplete';
// material-ui

// project imports
import CloseIcon from '@mui/icons-material/Close';
import SubmitButton from 'components/Elements/SubmitButton';
import AutoCompleteSelector, { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import PopUp from 'components/InputArea/PopUp';
import Selector from 'components/InputArea/Selector';
import InputText from 'components/InputArea/TextInput';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { Formik } from 'formik';
import Layout from 'layout';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import { useGetDeveloperCompanyQuery, useGetSubCompanyAccordingToParentQuery } from 'store/services/company/companyApi';
import {
  useGetCitiesByStateQuery,
  useGetCommunitiesByCityQuery,
  useGetCountriesQuery,
  useGetStatesByCountryQuery,
  useGetStatesOrCitiesQuery,
  useGetSubCommunitiesByCommunityQuery
} from 'store/services/country/countryApi';
import {
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useGetProjectQuery,
  useGetPropertyTypeQuery,
  useUpdateProjectMutation
} from 'store/services/project/projectApi';

import { arrayValidator, numberValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
import Categorization from '../../helper/Categorization';

import { useRouter } from 'next/router';

function AddProject() {
  const router = useRouter();
  const { project_id } = router.query;

  const { data: projectData } = useGetProjectQuery(project_id, {
    skip: project_id === null || project_id === undefined
  });

  const Autofill = projectData?.data;

  useEffect(() => {
    console.log('project: ', projectData);
  }, [projectData]);
  //is shared
  const [shared, setShared] = useState(false);
  const [countryLocationID, setCountryLocationID] = useState(null);
  const [isState_Id, setIsState_Id] = useState({ id: null, isState: null });

  //single or multiple phases
  const [single, setSingle] = useState(false);

  //property type
  const [propertyType, setPropertyType] = useState(Autofill?.property_type || []);

  //maps
  const [address, setAddress] = useState('Dubai');
  const [long, setlong] = useState(Autofill?.lng);
  const [lat, setlat] = useState(Autofill?.lat);

  //location details
  const [countryID, setCountryID] = useState(null);
  const [stateID, setStateID] = useState(null);
  const [cityID, setCityID] = useState(null);
  const [communityID, setCommunityID] = useState(null);
  const [subCommunityID, setSubCommunityID] = useState(null);

  //facilities
  const [checkedItems, setCheckedItems] = useState([]);

  //DEV COMPANY
  const [devCompany, setDevCompany] = useState(null);
  //API============================================================================================================
  const { data: Types, isLoading, isError } = useGetPropertyTypeQuery();
  const { data: Allfacilities } = useGetAllfacilitiesQuery();
  const { data: SharedStates } = useGetStatesOrCitiesQuery(countryLocationID, {
    skip: countryLocationID === null || countryLocationID === undefined
  });

  const { data: Countries } = useGetCountriesQuery();
  const { data: StateByCountry } = useGetStatesByCountryQuery(countryID, {
    skip: countryID === null || countryID === undefined
  });

  const { data: CityByState } = useGetCitiesByStateQuery(stateID, {
    skip: stateID === null || stateID === undefined
  });
  const { data: Community } = useGetCommunitiesByCityQuery(cityID, {
    skip: cityID === null || cityID === undefined
  });
  const { data: subCommunity } = useGetSubCommunitiesByCommunityQuery(communityID, {
    skip: communityID === null || communityID === undefined
  });

  //GET COMPANIES
  const { data: DeveloperComp } = useGetDeveloperCompanyQuery();
  const { data: subDevComp } = useGetSubCompanyAccordingToParentQuery(devCompany, {
    skip: devCompany === null || devCompany === undefined
  });

  const { data: brokerComp, error: brokerCompError } = useGetBrokerCompaniesByCitiesQuery(isState_Id, {
    skip: isState_Id === null || isState_Id === undefined
  });

  const [updateProject, updateProjectResult] = useUpdateProjectMutation();

  //PHASES====================================================================================
  const handleDelete = (index, values, setFieldValues) => {
    const updatedPhases = values.phases?.filter((phase, idx) => idx !== index);
    setFieldValues('phases', updatedPhases);
  };

  const DynamicInput = ({ num, values, setFieldValues, DeleteFunc }) => {
    const size = 5.1;
    const MAP_SIZE = 1.2;
    const phaseID = num;
    const [open, setOpen] = useState(false);
    const [mapSubmitted, setMapSubmitted] = useState(false);
    useEffect(() => {
      setFieldValues(`phases[${num}].id`, num + 1);
      setFieldValues('numberofPhases', num + 1);
      setFieldValues('no_of_unit_types', num + 1);
    }, []);

    if (isLoading) return null;

    return (
      <>
        <InputText
          required
          label="Phase Name"
          placeholder="Phase Name"
          helperText="Please enter phase name"
          style={{ xs: 12, lg: size }}
          type="text"
          id={`phases[${num}].phase_name`}
          name={`phases[${num}].phase_name`}
        />
        <InputText
          required
          label="Number of Properties"
          placeholder="Number of Properties"
          helperText="Please enter number of properties"
          style={{ xs: 12, lg: size }}
          id={`phases[${num}].no_of_unittypes_in_phase`}
          name={`phases[${num}].no_of_unittypes_in_phase`}
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
          {/* <MapAutocomplete placeHolder onChangeAddress={setAddress} value="uae" setlong={setlong} setlat={setlat} /> */}
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
  // Function that generates different components based on the 'key' provided
  const SinglePhaseComponents = (key) => {
    switch (key) {
      case 'Furnished':
        return (
          <>
            {/* AutoCompleteSelector component */}
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
            {/* InputText component */}
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
            {/* InputText component */}
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
  // Retrieve nested facts arrays from propertyType and flatten them
  const facts = propertyType?.map((component) => component.facts?.map((fact) => fact));
  const Filtered = [...new Set([].concat(...facts))];
  // Generate SinglePhaseComponents for each fact in the Filtered array
  const SinglePhaseInputs = Filtered?.map((fact) => SinglePhaseComponents(fact));

  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places', 'drawing']}>
      <Page title="Add Project">
        <>
          <Grid container spacing={gridSpacing}>
            {/* [{ id: null, phaseName: '', NoOfProperties: null, polygonCoords: [] }] */}
            <Formik
              initialValues={{
                projectTitle: Autofill?.project_name,
                brokerCompanies: Autofill?.broker_companies,
                detailsCountrySelect: '',
                detailsStateSelector: '',
                masterDeveloperSelector: Autofill?.parent_developer_company,
                subDeveloperCompanySelector: Autofill?.branch_developer_company,
                phaseType: Autofill?.phases?.length == 0 ? 'single' : 'multiple',
                phases: Autofill?.phases,
                numberofPhases: null,
                isshared: Autofill?.is_shared,
                locationCountrySelect: Autofill?.country,
                locationAddress: '',
                locationCitySelector: Autofill?.city,
                locationDistrict: '',
                locationState: Autofill?.state,
                locationCommunity: Autofill?.community,
                locationSubCommunity: Autofill?.sub_community,
                propertyStatus: '',
                mapUrl: '',
                place: '',
                propertyType: Autofill?.property_type,
                projectView: '',
                parking: '',
                ownerShip: '',
                completionStatus: '',
                isfurnished: '',
                noOfFloors: '',
                price: '',
                startingPrice: '',
                noOfunits: Autofill?.no_of_unittypes,
                availableUnits: '',
                lifeStyleSelector: '',
                ownershipSelector: '',
                plotAreaMin: '',
                plotAreaMax: '',
                serviceCharge: Autofill?.service_charges,
                projectStartDate: Autofill?.start_date || null,
                projectCompletionDate: Autofill?.completion_date || null,
                projectHandoverDate: null,
                nooffloors: Autofill?.no_of_floors,
                noofpools: '',
                noofretailcenters: '',
                propertyTitle: Autofill?.property_title,
                arabicPropertyTitle: Autofill?.property_title_arabic,
                propertyDescription: Autofill?.description,
                arabicPropertyDescription: Autofill?.description_arabic,
                facilities: checkedItems
              }}
              validationSchema={Yup.object({
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
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const ProjectData = {
                  'broker_companies_id[]': values?.brokerCompanies?.map((broker) => broker.id),
                  city_id: values?.locationCitySelector?.ID,
                  completion_date: values?.projectCompletionDate,
                  completion_status_id: values?.completionStatus,
                  community_id: values?.locationCommunity?.ID,
                  description: values?.propertyDescription,
                  description_arabic: values?.arabicPropertyDescription,
                  'facilities_id[]': checkedItems,
                  handover_date: values?.projectHandoverDate,
                  id: Number(project_id),
                  is_shared: shared,
                  lat: lat?.toString() || '25',
                  lng: long?.toString() || '100',
                  no_of_floors: values?.noOfFloors,
                  no_of_unit_types: values?.no_of_unit_types,
                  ownership_id: values?.ownerShip,
                  parent_developer_company_id: values?.masterDeveloperSelector?.id,
                  'phases[]': values?.phases?.map((phase) => {
                    return {
                      name: phase?.phase_name,
                      no_of_unittypes: phase?.no_of_unittypes_in_phase,
                      polygons: phase?.phase_polygon?.map((poly) => {
                        return {
                          lat: poly?.lat,
                          lng: poly?.lng
                        };
                      })
                    };
                  }),
                  project_name: values?.projectTitle,
                  property_title: values?.propertyTitle,
                  property_title_arabic: values?.arabicPropertyTitle,
                  ref_number: 'fdf',
                  service_charges: values?.serviceCharge,
                  start_date: values?.projectStartDate,
                  starting_price: values?.startingPrice,
                  state_id: values?.locationState?.ID,
                  sub_community_id: values?.locationSubCommunity?.ID,
                  'property_type_i[]': propertyType?.map((type) => type.id),
                  country_id: values?.locationCountrySelect?.ID
                };

                setSubmitting(false);
                const data = JSON.stringify(ProjectData);
                updateProject(data);
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
                              options={Countries?.data || []}
                              getOptionLabel={(country) => country.Country || country.country || ''}
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please select country"
                              name="detailsCountrySelect"
                              id="detailsCountrySelect"
                              value
                              func={(newValue) => {
                                setCountryLocationID(newValue?.ID);
                              }}
                            />

                            <AutoCompleteSelector
                              helperText="Please select state"
                              label="State"
                              // disabled={countryLocationID ? false : true}
                              disabled={props.values.detailsCountrySelect ? false : true}
                              placeholder="Select State"
                              options={SharedStates?.data || []}
                              getOptionLabel={(state) => state?.State || state?.state || state.Title || ''}
                              style={{ xs: 12, lg: 4 }}
                              id="detailsStateSelector"
                              name="detailsStateSelector"
                              func={(newValue) => {
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
                          label="Developer Company"
                          placeholder="Select Developer Company"
                          options={DeveloperComp?.data || []}
                          getOptionLabel={(company) => company.company_name || ''}
                          style={{ xs: 12, lg: 4 }}
                          helperText="Please select developer company"
                          id="masterDeveloperSelector"
                          name="masterDeveloperSelector"
                          func={(newValue) => {
                            setDevCompany(newValue.id);
                          }}
                        />

                        <AutoCompleteSelector
                          label="Sub Developer Company"
                          placeholder="Select Sub Developer Company"
                          options={subDevComp?.data || []}
                          getOptionLabel={(sub) => sub.company_name || ''}
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
                                  props.setFieldValue('numberofPhases', props?.values?.phases?.length);

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
                          options={Countries?.data}
                          getOptionLabel={(country) => country.country || country.Country || ''}
                          required
                          style={{ xs: 12, lg: 6 }}
                          helperText="Please select country"
                          name="locationCountrySelect"
                          id="locationCountrySelect"
                          func={(newValue) => {
                            setCountryID(newValue.ID);
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
                          disabled={!countryID || !Autofill.country}
                          label="State"
                          placeholder="State"
                          type="text"
                          helperText="Please enter the location's state"
                          options={StateByCountry?.data || []}
                          getOptionLabel={(state) => state.state || state?.State || ''}
                          id="locationState"
                          name="locationState"
                          required
                          func={(e) => {
                            setStateID(e.ID);
                          }}
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
                            disabled={!stateID || !Autofill.state}
                            options={CityByState?.data || []}
                            getOptionLabel={(city) => city?.city || city?.City || ''}
                            style={{ xs: 12, lg: 12 }}
                            id="locationCitySelector"
                            helperText="Please select city"
                            name="locationCitySelector"
                            required
                            func={(e) => {
                              setCityID(e.ID);
                            }}
                          />

                          {/* <AutoCompleteSelector
                            label="District"
                            placeholder="District"
                            type="text"
                            id="locationDistrict"
                            name="locationDistrict"
                            helperText="Please enter the location's district"
                            options={['option 1', 'option 2', 'option 3']}
                            style={{ xs: 12, lg: 12 }}
                          /> */}

                          <AutoCompleteSelector
                            label="Community"
                            placeholder="Community"
                            type="text"
                            disabled={!cityID || !Autofill.city}
                            id="locationCommunity"
                            name="locationCommunity"
                            helperText="Please enter the location's community"
                            options={Community?.data || []}
                            getOptionLabel={(com) => com?.community || com.Community || ''}
                            style={{ xs: 12, lg: 12 }}
                            func={(e) => {
                              setCommunityID(e.ID);
                            }}
                          />

                          <AutoCompleteSelector
                            label="Sub Community"
                            placeholder="Sub Community"
                            disabled={!communityID || !Autofill.sub_community}
                            type="text"
                            id="locationSubCommunity"
                            name="locationSubCommunity"
                            helperText="Please enter the location's sub community"
                            options={subCommunity?.data || []}
                            getOptionLabel={(sub) => sub?.sub_community || sub?.SubCommunity || ''}
                            style={{ xs: 12, lg: 12 }}
                            func={(e) => {
                              setSubCommunityID(e.ID);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <Map normallng={long} normallat={lat} locationAddress={address} height={'22vh'} xs={12} lg={12} />
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>

                  <>
                    <Grid item xs={12}>
                      <MainCard title="Property Details">
                        <Grid container spacing={2} alignItems="center">
                          {props.values.phaseType === 'single' && (
                            <>
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
                                getOptionLabel={(property) => property?.title || property?.name || ''}
                                // (country) => country.Country || country.country || ''
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
                                label="No. Of Pools"
                                required
                                type="number"
                                placeholder="please enter the number of pools"
                                style={{ xs: 12, lg: 4 }}
                                id="noofpools"
                                name="noofpools"
                                helperText="Please select the number of pools"
                              />
                              <InputText
                                label="No. Of Retail Centers"
                                required
                                type="number"
                                placeholder="please enter the number of retail centers"
                                style={{ xs: 12, lg: 4 }}
                                id="noofretailcenters"
                                name="noofretailcenters"
                                helperText="Please select the number of retail centers"
                              />
                              <InputText
                                label="Starting Price"
                                required
                                type="number"
                                placeholder="starting price"
                                style={{ xs: 12, lg: 4 }}
                                id="startingPrice"
                                name="startingPrice"
                                helperText="Please enter the starting price"
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
                            </>
                          )}
                          {SinglePhaseInputs}
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
