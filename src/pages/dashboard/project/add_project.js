import { Button, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { LoadScript } from '@react-google-maps/api';
import Map from 'components/map/google-map';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { ToastError, ToastSuccess } from 'utils/toast';
import Categorization from './helper/Categorization';

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
  const [address, setAddress] = useState('Dubai');
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

  //API============================================================================================================
  const { data: Types, isLoading, isError } = useGetPropertyTypeQuery();
  const { data: Allfacilities, isLoading: loadingFacility } = useGetAllfacilitiesQuery();
  const { data: AllAmenities, isLoading: loadingAmenities } = useGetAllAmenitiesQuery();
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

  console.log(CreateProjectResult);

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
    const [polys, setPolys] = useState([]);
    useEffect(() => {
      setFieldValues(`phases[${num}].id`, num + 1);
      setFieldValues('numberofPhases', num + 1);
    }, []);

    useEffect(() => {
      console.log('polys: ', polys);
      setFieldValues(`phases[${num}].polygonCoords`, polys);
    }, [polys]);

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
          id={`phases[${num}].phaseName`}
          name={`phases[${num}].phaseName`}
        />
        <InputText
          required
          label="Number of Properties"
          placeholder="Number of Properties"
          helperText="Please enter number of properties"
          style={{ xs: 12, lg: size }}
          id={`phases[${num}].NoOfProperties`}
          name={`phases[${num}].NoOfProperties`}
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
            setPolyValue={setPolys}
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
              id="facts[6].value"
              name="facts[6].value"
              helperText="Please select property status"
            />
          </>
        );

      case 'No of Floor':
        return (
          <>
            {/* InputText component */}
            <InputText
              label="No of Floors"
              required
              type="number"
              placeholder="Number of bedrooms"
              style={{ xs: 12, lg: 4 }}
              id="facts[12].value"
              name="facts[12].value"
              helperText="Please select property status"
            />
          </>
        );
      // case 'Price':
      //   return (
      //     <>
      //       {/* InputText component */}
      //       <InputText
      //         label="Price"
      //         required
      //         placeholder="enter the price"
      //         style={{ xs: 12, lg: 4 }}
      //         id="facts[17].value"
      //         name="facts[17].value"
      //         helperText="Please select property status"
      //       />
      //     </>
      //   );
      case 'Elevator ':
        return (
          <>
            {/* InputText component */}
            <InputText
              label="Elevators"
              required
              placeholder="enter the number of elevators"
              style={{ xs: 12, lg: 4 }}
              id="facts[23].value"
              name="facts[23].value"
              helperText="Please enter the number of elevators"
            />
          </>
        );
    }
  };

  // Retrieve nested facts arrays from propertyType and flatten them
  const facts = propertyType?.map((component) => component.facts?.map((fact) => fact.label));
  const Filtered = [...new Set([].concat(...facts))];

  console.log(Filtered);
  // Generate SinglePhaseComponents for each fact in the Filtered array
  const SinglePhaseInputs = Filtered?.map((fact) => SinglePhaseComponents(fact));

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
                amenities: [],
                isshared: shared,
                locationCountrySelect: '',
                locationAddress: '',
                locationCitySelector: '',
                locationDistrict: '',
                locationState: '',
                locationCommunity: '',
                locationSubCommunity: '',
                propertyStatus: '',
                place: '',
                lat: 27,
                long: 25,
                propertyType: propertyType,
                plotAreaMin: null,
                plotAreaMax: null,
                facts: Array(30)
                  .fill(null)
                  .map((_, i) => {
                    return { id: i - 1, value: null };
                  }),
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
                console.log();

                const ProjectData = {
                  min_area: values?.plotAreaMin?.toString(),
                  max_area: values?.plotAreaMax?.toString(),
                  facts: values.facts
                    .filter((element) => element.value && element.id !== 0)
                    .map((fact) => {
                      return { id: fact.id, value: fact.value };
                    }),
                  is_shared: shared,
                  lat: lat?.toString() || '25',
                  lng: long?.toString() || '100',
                  'broker_companies_id[]': values?.brokerCompanies,
                  branch_developer_company_id: values?.subDeveloperCompanySelector?.id,
                  city_id: values?.locationCitySelector?.ID,
                  community_id: values?.locationCommunity?.ID,
                  description: values?.propertyDescription,
                  description_arabic: values?.arabicPropertyDescription,
                  // 'facilities_id[]': '',
                  'facilities_id[]': values.facilities,
                  'amenities_id[]': values.amenities,
                  area_range_id: 14,
                  parent_developer_company_id: values?.masterDeveloperSelector?.id,
                  'phases[]':
                    values?.phaseType == 'multiple'
                      ? values?.phases?.map((phase) => {
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
                      : [],
                  project_name: values?.projectTitle,
                  property_title: values?.propertyTitle,
                  property_title_arabic: values?.arabicPropertyTitle,
                  ref_number: '',
                  state_id: values?.locationState?.ID,
                  sub_community_id: values?.locationSubCommunity?.ID,
                  'property_type_id[]': propertyType?.map((type) => type?.id),
                  country_id: values?.locationCountrySelect?.ID
                };

                const data = JSON.stringify(ProjectData);
                console.log('project data ', ProjectData);

                const submit = {
                  data: data,
                  isMulti: values?.phaseType == 'single'
                };
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
                        {/* <AutoCompleteSelectorAPI
                          label="Country"
                          placeholder="Select Country"
                          options={Countries?.data || []}
                          fetchData={useGetCountriesQuery}
                          labels={'Country'}
                          style={{ xs: 12, lg: 4 }}
                          helperText="Please select country"
                          name="detailsCountrySelect"
                          id="detailsCountrySelect"
                          labelObject="Country"
                          // api={console.log('hi')}
                          // func={(newValue) => {
                          //   setCountryLocationID(newValue?.ID);
                          // }}
                        /> */}

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
                          name="isshared"
                          id="isshared"
                        />

                        <Grid item lg={12}></Grid>
                        {shared && (
                          <>
                            <AutoCompleteSelector
                              label="Country"
                              placeholder="Select Country"
                              options={isLoading && isError ? [] : Countries?.data || []}
                              getOptionLabel={(country) => country.Country || country.country || ''}
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please select country"
                              name="detailsCountrySelect"
                              id="detailsCountrySelect"
                              labelObject="Country"
                              api={() => console.log('hi')}
                              func={(newValue) => {
                                setCountryLocationID(newValue?.ID);
                              }}
                            />

                            <AutoCompleteSelector
                              helperText="Please select country"
                              label="State"
                              // disabled={countryLocationID ? false : true}
                              disabled={props.values.detailsCountrySelect ? false : true}
                              placeholder="Select State"
                              options={SharedStates?.data || []}
                              getOptionLabel={(state) => state?.state || state.Title || ''}
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
                            setDevCompany(newValue.id || null);
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
                        <Grid item xs={12} lg={12}>
                          <Map normallng={long} normallat={lat} locationAddress={address} height={'40vh'} xs={12} lg={12} />
                        </Grid>
                        <AutoCompleteSelector
                          label="Country"
                          placeholder="Select Country"
                          options={Countries?.data}
                          getOptionLabel={(country) => country?.country || country?.Country || ''}
                          required
                          style={{ xs: 12, lg: 6 }}
                          helperText="Please select country"
                          name="locationCountrySelect"
                          id="locationCountrySelect"
                          func={(newValue) => {
                            setCountryID(newValue.ID);
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
                            setStateID(e.ID);
                          }}
                        />

                        {/* <Grid item xs={12} lg={6}>
                          <InputLabel>Place</InputLabel>
                          <MapAutocomplete placeHolder onChangeAddress={setAddress} value="uae" setlong={setlong} setlat={setlat} />
                          <FormHelperText>Please enter place address</FormHelperText>
                        </Grid> */}

                        {/* <Grid item xs={12} lg={6}> */}
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
                            setCityID(e.ID || '');
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
                          disabled={!cityID}
                          id="locationCommunity"
                          name="locationCommunity"
                          helperText="Please enter the location's community"
                          options={Community?.data || []}
                          getOptionLabel={(com) => com?.community || com?.Community || ''}
                          style={{ xs: 12, lg: 6 }}
                          func={(e) => {
                            setCommunityID(e.ID || '');
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
                            setSubCommunityID(e.ID || '');
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
                              id="facts[8].value"
                              name="facts[8].value"
                              helperText="Please select property status"
                              func={(e) => {
                                console.log(e);
                              }}
                            />

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
                            {SinglePhaseInputs}
                            <MultipleAutoCompleteSelector
                              style={{ xs: 12, lg: 4 }}
                              label="Views"
                              placeholder="Select The Views"
                              options={viewsError ? [] : views?.data || []}
                              getOptionLabel={(view) => view?.title || view?.label || ''}
                              helperText="Please Select The Views"
                              required
                              id="facts[5].value"
                              name="facts[5].value"
                              func={(e, value) => {
                                // props.setFieldValue('facts[7].value', e.id);
                                setViews(e);
                              }}
                            />
                            <AutoCompleteSelector
                              label="Lifestyle"
                              required
                              placeholder="Select Lifestyle"
                              options={[
                                { id: 1, name: 'Affordable' },
                                { id: 2, name: 'Standard' },
                                { id: 3, name: 'Luxury' },
                                { id: 4, name: 'Ultra Luxury' }
                              ]}
                              getOptionLabel={(style) => style?.name || ''}
                              style={{ xs: 12, lg: 4 }}
                              id="facts[25].value"
                              name="facts[25].value"
                              helperText="Please select the lifestyle"
                              func={(e) => {
                                console.log(e);
                              }}
                            />
                            <InputText
                              label="Plot Area"
                              placeholder="insert area range"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[3].value"
                              name="facts[3].value"
                              helperText="insert area range"
                              type="number"
                            />

                            <InputText
                              label="Built Up Area"
                              placeholder="insert area range"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[4].value"
                              name="facts[4].value"
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
                              id="facts[16].value"
                              name="facts[16].value"
                              helperText="parking"
                              type="number"
                            />
                            <AutoCompleteSelector
                              label="Ownership"
                              required
                              placeholder="ownership"
                              options={[
                                { id: 1, name: 'Freeholdd' },
                                { id: 2, name: 'GCC Citizen' },
                                { id: 3, name: 'Leasehold' },
                                { id: 4, name: 'Local Citizen' },
                                { id: 5, name: 'Other' }
                              ]}
                              getOptionLabel={(style) => style?.name || ''}
                              style={{ xs: 12, lg: 4 }}
                              id="facts[7].value"
                              name="facts[7].value"
                              helperText="Ownership"
                              func={(e) => {
                                console.log(e);
                              }}
                            />
                            <CustomDateTime
                              style={{ xs: 12, lg: 4 }}
                              label="Start Date"
                              helperText="Please enter the project start date"
                              id="facts[9].value"
                              name="facts[9].value"
                            />
                            <CustomDateTime
                              style={{ xs: 12, lg: 4 }}
                              label="Completion Date"
                              helperText="Please enter the project completion date"
                              id="facts[10].value"
                              name="facts[10].value"
                            />
                            <CustomDateTime
                              label="Handover Date"
                              style={{ xs: 12, lg: 4 }}
                              helperText="Please enter the project handover date"
                              id="facts[11].value"
                              name="facts[11].value"
                              required
                            />
                            <InputText
                              label="No. Of Units"
                              required
                              type="number"
                              placeholder="Number of bedrooms"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[13].value"
                              name="facts[13].value"
                              helperText="Please select the number of units"
                            />
                            <InputText
                              label="Available Units"
                              required
                              type="number"
                              placeholder="please enter the number of available units"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[17].value"
                              name="facts[17].value"
                              helperText="Please select the number of available units"
                            />
                            {/*   :'', noofparkingspaces:'', */}
                            <InputText
                              label="No. Of Pools"
                              required
                              type="number"
                              placeholder="please enter the number of pools"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[22].value"
                              name="facts[22].value"
                              helperText="Please select the number of pools"
                            />
                            <InputText
                              label="No. Of Retail Centers"
                              required
                              type="number"
                              placeholder="please enter the number of retail centers"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[21].value"
                              name="facts[21].value"
                              helperText="Please select the number of retail centers"
                            />
                            <InputText
                              label="Service Charge"
                              required
                              type="number"
                              placeholder="service charge amount"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[15].value"
                              name="facts[15].value"
                              helperText="Please enter the service charge amount"
                            />
                            <InputText
                              label="Starting Price"
                              required
                              type="number"
                              placeholder="starting price"
                              style={{ xs: 12, lg: 4 }}
                              id="facts[24].value"
                              name="facts[24].value"
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

                  {/* <Grid item xs={12}>
                    <MainCard title="Facilities">
                      <Grid container spacing={2} sx={{ padding: '10px 17px' }}>
                        {Allfacilities?.data &&
                          Object?.keys(Allfacilities?.data)?.map((category) => {
                            return (
                              <Categorization
                                list={Allfacilities?.data[category]}
                                list_header={category}
                                icon={Allfacilities?.data[category]?.icon}
                                setFieldValue={props.setFieldValue}
                                setCheckedItems={setCheckedItems}
                              />
                            );
                          })}
                      </Grid>
                    </MainCard>
                  </Grid> */}

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
