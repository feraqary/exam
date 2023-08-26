import { Button, Checkbox, FormControlLabel, Grid, Switch, Skeleton } from '@mui/material';
import { LoadScript } from '@react-google-maps/api';
import Map from 'components/map/google-map';
// material-ui

// project imports
import SubmitButton from 'components/Elements/SubmitButton';
import AutoCompleteSelector, { MultipleAutoCompleteSelector, AutoCompleteSelectorAPI } from 'components/InputArea/AutoCompleteSelector';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import Selector from 'components/InputArea/Selector';
import InputText from 'components/InputArea/TextInput';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { Formik } from 'formik';
import Layout from 'layout';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastError, ToastSuccess } from 'utils/toast';

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
  useCreateProjectMutation,
  useGetAllAmenitiesQuery,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useGetPropertyTypeQuery,
  useGetViewQuery
} from 'store/services/project/projectApi';
import Categorization from './helper/Categorization';
import MultiPhaseInputs from './helper/multi_inputs';
import { useRef } from 'react';

const useChainedState = () => {
  const [chainHead, setChainHead] = useState(null);
  const [chainChild, setChainChild] = useState(null);

  const updateChain = (data, value) => {
    if (data === 'head') {
      setChainHead(value);
    } else if (data === 'child') {
      setChainChild(value);
    }
  };

  return { chainHead, chainChild, updateChain };
};

function AddProject() {
  //is shared
  const [shared, setShared] = useState(false);
  const [countryLocationID, setCountryLocationID] = useState(null);
  const [isState_Id, setIsState_Id] = useState({ id: null, isState: null });
  //single or multiple phases
  const [single, setSingle] = useState(false);

  //property type
  const [propertyType, setPropertyType] = useState([]);
  const [viewSelected, setViews] = useState([]);

  //maps
  // const [address, setAddress] = useState('Dubai');
  const [long, setlong] = useState(null);
  const [lat, setlat] = useState(null);

  //location details
  const [countryID, setCountryID] = useState(null);
  const [stateID, setStateID] = useState(null);
  const [cityID, setCityID] = useState(null);
  const [communityID, setCommunityID] = useState(null);
  const [subCommunityID, setSubCommunityID] = useState(null);

  //facilities
  const [checkedItems, setCheckedItems] = useState([]);
  const [amenitiesCheckedItems, setAmenitiesCheckedItems] = useState([]);

  //DEV COMPANY
  const [devCompany, setDevCompany] = useState(null);

  const { chainHead, chainChild, updateChain } = useChainedState();

  //API============================================================================================================
  const { data: Types, isLoading, isError } = useGetPropertyTypeQuery();
  const { data: Allfacilities, isLoading: loadingFacility } = useGetAllfacilitiesQuery();
  const { data: AllAmenities, isLoading: loadingAmenities } = useGetAllAmenitiesQuery();
  const { data: AllViews, isLoading: loadingViww } = useGetViewQuery();
  const { data: SharedStates, isLoading: loadingStateOrCity } = useGetStatesOrCitiesQuery(countryLocationID, {
    skip: countryLocationID === null || countryLocationID === undefined
  });
  let amenities;
  let facilities;
  if (AllAmenities && AllAmenities) {
    amenities = Object.keys(AllAmenities?.data || {});
    facilities = Object.keys(Allfacilities?.data || {});
  }

  const { data: Countries, isLoading: loadingCountry } = useGetCountriesQuery();
  const { data: StateByCountry, isLoading: loadingState } = useGetStatesByCountryQuery(countryID, {
    skip: countryID === null || countryID === undefined
  });
  const { data: CityByState, isLoading: loadingStateByCountry } = useGetCitiesByStateQuery(stateID, {
    skip: stateID === null || stateID === undefined
  });
  const { data: Community, isLoading: loadingCommunities } = useGetCommunitiesByCityQuery(cityID, {
    skip: cityID === null || cityID === undefined
  });
  const { data: subCommunity, isLoading: loadingSubComunities } = useGetSubCommunitiesByCommunityQuery(communityID, {
    skip: communityID === null || communityID === undefined
  });

  //GET COMPANIES
  const { data: DeveloperComp, isLoading: loadingDev } = useGetDeveloperCompanyQuery();
  const { data: subDevComp, isLoading: loadingSubdev } = useGetSubCompanyAccordingToParentQuery(devCompany, {
    skip: devCompany === null || devCompany === undefined
  });

  const {
    data: brokerComp,
    error: brokerCompError,
    isLoading: loadingBroker
  } = useGetBrokerCompaniesByCitiesQuery(isState_Id, {
    skip: isState_Id === null || isState_Id === undefined
  });
  const { data: views, error: viewsError, isLoading: loadingView } = useGetViewQuery();
  const [createProject, CreateProjectResult] = useCreateProjectMutation();

  useEffect(() => {
    if (CreateProjectResult.isSuccess) {
      ToastSuccess('Project has been created successfully');
    }
  }, [CreateProjectResult.isSuccess]);

  useEffect(() => {
    if (CreateProjectResult.isError) {
      const { data } = CreateProjectResult.error;
      ToastError(data.error);
    }
  }, [CreateProjectResult.isError]);

  if (isLoading) return null;

  //PROPERTY DETAILS============================================================================
  // Function that generates different components based on the 'key' provided
  const SinglePhaseComponents = (key) => {
    switch (key) {
      case 'furnished':
        return (
          <>
            {/* AutoCompleteSelector component */}
            <AutoCompleteSelector
              label="Furnished"
              required
              options={[
                { id: 1, label: 'Furnished' },
                { id: 2, label: 'Semi-Furnished' },
                { id: 3, label: 'Not Furnished' }
              ]}
              placeholder="furnished"
              style={{ xs: 12, lg: 4 }}
              id="Furnished"
              name="Furnished"
              helperText="Please select property status"
            />
          </>
        );

      case 'no of floor':
        return (
          <>
            {/* InputText component */}
            <InputText
              label="No of Floors"
              required
              type="number"
              placeholder="Number of bedrooms"
              style={{ xs: 12, lg: 4 }}
              id="No_of_Floor"
              name="No_of_Floor"
              helperText="Please select property status"
            />
          </>
        );
      case 'elevator ':
        return (
          <>
            {/* InputText component */}
            <InputText
              label="Elevators"
              required
              placeholder="enter the number of elevators"
              style={{ xs: 12, lg: 4 }}
              id="Elevator"
              name="Elevator"
              helperText="Please enter the number of elevators"
            />
          </>
        );
    }
  };

  // Retrieve nested facts arrays from propertyType and flatten them
  const facts = propertyType?.map((component) => component.facts?.map((fact) => fact.label));
  const Filtered = [...new Set([].concat(...facts))];

  // Generate SinglePhaseComponents for each fact in the Filtered array
  const SinglePhaseInputs = Filtered?.map((fact) => SinglePhaseComponents(fact));
  //PHASES====================================================================================

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
                phases: [{ id: null, phaseName: '', NoOfProperties: null, polygons: [], mapSubmitted: null }],
                numberofPhases: 1,
                amenities: [],
                isshared: shared,
                locationCountrySelect: null,
                locationCitySelector: null,
                locationDistrict: null,
                locationState: null,
                locationCommunity: null,
                locationSubCommunity: null,
                propertyStatus: '',
                place: '',
                lat: 27,
                long: 25,
                propertyType: propertyType,
                plotAreaMin: null,
                plotAreaMax: null,

                //facts:
                number_of_floors: null,
                Plot_Area: null,
                Built_up_Area: null,
                view: viewSelected,
                Furnished: null,
                Ownership: null,
                Completion_status: null,
                start_Date: null,
                Completion_Date: null,
                Handover_Date: null,
                No_of_Floor: null,
                No_of_units: null,
                Service_charge: null,
                Parking: null,
                Price: null,
                Rent_type: null,
                No_of_paymnets: null,
                payment_plan: null,
                No_of_retail: null,
                No_of_pool: null,
                Elevator: null,
                Starting_Price: null,
                Life_Style: null,

                //facts
                propertyTitle: null,
                arabicPropertyTitle: null,
                propertyDescription: null,
                arabicPropertyDescription: null
              }}
              // validationSchema={Yup.object({
              //   projectTitle: stringValidator('Please provide a title'),
              //   locationCountrySelect: objectValidator('please select a country'),
              //   mapUrl: stringValidator('Please enter a map url'),
              //   locationCitySelector: objectValidator('please select a city'),
              //   locationState: objectValidator('please select a state'),
              //   propertyStatus: objectValidator('please enter the property status'),
              //   propertyTitle: stringValidator('Please enter the property title'),
              //   arabicPropertyTitle: stringValidator('Please enter the arabic title'),
              //   propertyDescription: stringValidator('Please enter the property description'),
              //   arabicPropertyDescription: stringValidator('Please enter the arabic description'),
              //   phases: arrayValidator(),
              //   propertyType: objectValidator('Please enter the property type'),
              //   view: stringValidator('Please enter the view details'),
              //   noOfBedrooms: numberValidator('Please enter the number of bedrooms'),
              //   noOfbathrooms: numberValidator('Please enter the number of bathrooms'),
              //   plotArea: numberValidator('please enter the plot area'),
              //   isfurnished: objectValidator('please enter the furnish status'),
              //   noOfFloors: numberValidator('Please enter the number of floors'),
              //   price: numberValidator('Please enter the price'),
              //   builtUpArea: numberValidator('please enter the built up area'),
              //   parking: stringValidator('please enter the parking area'),
              //   ownership: stringValidator('please enter the ownership status'),
              //   completionStatus: stringValidator('please enter the completion status'),
              //   plotAreaMin: numberValidator('please enter the minimum plot area'),
              //   plotAreaMax: numberValidator('please enter the maximum plot area'),
              //   noOfunits: numberValidator('please enter the number of available units'),
              //   availableUnits: numberValidator('please enter the number of available units'),
              //   serviceCharge: numberValidator('please enter the service charge')
              // })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const ProjectData = {
                  min_area: values?.plotAreaMin?.toString(),
                  max_area: values?.plotAreaMax?.toString(),
                  facts: {
                    Plot_Area: values.Plot_Area,
                    Built_up_Area: values.Built_up_Area,
                    Furnished: values.Furnished?.id || null,
                    Ownership: values.Ownership?.id || null,
                    Completion_status: values.Completion_status?.id,
                    start_Date: values.start_Date,
                    Completion_Date: values.Completion_Date,
                    Handover_Date: values.Handover_Date,
                    no_of_floor: values.No_of_Floor,
                    No_of_units: values.No_of_units,
                    Service_charge: values.Service_charge,
                    Parking: values.Parking,
                    Rent_type: values.Rent_type,
                    No_of_paymnets: values.No_of_paymnets,
                    payment_plan: values.payment_plan,
                    No_of_retail: values.No_of_retail,
                    No_of_pool: values.No_of_pool,
                    Elevator: values.Elevator,
                    Starting_Price: values.Starting_Price,
                    Life_Style: values.Life_Style?.id
                  },
                  is_shared: shared,
                  lat: lat?.toString() || '25',
                  lng: long?.toString() || '100',
                  branch_developer_company_id: values?.subDeveloperCompanySelector?.id,
                  city_id: values?.locationCitySelector?.ID,
                  community_id: values?.locationCommunity?.ID,
                  description: values?.propertyDescription,
                  description_arabic: values?.arabicPropertyDescription,
                  area_range_id: 14,
                  parent_developer_company_id: values?.masterDeveloperSelector?.id,
                  project_name: values?.projectTitle,
                  property_title: values?.propertyTitle,
                  property_title_arabic: values?.arabicPropertyTitle,
                  ref_number: '',
                  state_id: values?.locationState?.ID,
                  sub_community_id: values?.locationSubCommunity?.ID,
                  'property_type_id[]': propertyType?.map((type) => type?.id),
                  'view[]': viewSelected,
                  'broker_companies_id[]': values?.brokerCompanies,
                  'facilities_id[]': values.facilities,
                  'amenities_id[]': values.amenities,
                  'phases[]':
                    values?.phaseType == 'multiple'
                      ? values?.phases?.map((phase) => {
                          return {
                            name: phase?.phaseName,
                            no_of_unittypes: phase?.NoOfProperties,
                            polygons: phase?.polygons?.map((poly) => {
                              return {
                                lat: poly?.lat,
                                lng: poly?.lng
                              };
                            })
                          };
                        })
                      : [],
                  country_id: values?.locationCountrySelect?.ID
                };

                const data = JSON.stringify(ProjectData);

                const submit = {
                  data: data,
                  isMulti: values?.phaseType == 'single'
                };
                // console.log('values to submit: ', ProjectData);
                createProject(submit);
                setSubmitting(false);
              }}
            >
              {(props) => (
                <>
                  <Grid item xs={12}>
                    <ToastContainer />
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

                        <Grid item xs={4} lg={4}>
                          <FormControlLabel
                            value={shared}
                            control={
                              <Switch
                                checked={shared}
                                onChange={() => {
                                  setShared(!shared);
                                }}
                              />
                            }
                            label={'Is Shared'}
                            labelPlacement="start"
                            name="isshared"
                            id="isshared"
                          />
                        </Grid>

                        <Grid item lg={12}></Grid>
                        {shared && (
                          <>
                            <AutoCompleteSelector
                              label="Country"
                              placeholder="Select Country"
                              options={isLoading && isError ? [] : Countries?.data || []}
                              getOptionLabel={(country) => country?.Country || country?.country || ''}
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please select country"
                              name="detailsCountrySelect"
                              id="detailsCountrySelect"
                              labelObject="Country"
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
                              getOptionLabel={(state) => state?.state || state?.Title || ''}
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
                              getOptionLabel={(broker) => broker?.label || ''}
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
                          style={{ xs: 12, lg: 4 }}
                          helperText="Please select developer company"
                          id="masterDeveloperSelector"
                          name="masterDeveloperSelector"
                          func={(newValue) => {
                            setDevCompany(newValue?.id || null);
                          }}
                        />

                        <AutoCompleteSelector
                          label="Sub Developer Company"
                          placeholder="Select Sub Developer Company"
                          options={subDevComp?.data || []}
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
                          getOptionLabel={(type) => type?.label || ''}
                          style={{ xs: 12, lg: 4 }}
                        />
                        <Grid item lg={8}></Grid>   

                        {props.values.phaseType === 'multiple' && (
                          <>
                            {/* Iterate through each phase in the 'phases' array */}
                            {props.values?.phases?.map((phase, index) => {
                              return (
                                // Render the 'DynamicInput' component for each phase
                                <MultiPhaseInputs
                                  setFieldValues={props.setFieldValue}
                                  // DeleteFunc={handlePhaseDelete}
                                  values={props.values}
                                  id={props.values?.phases[index].id}
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
                                    polygons: [],
                                    mapSubmitted: null
                                  };

                                  // Add the new phase to the 'phases' array using spread operator
                                  props.setFieldValue('phases', [...props?.values?.phases, newPhases]);
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
                           {/* Google map */}
                  <Grid item xs={12}>
                    <MainCard title="Location details">
                      <Grid container spacing={2} alignItems="center">
                        {props.values.phaseType === 'single' && (
                          <>
                            <Grid item xs={12} lg={12}>
                              <Map
                                normallng={long}
                                country={props.values.locationCountrySelect?.Country || ''}
                                city={props.values.locationState?.State || ''}
                                state={props.values.locationCitySelector?.City || ''}
                                Community={props.values.locationCommunity?.Community || ''}
                                subCommunity={props.values.locationSubCommunity?.SubCommunity || ''}
                                normallat={lat}
                                height={'40vh'}
                                xs={12}
                                lg={12}
                              />
                            </Grid>
                          </>
                        )}
                        <AutoCompleteSelector
                          label="Country"
                          placeholder="Select Country"
                          options={Countries?.data || []}
                          getOptionLabel={(country) => country?.country || country?.Country || ''}
                          required
                          style={{ xs: 12, lg: 6 }}
                          helperText="Please select country"
                          name="locationCountrySelect"
                          id="locationCountrySelect"
                          func={(e) => {
                            setCountryID(e?.ID);

                          }}
                        />

                        <AutoCompleteSelector
                          style={{ xs: 12, lg: 6 }}
                          disabled={!countryID}
                          label="State"
                          placeholder="State"
                          type="text"
                          helperText="Please enter the location's state"
                          options={StateByCountry?.data || []}
                          getOptionLabel={(state) => state?.state || state?.State || ''}
                          id="locationState"
                          name="locationState"
                          required
                          func={(e) => {
                            setStateID(e?.ID);
                          }}
                        />
                        <AutoCompleteSelector
                          label="City"
                          placeholder="Select City"
                          disabled={!stateID}
                          options={CityByState?.data || []}
                          getOptionLabel={(city) => city?.city || city?.City || ''}
                          style={{ xs: 12, lg: 6 }}
                          id="locationCitySelector"
                          helperText="Please select city"
                          name="locationCitySelector"
                          required
                          func={(e) => {
                            setCityID(e?.ID || '');
                          }}
                        />

                        <AutoCompleteSelector
                          label="Community"
                          placeholder="Community"
                          type="text"
                          disabled={!cityID}
                          id="locationCommunity"
                          name="locationCommunity"
                          helperText="Please enter the location's community"
                          options={Community?.data || []}
                          getOptionLabel={(com) => com?.community || com?.Community || ''}
                          style={{ xs: 12, lg: 6 }}
                          func={(e) => {
                            setCommunityID(e?.ID || '');
                          }}
                        />

                        <AutoCompleteSelector
                          label="Sub Community"
                          placeholder="Sub Community"
                          disabled={!communityID}
                          type="text"
                          id="locationSubCommunity"
                          name="locationSubCommunity"
                          helperText="Please enter the location's sub community"
                          options={subCommunity?.data || []}
                          getOptionLabel={(sub) => sub?.sub_community || sub?.SubCommunity || ''}
                          style={{ xs: 12, lg: 6 }}
                          func={(e) => {
                            setSubCommunityID(e?.ID || '');
                          }}
                        />
                      </Grid>

                      {/* </Grid> */}
                    </MainCard>
                  </Grid>

                  {props.values.phaseType === 'single' && (
                    <>
                      <Grid item xs={12}>
                        <MainCard title="Property Details">
                          <Grid container spacing={2} alignItems="center">
                            <MultipleAutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Property Type"
                              placeholder="Select Property Type"
                              options={isError ? [] : Types?.data || []}
                              getOptionLabel={(property) => property?.title || property?.label || ''}
                              helperText="Please select property type"
                              required
                              func={(e, value) => {
                                setPropertyType(e);
                                props.setFieldValue('propertyType', e);
                              }}
                            />
                            <AutoCompleteSelector
                              label="Completion Status"
                              required
                              placeholder="Select Property Status"
                              options={[
                                { id: 4, name: 'Off Plan' },
                                { id: 5, name: 'Ready' }
                              ]}
                              getOptionLabel={(property) => property?.title || property?.name || ''}
                              style={{ xs: 12, lg: 4 }}
                              id="Completion_status"
                              name="Completion_status"
                              helperText="Please select property status"
                            />

                            {SinglePhaseInputs}
                            <MultipleAutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Views"
                              placeholder="Select The Views"
                              options={viewsError ? [] : AllViews?.data || []}
                              getOptionLabel={(view) => view?.title || view?.label || ''}
                              helperText="Please Select The Views"
                              required
                              func={(e, value) => {
                                props.setFieldValue('view', e);
                                // setViews(value);
                              }}
                            />
                            <AutoCompleteSelector
                              label="Lifestyle"
                              required
                              placeholder="Select Lifestyle"
                              options={[
                                { id: 1, label: 'Affordable' },
                                { id: 2, label: 'Standard' },
                                { id: 3, label: 'Luxury' },
                                { id: 4, label: 'Ultra Luxury' }
                              ]}
                              style={{ xs: 12, lg: 4 }}
                              id="Life_Style"
                              name="Life_Style"
                              helperText="Please select the lifestyle"
                            />
                            <InputText
                              label="Plot Area"
                              placeholder="insert area range"
                              style={{ xs: 12, lg: 4 }}
                              id="Plot_Area"
                              name="Plot_Area"
                              helperText="insert area range"
                              type="number"
                            />

                            <InputText
                              label="Built Up Area"
                              placeholder="insert area range"
                              style={{ xs: 12, lg: 4 }}
                              id="Built_up_Area"
                              name="Built_up_Area"
                              helperText="insert area range"
                              type="number"
                            />

                            <Grid container sx={{ padding: 0 }} xs={12} lg={4} justifyContent={'space-evenly'}>
                              <InputText
                                label="Area Range:"
                                required
                                placeholder="insert area range"
                                style={{ xs: 12, lg: 5 }}
                                id="plotAreaMin"
                                name="plotAreaMin"
                                helperText="insert area range"
                                type="number"
                              />
                              <InputText
                                label="-"
                                placeholder="insert area range"
                                style={{ xs: 12, lg: 5 }}
                                id="plotAreaMax"
                                name="plotAreaMax"
                                helperText="insert area range"
                                type="number"
                              />
                            </Grid>
                            <InputText
                              label="Parking"
                              required
                              placeholder="Parking"
                              style={{ xs: 12, lg: 4 }}
                              id="Parking"
                              name="Parking"
                              helperText="parking"
                              type="number"
                            />
                            <AutoCompleteSelector
                              label="Ownership"
                              required
                              placeholder="ownership"
                              options={[
                                { id: 1, label: 'Freeholdd' },
                                { id: 2, label: 'GCC Citizen' },
                                { id: 3, label: 'Leasehold' },
                                { id: 4, label: 'Local Citizen' },
                                { id: 5, label: 'USUFRUCT' },
                                { id: 6, label: 'Other' }
                              ]}
                              style={{ xs: 12, lg: 4 }}
                              id="Ownership"
                              name="Ownership"
                              helperText="Ownership"
                            />
                            <CustomDateTime
                              helperInfo
                              style={{ xs: 12, lg: 4 }}
                              label="Start Date"
                              helperText="Please enter the project start date"
                              id="start_Date"
                              name="start_Date"
                              required={true}
                              setFieldValue={props.setFieldValue}
                            />
                            <CustomDateTime
                              helperInfo
                              style={{ xs: 12, lg: 4 }}
                              label="Completion Date"
                              helperText="Please enter the project completion date"
                              id="Completion_Date"
                              name="Completion_Date"
                              required={true}
                              setFieldValue={props.setFieldValue}
                              onChange={(e) => {
                                props.setFieldValue('Completion_Date', e);
                              }}
                            />

                            <CustomDateTime
                              helperInfo
                              style={{ xs: 12, lg: 4 }}
                              label="Handover Date"
                              helperText="Please enter the project handover date"
                              id="Handover_Date"
                              name="Handover_Date"
                              required={true}
                              setFieldValue={props.setFieldValue}
                            />

                            <InputText
                              label="Total No. Of Units"
                              required
                              type="number"
                              placeholder="Number of bedrooms"
                              style={{ xs: 12, lg: 4 }}
                              id="No_of_units"
                              name="No_of_units"
                              helperText="Please select the number of units"
                            />
                            <InputText
                              label="No. Of Pools"
                              required
                              type="number"
                              placeholder="please enter the number of pools"
                              style={{ xs: 12, lg: 4 }}
                              id="No_of_pool"
                              name="No_of_pool"
                              helperText="Please select the number of pools"
                            />
                            <InputText
                              label="No. Of Retail Centers"
                              required
                              type="number"
                              placeholder="please enter the number of retail centers"
                              style={{ xs: 12, lg: 4 }}
                              id="No_of_retail"
                              name="No_of_retail"
                              helperText="Please select the number of retail centers"
                            />
                            <InputText
                              label="Service Charge"
                              required
                              type="number"
                              placeholder="service charge amount"
                              style={{ xs: 12, lg: 4 }}
                              id="Service_charge"
                              name="Service_charge"
                              helperText="Please enter the service charge amount"
                            />
                            <InputText
                              label="Starting Price"
                              required
                              type="number"
                              placeholder="starting price"
                              style={{ xs: 12, lg: 4 }}
                              id="Starting_Price"
                              name="Starting_Price"
                              helperText="Please enter the starting price"
                            />
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
                        <Categorization
                          list={facilities}
                          data={Allfacilities?.data}
                          setFieldValue={props.setFieldValue}
                          setCheckedItems={setAmenitiesCheckedItems}
                          name="facilities"
                          id="facilities"
                        />
                      </Grid>
                    </MainCard>
                  </Grid>

                  <Grid item xs={12}>
                    <MainCard title="Amenities">
                      <Grid container spacing={2} sx={{ padding: '10px 17px' }}>
                        <Categorization
                          list={amenities}
                          data={AllAmenities?.data}
                          setFieldValue={props.setFieldValue}
                          setCheckedItems={setAmenitiesCheckedItems}
                          name="amenities"
                          id="amenities"
                        />
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
