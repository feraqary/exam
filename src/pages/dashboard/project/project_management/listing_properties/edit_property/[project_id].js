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
  useGetAllfacilitiesQuery,
  useGetPropertyTypeQuery,
  useGetProjectQuery,
  useGetAllAmenitiesQuery,
  useGetViewQuery,
  useUpdateProjectPropertyMutation,
  useGetProjectsPropertyByIdQuery
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

  const { data: projectData } = useGetProjectQuery(project_id, {
    skip: project_id === null || project_id === undefined
  });
  const { data: propertyData } = useGetProjectsPropertyByIdQuery(project_id, {
    skip: project_id === null || project_id === undefined
  });

  const Autofill = propertyData?.data;

  console.log('propertyData: ', Autofill);
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
  const { data: AllViews, isLoading: loadingView } = useGetViewQuery();

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
  }, [FacilitiesSuccess, AmenitiesSuccess]);
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

  const [updateProjectProperty, updateProjectPropertyResult] = useUpdateProjectPropertyMutation();
  useEffect(() => {
    if (updateProjectPropertyResult.isSuccess) {
      ToastSuccess('Project has been created successfully');
    }
  }, [updateProjectPropertyResult.isSuccess]);

  useEffect(() => {
    if (updateProjectPropertyResult.isError) {
      const { data } = updateProjectPropertyResult.error;
      ToastError(data.error);
    }
  }, [updateProjectPropertyResult.isError]);
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
                detailsCountrySelect: '',
                detailsStateSelector: '',
                masterDeveloperSelector: Autofill?.developer_company || '',
                subDeveloperCompanySelector: '',
                amenities: [],
                isshared: shared,
                locationAddress: '',
                locationCountrySelect: Autofill?.country || '',
                locationCitySelector: Autofill?.city || '',
                locationState: Autofill?.state || '',
                locationCommunity: Autofill?.community || '',
                locationSubCommunity: Autofill?.sub_community || '',
                locationDistrict: '',
                propertyStatus: '',
                place: '',
                lat: 27,
                long: 25,

                propertyPhase: null,
                propertyType: propertyType,
                plotAreaMin: Autofill?.min_area,
                plotAreaMax: Autofill?.max_area,
                //facts:
                number_of_floors: null,
                Plot_Area: null,
                Built_up_Area: null,
                view: null,
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

                propertyTitle: Autofill?.property_title || ' ',
                arabicPropertyTitle: ' ',
                propertyDescription: ' ',
                arabicPropertyDescription: ' '
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
                  id: Number(project_id),
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
                updateProjectProperty(ProjectData);
                setSubmitting(false);
              }}
            >
              {(props) => (
                <>
                  <ToastContainer />
                  <Grid item xs={12}>
                    <MainCard title="Project details">
                      <Grid container spacing={2} alignItems="center">
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
                          disabled={shareLocation}
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
                          disabled={shareLocation}
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
                          disabled={shareLocation}
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
                          disabled={shareLocation}
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
                          options={AllViews?.data || []}
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
                            console.log('e: ', e);
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
