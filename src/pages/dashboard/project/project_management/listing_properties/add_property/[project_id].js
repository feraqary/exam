import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  TextField,
  CircularProgress,
  Typography,
  Box,
  FormGroup
} from '@mui/material';
import { LoadScript } from '@react-google-maps/api';
import Map from 'components/map/google-map';
import MapAutocomplete from 'components/map/maps-autocomplete';
// material-ui
import Switch from '@mui/material/Switch';
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
import { Formik, useFormikContext } from 'formik';
import Layout from 'layout';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import { useGetDeveloperCompanyQuery, useGetSubCompanyAccordingToParentQuery } from 'store/services/company/companyApi';
import { useRouter } from 'next/router';
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
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useGetPropertyTypeQuery,
  useGetProjectQuery,
  useGetAllAmenitiesQuery,
  useCreateProjectPropertyMutation,
  useGetViewQuery
} from 'store/services/project/projectApi';
import { ToastContainer } from 'react-toastify';
import { ToastError, ToastSuccess } from 'utils/toast';
import 'react-toastify/dist/ReactToastify.css';
import { arrayValidator, numberValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
import Categorization from 'pages/dashboard/project/helper/Categorization';
import { values } from 'lodash';
import { ShareLocation } from '@mui/icons-material';

function AddProperty() {
  const router = useRouter();
  const { project_id } = router.query;

  console.log('id: ', project_id);
  const { data: projectData } = useGetProjectQuery(project_id, {
    skip: project_id === null || project_id === undefined
  });

  const Autofill = projectData?.data;
  console.log('data: ', projectData);
  //is shared
  const [shared, setShared] = useState(false);
  const [countryLocationID, setCountryLocationID] = useState(null);
  const [isState_Id, setIsState_Id] = useState({ id: null, isState: null });

  //property type
  const [propertyType, setPropertyType] = useState([]);

  const [long, setlong] = useState(null);
  const [lat, setlat] = useState(null);

  //location details
  const [countryID, setCountryID] = useState(null);
  const [stateID, setStateID] = useState(null);
  const [cityID, setCityID] = useState(null);
  const [communityID, setCommunityID] = useState(null);
  const [subCommunityID, setSubCommunityID] = useState(null);

  //facilities & Amenities
  const [facilities, setFacilities] = useState(null);
  const [amenities, setAmenities] = useState(null);

  const [checkedItems, setCheckedItems] = useState([]);
  const [amenitiesCheckedItems, setAmenitiesCheckedItems] = useState([]);

  //DEV COMPANY
  const [devCompany, setDevCompany] = useState(null);

  //LOCATION SHARE
  const [shareLocation, setShareLocation] = useState(false);
  const [showInformation, setShowInformation] = useState(false);

  //API============================================================================================================
  const { data: Types, isLoading, isError } = useGetPropertyTypeQuery();
  const { data: Allfacilities, isLoading: loadingFacility, isSuccess: FacilitiesSuccess } = useGetAllfacilitiesQuery();
  const { data: AllAmenities, isLoading: loadingAmenities, isSuccess: AmenitiesSuccess } = useGetAllAmenitiesQuery();
  const { data: AllViews, isLoading: loadingViww } = useGetViewQuery();

  // let amenities;
  // let facilities;
  // Promise.all([Allfacilities, Allfacilities])
  // .then(([facilitiesData, amenitiesData]) => {
  //   amenities = Object.keys(AllAmenities?.data || {});
  //   facilities = Object.keys(Allfacilities?.data || {});
  // })
  // .catch((error) => {
  //   console.log("error: ",error)
  // });
  useEffect(() => {
    if (AllAmenities && AllAmenities) {
      setAmenities(Object.keys(AllAmenities?.data || {}));
      setFacilities(Object.keys(Allfacilities?.data || {}));
    }
  }, []);
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

  // const { data: brokerComp, error: brokerCompError } = useGetBrokerCompaniesByCitiesQuery(isState_Id, {
  //   skip: isState_Id === null || isState_Id === undefined
  // });

  const [createProjectProperty, CreateProjectPropertyResult] = useCreateProjectPropertyMutation();
  useEffect(() => {
    if (CreateProjectPropertyResult.isSuccess) {
      ToastSuccess('Project has been created successfully');
    }
  }, [CreateProjectPropertyResult.isSuccess]);

  useEffect(() => {
    if (CreateProjectPropertyResult.isError) {
      const { data } = CreateProjectPropertyResult.error;
      ToastError(data.error);
    }
  }, [CreateProjectPropertyResult.isError]);
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
      case 'Elevator ':
        return (
          <>
            {/* InputText component */}
            <InputText
              label="Elevators"
              required
              type="number"
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
  const facts = propertyType?.map((component) => component?.facts?.map((fact) => fact.label));
  const Filtered = [...new Set([].concat(...facts))];

  // Generate SinglePhaseComponents for each fact in the Filtered array
  const SinglePhaseInputs = Filtered?.map((fact) => SinglePhaseComponents(fact));

  const [views, setViews] = useState(null);

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

                propertyPhase: null,
                propertyType: propertyType,
                plotAreaMin: null,
                plotAreaMax: null,
                facts: Array(30)
                  ?.fill(null)
                  ?.map((_, i) => {
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
                const ProjectData = {
                  project_id: Number(project_id),
                  phases_id: Number(values?.propertyPhase.id),
                  min_area: values?.plotAreaMin?.toString(),
                  max_area: values?.plotAreaMax?.toString(),
                  facts: values?.facts
                    ?.filter((element) => element.value && element.id !== 0)
                    ?.map((fact) => {
                      return { id: fact.id, value: fact.value };
                    }),
                  is_shared: shared,
                  lat: lat?.toString() || '25',
                  lng: long?.toString() || '100',
                  branch_developer_company_id: values?.subDeveloperCompanySelector?.id,
                  city_id: values?.locationCitySelector?.ID,
                  community_id: values?.locationCommunity?.ID,
                  description: values?.propertyDescription,
                  description_arabic: values?.arabicPropertyDescription,
                  'facilities_id[]': values.facilities,
                  'amenities_id[]': values.amenities,
                  area_range_id: 14,
                  parent_developer_company_id: values?.masterDeveloperSelector?.id,
                  property_title: values?.propertyTitle,
                  property_title_arabic: values?.arabicPropertyTitle,
                  ref_number: '',
                  state_id: values?.locationState?.ID,
                  is_show_owner_info: showInformation,
                  sub_community_id: values?.locationSubCommunity?.ID,
                  'property_types_id[]': propertyType?.map((type) => type?.id) || [],
                  use_phase_location: shareLocation,
                  country_id: values?.locationCountrySelect?.ID
                };

                const data = JSON.stringify(ProjectData);

                const submit = {
                  data: data
                };
                console.log(ProjectData);
                createProjectProperty(ProjectData);
                setSubmitting(false);
              }}
            >
              {(props) => (
                <>
                  <Grid item xs={12}>
                    <MainCard title="Project details">
                      <Grid container spacing={2} alignItems="center">
                        <AutoCompleteSelector
                          label="Property Phase"
                          placeholder="choose a phase"
                          options={Autofill?.phases || []}
                          // getOptionLabel={(phase) => phase?.phase_name || ''}
                          style={{ xs: 12, lg: 4 }}
                          helperText="Please choose a phase"
                          id="propertyPhase"
                          name="propertyPhase"
                          func={(newValue) => {
                            console.log('phaaaaase!!!: ', newValue);
                          }}
                        />

                        <AutoCompleteSelector
                          label="Developer Company"
                          placeholder="Select Developer Company"
                          options={DeveloperComp?.data || []}
                          // getOptionLabel={(company) => company?.company_name || ''}
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
                          // getOptionLabel={(sub) => sub?.company_name || ''}
                          style={{ xs: 12, lg: 4 }}
                          id="subDeveloperCompanySelector"
                          name="subDeveloperCompanySelector"
                          helperText="Please select sub developer company"
                        />
                        <Grid item xs={12} lg={12}></Grid>

                        <Grid item xs={12} lg={12}>
                          <FormControlLabel
                            value={showInformation}
                            control={
                              <Switch
                                checked={showInformation}
                                onChange={() => {
                                  setShowInformation(!showInformation);
                                }}
                              />
                            }
                            label="Show Owner Information?"
                            labelPlacement="start"
                          />
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>

                  <Grid item xs={12}>
                    <MainCard title="Location details">
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={12}>
                          <FormControlLabel
                            value={shareLocation}
                            control={
                              <Switch
                                checked={shareLocation}
                                onChange={() => {
                                  setShareLocation(!shareLocation);
                                }}
                              />
                            }
                            label="Use the same location as phase location?"
                            labelPlacement="start"
                          />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                          <Map disabled={shareLocation} normallng={long} normallat={lat} height={'40vh'} xs={12} lg={12} />
                        </Grid>
                        <AutoCompleteSelector
                          label="Country"
                          placeholder="Select Country"
                          disabled={shareLocation}
                          options={Countries?.data || []}
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
                          disabled={!countryID || shareLocation}
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
                          disabled={!stateID || shareLocation}
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
                          disabled={!cityID || shareLocation}
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
                          disabled={!communityID || shareLocation}
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

                  <Grid item xs={12}>
                    <MainCard title="Property Details">
                      <Grid container spacing={2} alignItems="center">
                        <MultipleAutoCompleteSelector
                          style={{ xs: 12, lg: 4 }}
                          label="Property Type"
                          placeholder="Select Property Type"
                          options={Types?.data || []}
                          getOptionLabel={(property) => property?.title || property?.label || ''}
                          helperText="Please select property type"
                          required
                          func={(e, value) => {
                            setPropertyType(e);
                            props.setFieldValue('propertyType', e);
                          }}
                        />
                        {SinglePhaseInputs}
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
                        />
                        <MultipleAutoCompleteSelector
                          style={{ xs: 12, lg: 4 }}
                          label="Views"
                          placeholder="Select The Views"
                          options={AllViews?.data || []}
                          // getOptionLabel={(view) => view?.title || view?.label || 'no views'}
                          helperText="Please Select The Views"
                          required
                          id="facts[5].value"
                          name="facts[5].value"
                          func={(e, value) => {
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
                        />
                        <CustomDateTime
                          helperInfo
                          style={{ xs: 12, lg: 4 }}
                          label="Start Date"
                          helperText="Please enter the project start date"
                          id="facts[9].value"
                          name="facts[9].value"
                          required={true}
                          setFieldValue={props.setFieldValue}
                        />
                        <CustomDateTime
                          helperInfo
                          style={{ xs: 12, lg: 4 }}
                          label="Completion Date"
                          helperText="Please enter the project completion date"
                          id="facts[10].value"
                          name="facts[10].value"
                          required={true}
                          setFieldValue={props.setFieldValue}
                        />
                        <CustomDateTime
                          helperInfo
                          style={{ xs: 12, lg: 4 }}
                          label="Handover Date"
                          helperText="Please enter the project handover date"
                          id="facts[11].value"
                          name="facts[11].value"
                          required={true}
                          setFieldValue={props.setFieldValue}
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

                  <Grid item xs={12}>
                    <MainCard title="Facilities">
                      <Grid container spacing={2} sx={{ padding: '10px 17px' }}>
                        <Categorization
                          list={facilities}
                          data={Allfacilities?.data || []}
                          setFieldValue={props.setFieldValue}
                          setCheckedItems={setCheckedItems}
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
                          data={AllAmenities?.data || []}
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
                      console.log('=======> ', checkedItems);
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

AddProperty.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddProperty;
