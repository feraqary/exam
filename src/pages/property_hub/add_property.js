import { Button, Checkbox, FormControlLabel, FormHelperText, Grid, InputLabel, TextField } from '@mui/material';
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
import { Formik, useFormikContext } from 'formik';
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
  useCreateProjectMutation,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useGetPropertyTypeQuery
} from 'store/services/project/projectApi';

import { arrayValidator, numberValidator, objectValidator, stringValidator } from 'utils/formik-validations';
import * as Yup from 'yup';
import Categorization from './helper/Categorization';

function AddProperty() {
  //is shared
  const [shared, setShared] = useState(false);
  const [countryLocationID, setCountryLocationID] = useState(null);
  const [isState_Id, setIsState_Id] = useState({ id: null, isState: null });

  //single or multiple phases
  const [single, setSingle] = useState(false);

  //property type
  const [propertyType, setPropertyType] = useState([]);

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

  const [createProject, CreateProjectResult] = useCreateProjectMutation();

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

  const [advertisor, setAdvertisor] = useState(null);
  const [broker, setBroker] = useState(null);
  const DetailsInput = (key) => {
    switch (key) {
      case 'broker':
        return (
          <>
            <AutoCompleteSelector
              label="broker"
              placeholder="Select Owner"
              options={brokerCompError ? [] : brokerComp?.data || []}
              getOptionLabel={(broker) => broker?.name || ''}
              style={{ xs: 12, lg: 4 }}
              helperText="Please select an owner"
              id="owner"
              name="owner"
              func={(newValue) => {
                setBroker(newValue);
              }}
            />

            {broker && (
              <>
                <AutoCompleteSelector
                  label="Agent"
                  placeholder="Select Agent"
                  options={[
                    { value: 1, name: 'agent1' },
                    { value: 2, name: 'agent2' }
                  ]}
                  getOptionLabel={(broker) => broker?.name || ''}
                  helperText="Please select an agent"
                  style={{ xs: 12, lg: 4 }}
                  id="agent"
                  name="agent"
                  func={(newValue) => {
                    // props.setFieldValue('brokerCompanies', newValue);
                  }}
                />
              </>
            )}
          </>
        );
      case 'owner':
        return (
          <AutoCompleteSelector
            label="Owner"
            placeholder="Select Owner"
            //   options={DeveloperComp?.data || []}
            //   getOptionLabel={(company) => company.name || ''}
            style={{ xs: 12, lg: 4 }}
            helperText="Please select an owner"
            id="owner"
            name="owner"
            func={(newValue) => {
              setDevCompany(newValue.id);
            }}
          />
        );
      case 'developer':
        return (
          <AutoCompleteSelector
            label="Developer Company"
            placeholder="Select Developer Company"
            options={DeveloperComp?.data || []}
            getOptionLabel={(company) => company.name || ''}
            style={{ xs: 12, lg: 4 }}
            helperText="Please select developer company"
            id="masterDeveloperSelector"
            name="masterDeveloperSelector"
            func={(newValue) => {
              setDevCompany(newValue.id);
            }}
          />
        );
    }
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places', 'drawing']}>
      <Page title="Add Project">
        <>
          <Grid container spacing={gridSpacing}>
            <Formik
              initialValues={{
                arabicPropertyDescription: '',
                arabicPropertyTitle: '',
                agent: '',
                owner: '',
                availableUnits: '',
                brokerCompanies: null,
                completionStatus: '',
                detailsCountrySelect: '',
                detailsStateSelector: '',
                facilities: checkedItems,
                isfurnished: '',
                isshared: shared,
                lat: 27,
                lifeStyleSelector: '',
                locationAddress: '',
                locationCitySelector: '',
                locationCommunity: '',
                locationCountrySelect: '',
                locationDistrict: '',
                locationState: '',
                locationSubCommunity: '',
                long: 25,
                mapUrl: '',
                masterDeveloperSelector: '',
                noofpools: '',
                noofretailcenters: '',
                noOfFloors: '',
                noofunits: '',
                numberofPhases: 1,
                ownerShip: '',
                parking: '',
                phaseType: 'single',
                phases: [{ id: null, phaseName: '', NoOfProperties: null, polygonCoords: [] }],
                plotAreaMax: '',
                plotAreaMin: '',
                price: '',
                projectCompletionDate: '',
                projectStartDate: '',
                projectView: '',
                propertyDescription: '',
                propertyStatus: '',
                propertyTitle: '',
                propertyType: propertyType,
                serviceCharge: ''
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
                  project_name: values.projectTitle,
                  parent_developer_company_id: values?.masterDeveloperSelector?.id,
                  branch_developer_company_id: values?.subDeveloperCompanySelector.ID,
                  ref_number: null,
                  country_id: values?.locationCountrySelect?.id,
                  state_id: values?.locationState?.id,
                  city_id: values?.locationCitySelector?.id,
                  community_id: values?.locationCommunity?.id,
                  sub_community_id: values?.locationSubCommunity?.id,
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
                        <Grid item lg={12}></Grid>

                        <AutoCompleteSelector
                          label="Advertiser"
                          placeholder="Select Advertiser"
                          options={[
                            { value: 'broker', name: 'Broker Company' },
                            { value: 'owner', name: 'Owner' },
                            { value: 'developer', name: 'Developer Company' }
                          ]}
                          getOptionLabel={(ad) => ad.name || ''}
                          style={{ xs: 12, lg: 4 }}
                          helperText="Please select advertiser"
                          id="advertiser"
                          name="advertiser"
                          func={(newValue) => {
                            setAdvertisor(newValue);
                            console.log(newValue);
                          }}
                        />

                        {DetailsInput(advertisor?.value)}

                        <Selector
                          id="phaseType"
                          name="phaseType"
                          label="Show / Hide Developer & Owner Informations"
                          placeholder="show or hide owner information"
                          options={[
                            { value: true, label: 'show' },
                            { value: false, label: 'hide' }
                          ]}
                          getOptionLabel={(type) => type.label || ''}
                          style={{ xs: 12, lg: 4 }}
                        />

                        {/* <AutoCompleteSelector
                          label="Sub Developer Company"
                          placeholder="Select Sub Developer Company"
                          options={subDevComp?.data || []}
                          getOptionLabel={(sub) => sub.name || ''}
                          style={{ xs: 12, lg: 4 }}
                          id="subDeveloperCompanySelector"
                          name="subDeveloperCompanySelector"
                          helperText="Please select sub developer company"
                        /> */}

                        <Grid item lg={18}></Grid>

                        {props.values.phaseTypeSelector == 2 ? setSingle(true) : setSingle(false)}
                      </Grid>
                    </MainCard>
                  </Grid>

                  <Grid item xs={12}>
                    <MainCard title="Location details">
                      <Grid container spacing={2} alignItems="center">
                        <AutoCompleteSelector
                          label="Country"
                          placeholder="Select Country"
                          options={Countries?.data || []}
                          getOptionLabel={(country) => country?.name || country?.Country || ''}
                          required
                          style={{ xs: 12, lg: 6 }}
                          helperText="Please select country"
                          name="locationCountrySelect"
                          id="locationCountrySelect"
                          func={(newValue) => {
                            setCountryID(newValue.ID);
                          }}
                        />
                        {/* 
                        <InputText
                          style={{ xs: 12, lg: 6 }}
                          label="Map URL"
                          placeholder="Address"
                          helperText="Please enter the location address"
                          type="text"
                          id="mapUrl"
                          name="mapUrl"
                          required
                        /> */}

                        <AutoCompleteSelector
                          style={{ xs: 12, lg: 6 }}
                          disabled={!countryID}
                          label="State"
                          placeholder="State"
                          type="text"
                          helperText="Please enter the location's state"
                          options={StateByCountry?.data || []}
                          getOptionLabel={(state) => state.name || state?.State || ''}
                          id="locationState"
                          name="locationState"
                          required
                          func={(e) => {
                            setStateID(e.ID);
                          }}
                        />

                        <AutoCompleteSelector
                          label="City"
                          placeholder="Select City"
                          disabled={!stateID}
                          options={CityByState?.data || []}
                          getOptionLabel={(city) => city?.name || city?.City || ''}
                          style={{ xs: 12, lg: 6 }}
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
                          disabled={!cityID}
                          id="locationCommunity"
                          name="locationCommunity"
                          helperText="Please enter the location's community"
                          options={Community?.data || []}
                          getOptionLabel={(com) => com?.name || com?.Community || ''}
                          style={{ xs: 12, lg: 6 }}
                          func={(e) => {
                            setCommunityID(e.ID);
                          }}
                        />

                        <AutoCompleteSelector
                          label="Sub Community"
                          placeholder="Sub Community"
                          // disabled={!subCommunityID}
                          type="text"
                          id="locationSubCommunity"
                          name="locationSubCommunity"
                          helperText="Please enter the location's sub community"
                          options={subCommunity?.data || []}
                          getOptionLabel={(sub) => sub?.name || sub?.SubCommunity || ''}
                          style={{ xs: 12, lg: 6 }}
                          func={(e) => {
                            setSubCommunityID(e.ID);
                          }}
                        />
                        <Grid item xs={12} lg={6}>
                          <InputLabel>Place</InputLabel>
                          <MapAutocomplete placeHolder onChangeAddress={setAddress} value="uae" setlong={setlong} setlat={setlat} />
                          <FormHelperText>Please enter place address</FormHelperText>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <Map normallng={long} normallat={lat} locationAddress={address} height={'22vh'} xs={12} lg={12} />
                      </Grid>
                    </MainCard>
                  </Grid>

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
                            getOptionLabel={(property) => property?.name || property?.title || ''}
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
                            label="Plot Area -sqft- "
                            placeholder="minimum"
                            style={{ xs: 12, lg: 4 }}
                            id="plot_area"
                            name="plot_area"
                            helperText="plot area"
                            type="number"
                          />
                          <InputText
                            label="Built Up -sqft- "
                            placeholder="minimum"
                            style={{ xs: 12, lg: 4 }}
                            id="built_up_area"
                            name="built_up_area"
                            helperText="built up area"
                            type="number"
                          />
                          <Grid item xs={12} lg={4}>
                            <InputLabel required>Area Range</InputLabel>
                            <Grid item row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <InputText
                                placeholder="minimum"
                                style={{ xs: 6, lg: 5.9 }}
                                id="minimum"
                                name="minimum"
                                helperText="minimum area range"
                                type="number"
                              />
                              <InputText
                                placeholder="maximum"
                                style={{ xs: 6, lg: 5.9 }}
                                id="maximum"
                                name="maximum"
                                helperText="maximum area range"
                                type="number"
                              />
                            </Grid>
                            <FormHelperText>Please enter the area range</FormHelperText>
                          </Grid>
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
                            placeholder="please enter the number of available units"
                            style={{ xs: 12, lg: 4 }}
                            id="availableUnits"
                            name="availableUnits"
                            helperText="Please select the number of available units"
                          />
                          {/*   :'', noofparkingspaces:'', */}
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
                            label="Service Charge"
                            required
                            type="number"
                            placeholder="service charge amount"
                            style={{ xs: 12, lg: 4 }}
                            id="serviceCharge"
                            name="serviceCharge"
                            helperText="Please enter the service charge amount"
                          />
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
                  {/* <Button
                    onClick={() => {
                      console.log('values=======> ', props.values);
                    }}
                  >
                    test
                  </Button> */}
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
