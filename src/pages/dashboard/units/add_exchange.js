// material-ui
import { Grid, Box } from '@mui/material';
import * as Yup from 'yup';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Map from 'components/map/google-map';
import MapAutocomplete from 'components/map/maps-autocomplete';
import { LoadScript } from '@react-google-maps/api';
import Image from 'next/image';
import valid from 'card-validator';
import { objectValidator, arrayValidator, stringValidator, numberValidator, fileValidator, dateValidator } from 'utils/formik-validations';
import iban from 'iban';

// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import Selector from 'components/InputArea/Selector';
import Container from 'components/Elements/Container';
import AutoCompleteSelector, { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';
import { useEffect } from 'react';
import { setCountry } from 'store/slices/country-section/slice/country';
import { setState } from 'store/slices/country-section/slice/country';
import InputLayout from 'components/InputArea/InputLayout';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import { ToastContainer } from 'react-toastify';
import { useRef } from 'react';
import { Formik } from 'formik';
import PhoneInput from 'components/InputArea/PhoneInput';
import { useCreateCompanyMutation, useGetSubCompanyTypesByCompanyTypeQuery } from 'store/services/company/companyApi';
import { useGetAllMainServicesBySubCompanyTypeQuery, useGetAllServicesBYMainServiceTypeQuery } from 'store/services/services/serviceApi';
import {
  useGetCitiesByStateQuery,
  useGetCommunitiesByCityQuery,
  useGetCountriesQuery,
  useGetCurrenciesQuery,
  useGetStatesByCountryQuery,
  useGetSubCommunitiesByCommunityQuery
} from 'store/services/country/countryApi';
import { ToastSuccess } from 'utils/toast';

import { property } from 'lodash';
import { Wysiwyg} from '@mui/icons-material';


// ==============================|| FIELDS ||============================== //
const countries = [
  { id: 0, label: 'United States' },
  { id: 1, label: ' Pakistan ' },
  { id: 2, label: 'Egypt' },
  { id: 3, label: 'Syria' }
];
const propertyTypes = [
  { id: 0, label: 'Hotel Apartment' },
  { id: 1, label: 'Villa'},
  { id: 2, label: 'Commercial Villa'},
  { id: 3, label: 'Townhouse' },
  { id: 4, label: 'Apartment'},
  { id: 5, label: 'Penthouse' },
  { id: 6, label: 'Residential Land'},
  { id: 7, label: 'Commercial Land'},
  { id: 8, label: 'Mixed Used Land'},
  { id: 9, label: 'Industrial Land'},
  { id: 10, label: ' Office'},
  { id: 11, label: ' Commercial Floor'}, 
  { id: 12, label: 'Showroom'}, 
  { id: 13, label: 'Retail'},
  { id: 14, label: 'Shop'},
  { id: 15, label: 'Labour Camp'},
  { id: 16, label: 'Farm'}
];
const bedrooms = [
  { id: 0, label: 'Studio' },
  { id: 1, label: '1 Bedroom'},
  { id: 1, label: '2 Bedroom'},
  { id: 1, label: '3 Bedroom'},
  { id: 1, label: '4 Bedroom'},
  { id: 1, label: '5 Bedroom'},
  { id: 1, label: '6 Bedroom'},
  { id: 1, label: '7 Bedroom'},
]
const completion_status = [
  { id: 0, label: 'Ready'},
  { id: 1, label: 'Completed'},
  { id: 2, label: 'Off-Plan'},
  { id: 3, label: 'Upcoming'},
  { id:4, label: 'Under Construction'}
]
const view= [
  { id: 0, label: 'Sea'},
  { id: 1, label: 'Street'},
  { id: 2, label: 'City View'}
]
const ownership = [
  { id: 0, label: 'Freehold'},
  { id: 1, label: 'Leasehold'},
  { id: 2, label: 'Local Citizen'},
  {
    id: 3, label: 'GCC Citizenship'
  },
  { label: 4, label: ' Others'}
]
const furnished = [
  { id: 0, label: 'All Furnished'},
  { id: 1, label: 'Non-Furnished'},
  { id: 2, label: ' Partially Furnished'}
]
const vat = [
  { id: 0, label: 'Commercial Property'},
  {id: 1, label: 'New Residential Property'},
  { id: 2, label: 'Existing Residential Property'},
  { id: 3, label: 'Bare Island'},
  { id: 4, label: 'Covered Land'},
  { id: 5, label: 'Supply of a Charitable Building'},
  { id: 6, label: 'Subsequent Supply of Charitable Building'},
  { id: 7, label: 'Property Located within a Designated Zone'}
]
const unit_usage = [
  { id: 0, label: 'Residential'},
  { id: 1, label: 'Industrial'},
  { id: 2, label: 'Mixed Used'},
  { id: 3, label: 'Chemical Processing'},
  { id: 4, label: 'Commercial'},
  { id: 5, label: 'Heavy Industrial'},
  { id:6, label: 'Light Industrial'},
  { id:7, label: 'Storage'},
  { id: 8, label: 'Cafeteria'},
  { id: 9, label: 'Restaurant'},
  { id: 10, label: 'Showrooms'},
  { id: 11, label: 'Business Center'},
  { id: 12, label: 'Offices'}
]

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
// ==============================|| Add Unit form ||============================== //
const validationSchema = Yup.object({
  unitType: objectValidator('Mandatory Selection', true),
  subCompanyType: objectValidator('Mandatory Selection', true),
  mainService: objectValidator('Mandatory Selection', true),
  service: arrayValidator('Please select a service', true, 1),
  companyName: stringValidator('Please provide a company name', true),
  reraNo: stringValidator('Please provide a valid reara number', true),
  reraExpiryDate: dateValidator('Please select an expiration date', true),
  billingReference: stringValidator('please provide a valid bill reference', true),
  vatNo: stringValidator('Please provide a valid vat number', true),
  vatStatus: numberValidator('Please select your vat status', true),
  country: objectValidator('Mandatory Selection', true),
  state: objectValidator('Mandatory Selection', true),
  city: objectValidator('Mandatory Selection', true),
  community: objectValidator('Not a valid selection'),
  subCommunity: objectValidator('Not a valid selection'),
  officeAddress: stringValidator('Please provide a valid office address', true),
  mapUrl: stringValidator('Please provide a valid map url').url(),
  lat: numberValidator('Latitude is missing', true),
  long: numberValidator('Longitude is missing', true),
  companyWebsite: stringValidator('Please provid a valid company website', true).url(),
  companyEmailAddress: stringValidator('Please provide a valid company email address', true).email(),
  companyContactNumber: stringValidator('Please provide a valid company contact number', true),
  companyDescription: stringValidator('Please provide a company description', true),
  lisenceNo: stringValidator('Please provide a valid liscence number', true),
  lisenceExpiryDate: dateValidator('Please select an expiration date', true),
  facebook: stringValidator('Please provide your facebook profile'),
  instagram: stringValidator('Please provide your instagram profile'),
  linkedin: stringValidator('Please provide your linkedin profile'),
  twitter: stringValidator('Please provide your twitter profile'),
  youtube: stringValidator('Please provide your YouTube profile'),
  firstName: stringValidator('Please provide your first name', true),
  lastName: stringValidator('Please provide your last name', true),
  emailAddress: stringValidator('Please provide a valid email address', true).email(),
  phoneNumber: stringValidator('Please provide a valid phone number', true),
  numberOfEmployees: numberValidator('Please enter the number of employees', true),
  subscriptionDuration: stringValidator('Please select a subscription duration', true),
  subscriptionStartDate: dateValidator('Please select a subscription start date', true),
  subscriptionEndDate: dateValidator('Please select a subscription end date', true),
  ibanNumber: Yup.string()
    .required()
    .trim()
    .test('TEST_IBAN_NUMBER', 'iban number is invalid', (value) => {
      return iban.isValid(value);
    }),
  currency: objectValidator('Mandatory Selection', true),
  accountCountry: objectValidator('Mandatory Selection', true),
  bankName: stringValidator('Please provide a bank name', true),
  bankBranch: stringValidator('Please provide a bank branch', true),
  swiftCode: stringValidator('Please provide a swift code', true),
  cardNumber: Yup.string().trim().min(6, 'please provide a valid account number').max(15, 'please provide a valid account number'),

  cardName: Yup.string()
    .trim()
    .test('CREDIT_CARD_NAME', 'Please provide a valid name', (value) => valid.cardholderName(value).isValid),

  adminProfilePicture: fileValidator(SUPPORTED_FORMATS),
  companyLogo: fileValidator(SUPPORTED_FORMATS),
  companyCoverImage: fileValidator(SUPPORTED_FORMATS),
  vatFile: fileValidator(['application/pdf']),
  reraFile: fileValidator(['application/pdf']),
  lisenceFile: fileValidator(['application/pdf'])
});

function ExchangeForm() {
  const [address, setAddress] = useState('Abu Dhabi');
  const [companyId, setCompanyId] = useState(null);
  const [subCompanyTypeId, setSubCompanyTypeId] = useState(null);
  const [mainServiceId, setMainServiceId] = useState(null);

  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [communityId, setCommunityId] = useState(null);

  const {
    companyInformation,
    error: companyError,
    loading: companyLoading,
    companyTypes,
    mainServices,
    services
  } = useSelector((state) => state.companies);

  const {
    data: companySubTypes,
    error: companySubTypeError,
    isError,
    isLoading,
    isFetching
  } = useGetSubCompanyTypesByCompanyTypeQuery(companyId, {
    skip: companyId === null || companyId === undefined
  });

  const {
    data: mainServicesData,
    error: mainServicesError,
    isError: mainServiceIsError,
    isLoading: mainServiceIsLoading,
    isFetching: mainServiceIsFetching
  } = useGetAllMainServicesBySubCompanyTypeQuery(subCompanyTypeId, {
    skip: subCompanyTypeId === null || subCompanyTypeId === undefined
  });

  const {
    data: subServicesData,
    error: subServicesError,
    isError: subServicesIsError,
    isLoading: subServicesIsLoading,
    isFetching: subServicesIsFetching
  } = useGetAllServicesBYMainServiceTypeQuery(mainServiceId, {
    skip: mainServiceId === null || mainServiceId === undefined
  });

  const {
    data: countriesData,
    error: countriesError,
    isError: countriesIsError,
    isLoading: countriesIsLoading,
    isFetching: countriesIsFetching
  } = useGetCountriesQuery();

  const {
    data: statesData,
    error: statesError,
    isError: statesIsError,
    isLoading: statesIsLoading,
    isFetching: statesIsFetching
  } = useGetStatesByCountryQuery(countryId, {
    skip: countryId === null || countryId === undefined
  });

  const {
    data: citiesData,
    error: citiesError,
    isError: citiesIsError,
    isLoading: citiesIsLoading,
    isFetching: citiesIsFetching
  } = useGetCitiesByStateQuery(stateId, {
    skip: stateId === null || stateId === undefined
  });

  const {
    data: communitiesData,
    error: communitiesError,
    isError: communitiesIsError,
    isLoading: communitiesIsLoading,
    isFetching: communitiesIsFetching
  } = useGetCommunitiesByCityQuery(cityId, {
    skip: cityId === null || cityId === undefined
  });

  const {
    data: subCommunitiesData,
    error: subCommunitiesError,
    isError: subCommunitiesIsError,
    isLoading: subCommunitiesIsLoading,
    isFetching: subCommunitiesIsFetching
  } = useGetSubCommunitiesByCommunityQuery(communityId, {
    skip: communityId === null || communityId === undefined
  });

  const {
    data: currenciesData,
    error: currenciesError,
    isError: currenciesIsError,
    isLoading: currenciesIsLoading,
    isFetching: currenciesIsFetching
  } = useGetCurrenciesQuery();

  const [createCompany, result] = useCreateCompanyMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Company has been created successfully');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      ToastError(data.error);
    }
  }, [result.isError]);

  const vatRef = useRef(null);
  const lisenceRef = useRef(null);
  const companyLogoRef = useRef(null);
  const companyCoverRef = useRef(null);
  const profileRef = useRef(null);
  const reraRef = useRef(null);
  const submitForm = (values) => {
    const formData = new FormData();
    formData.append('company_types', values.companyType.id);
    formData.append('subcompany_type', values.subCompanyType.id);
    formData.append('main_service_type', values.mainService.id);
    formData.append('sub_service_type', values.service);
    formData.append('company_name', values.companyName);
    formData.append('rera_no', values.reraNo);
    formData.append('commercial_license_no', values.lisenceNo);
    formData.append('commercial_license_file_url', values.lisenceFile);
    formData.append('commercial_license_expiry', values.lisenceExpiryDate);
    formData.append('vat_no', values.vatNo);
    formData.append('vat_status', values.vatStatus);
    formData.append('vat_file_url', values.vatFile);
    formData.append('lat', values.lat);
    formData.append('lng', values.long);
    formData.append('no_of_employees', values.numberOfEmployees);
    formData.append('billing_country_id', values.country.ID);
    formData.append('billing_state_id', values.state.ID);
    formData.append('billing_city_id', values.city.ID);
    formData.append('billing_community_id', values.community.ID);
    formData.append('billing_sub_community_id', values.subCommunity.ID);
    formData.append('billing_office_address', values.officeAddress);
    formData.append('billing_reference', values.billingReference);
    formData.append('google_map_link', values.mapUrl);
    formData.append('website_url', values.companyWebsite);
    formData.append('company_email', values.companyEmailAddress);
    formData.append('company_contact_number', values.companyContactNumber);
    formData.append('company_whatsapp_number', values.companyContactNumber);
    formData.append('company_description', values.companyDescription);
    formData.append('logo_url', values.companyLogo);
    formData.append('cover_image_url', values.companyCoverImage);
    formData.append('facebook_profile_url', values.facebook);
    formData.append('instagram_profile_url', values.twitter);
    formData.append('linkedin_profile_url', values.instagram);
    formData.append('twitter_profile_url', values.linkedin);
    formData.append('first_name', values.firstName);
    formData.append('last_name', values.lastName);
    formData.append('user_email', values.emailAddress);
    formData.append('user_phone_number', values.phoneNumber);
    formData.append('user_profile_picture', values.adminProfilePicture);
    formData.append('subscription_duration', values.subscriptionDuration);
    formData.append('subscription_start_date', values.subscriptionStartDate);
    formData.append('subscription_end_date', values.subscriptionEndDate);
    formData.append('account_name', values.cardName);
    formData.append('account_number', values.cardNumber);
    formData.append('iban', values.ibanNumber);
    formData.append('currency_id', values.currency.ID);
    formData.append('bank_country_id', values.accountCountry.ID);
    formData.append('bank_name', values.bankName);
    formData.append('branch_name', values.bankBranch);
    formData.append('swift_code', values.swiftCode);
    formData.append('rera_file_url', values.reraFile);
    formData.append('rera_expiry', values.reraExpiryDate);
    values.service.forEach((ser) => {
      formData.append('sub_service_type[]', ser?.id);
    });
    createCompany(formData);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places', 'drawing']}>
      <Page title="Add to Exchange">
        <ToastContainer />
        <Grid container spacing={gridSpacing}>
          <Formik
            validateOnChange={false}
            initialValues={{
              companyType: '',
              subCompanyType: '',
              mainService: '',
              service: [],
              companyName: '',
              reraNo: '',
              reraExpiryDate: '', //
              billingReference: '',
              vatNo: '',
              vatStatus: '',
              country: '',
              state: '',
              city: '',
              community: '',
              subCommunity: '',
              officeAddress: '',
              mapUrl: '',
              place: '',
              lat: 24.4984312,
              long: 54.4036975,
              companyWebsite: '',
              companyEmailAddress: '',
              companyContactNumber: '',
              companyDescription: '',
              lisenceNo: '',
              lisenceExpiryDate: '',
              facebook: '',
              instagram: '',
              linkedin: '',
              twitter: '',
              youtube: '',
              firstName: '',
              lastName: '',
              emailAddress: '',
              phoneNumber: '',
              numberOfEmployees: '',
              subscriptionDuration: '',
              subscriptionStartDate: '',
              subscriptionEndDate: '',
              cardNumber: '',
              cardName: '',
              ibanNumber: '',
              currency: '',
              accountCountry: '',
              bankName: '',
              bankBranch: '',
              swiftCode: '',
              reraFile: '', //
              lisenceFile: '',
              vatFile: '',
              companyLogo: '',
              companyCoverImage: '',
              adminProfilePicture: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm, validateForm }) => {
              await validateForm(values);
              submitForm(values);
              setSubmitting(false);
              if (!companyError) {
                resetForm();
              }
            }}
            validator={() => ({})}
            onReset={(_) => {
              vatRef.current.value = '';
              lisenceRef.current.value = '';
              companyLogoRef.current.value = '';
              companyCoverRef.current.value = '';
              profileRef.current.value = '';
              reraRef.current.value = '';
            }}
          >
            {(props) => (
              <>
                <Container title="Add to Exchange Details" style={{ xs: 12 }}>
                <Container title="Location Details" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Select Desired Countries for Exchange"
                      id="country"
                      name="country"
                      options={countriesError || countriesIsLoading ? [] : countriesData?.data || []}
                      getOptionLabel={(country) => country.Country || ''}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <Image
                            src={`http://20.203.31.58/upload/${option.Flag}`}
                            width={30}
                            height={30}
                            style={{ objectFit: 'contain' }}
                          />

                          {option.Country}
                        </Box>
                      )}
                      placeholder="Select a Country"
                      loading={countriesIsLoading}
                      func={(newValue) => {
                        setCountryId(newValue?.ID);
                        props.setFieldValue('subCommunity', '');
                        props.setFieldValue('state', '');
                        props.setFieldValue('city', '');
                        props.setFieldValue('community', '');
                        props.setFieldValue('subCommunity', '');
                      }}
                      required={true}
                    />

                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="States"
                      id="state"
                      name="state"
                      options={statesData?.data || []}
                      getOptionLabel={(state) => state.State || ''}
                      placeholder="Select a State"
                      disabled={props.values.country ? false : true}
                      loading={statesIsLoading}
                      func={(newValue) => {
                        setStateId(newValue?.ID);
                        props.setFieldValue('subCommunity', '');
                        props.setFieldValue('city', '');
                        props.setFieldValue('community', '');
                      }}
                      required={true}
                    />

                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Cities"
                      id="city"
                      name="city"
                      options={citiesData?.data || []}
                      getOptionLabel={(city) => city.City || ''}
                      placeholder="Select a City"
                      disabled={props.values.state ? false : true}
                      loading={citiesIsLoading}
                      func={(newValue) => {
                        setCityId(newValue?.ID);
                        props.setFieldValue('subCommunity', '');
                        props.setFieldValue('community', '');
                      }}
                      required={true}
                    />
                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Communities"
                      id="community"
                      name="community"
                      options={communitiesData?.data || []}
                      getOptionLabel={(community) => community.Community || ''}
                      placeholder="Select a Community"
                      disabled={props.values.city ? false : true}
                      loading={communitiesIsLoading}
                      func={(newValue) => {
                        setCommunityId(newValue?.ID);
                        props.setFieldValue('subCommunity', '');
                      }}
                      required={false}
                    />
                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Sub Communities"
                      id="subCommunity"
                      name="subCommunity"
                      options={subCommunitiesData?.data || []}
                      getOptionLabel={(subCommunity) => subCommunity.SubCommunity || ''}
                      placeholder="Select a Community"
                      disabled={props.values.community ? false : true}
                      loading={subCommunitiesIsLoading}
                      required={false}
                    />
                    <InputText
                      helperInfo
                      label="Office Address"
                      placeholder="Enter the Office address"
                      helperText="Please enter the office address"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      id="officeAddress"
                      name="officeAddress"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      label="Google Map Link"
                      placeholder="Google Map URL"
                      helperText="Please enter Google Map URL for Company Location"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      id="mapUrl"
                      name="mapUrl"
                      required={false}
                    />

                    <InputLayout
                      label="Place"
                      helperText="Please Enter place address"
                      style={{ xs: 12, lg: 6 }}
                      required={true}
                      metaError={props.errors.place}
                      metaTouched={props.touched.place}
                    >
                      <MapAutocomplete
                        placeHolder
                        onChangeAddress={setAddress}
                        country={setCountry}
                        state={setState}
                        value="uae"
                        id="place"
                        name="place"
                        metaError={props.errors.place}
                        metaTouched={props.touched.place}
                      />
                    </InputLayout>
                    <Map locationAddress={address} height={'27vh'} xs={12} lg={12} mapUrl={props.values.mapUrl} />
                  </Grid>
                </Container>
                </Container>
                <Container title="Unit Details" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                  <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Property Types"
                      id="propertyTypes"
                      name="propertyTypes"
                      options={propertyTypes}
                      placeholder="Select Property Type"
                    />
                         <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Completion Status"
                      id="completionStatus"
                      name="completionStatus"
                      options={completion_status}
                      placeholder="Select Completion Status"
                    />
                        <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Ownership"
                      id="ownership"
                      name="ownership"
                      options={ownership}
                      placeholder="Select Ownership Status"
                      />
                       <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Furnished Status"
                      id="furnished"
                      name="furnished"
                      options={furnished}
                      placeholder="Select Furnished Status"
                      />
                    <InputText
                      helperInfo
                      label="Plot Area"
                      placeholder="Enter the Plot Area"
                      helperText="Please enter Plot Area"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="plot_area"
                      id="Plot Area"
                      required={true}
                    />
                     <InputText
                      helperInfo
                      label="Built-Up Area"
                      placeholder="Enter the Built-Up Area"
                      helperText="Please enter Built-Up Area"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="companyWebsite"
                      id="companyWebsite"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      label="No.of Bathrooms"
                      placeholder="Enter Number of Bathrooms"
                      helperText="Please enter the No.of Bathroom"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="companyEmailAddress"
                      id="companyEmailAddress"
                      required={true}
                    />
                     <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="No. of Bedrooms"
                      helperText=" Enter Number of Bedrooms"
                      id="propertyTypes"
                      name="propertyTypes"
                      options={bedrooms}
                      placeholder="Select Number of Bedrooms"
                    />
                    <InputText
                      helperInfo
                      label="VAT Value"
                      placeholder="vat Value"
                      helperText="Please enter the VAT Value"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="vat_value"
                      id="vat_value"
                      required={true}
                    />
                      <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="VAT"
                      id="propertyTypes"
                      helperText="Enter VAT Type"
                      name="propertyTypes"
                      options={vat}
                      placeholder="Select Property Type"
                    />

                 <InputText
                      helperInfo
                      label="Service Charge"
                      placeholder="Service Charge"
                      helperText="Please Enter the VAT Value"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="vat_value"
                      id="vat_value"
                      required={true}
                    />
                      <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Unit Usage"
                      id="propertyTypes"
                      name="propertyTypes"
                      options={unit_usage}
                      placeholder="Select Property Type"
                      helperText="Enter Unit Usage"
                     
                    />
                    <CustomDateTime
                      helperInfo
                      style={{ xs: 12, lg: 6}}
                     
                      label="Paid Until"
                      helperText="Please enter Values"
                      id="paidUntilDate"
                      name="paidUntilDate"
                      required={true}
                      func={{ value: props.values.subscriptionDuration, name: 'subscriptionEndDate' }}
                      disabled={!props.values.subscriptionDuration}
                    />
               
                  </Grid>
                </Container>
                <Container style={{ xs: 12 }} title="Private Amenities">
                  <Grid container spacing={2} alignItems="center">
                    
                  
                  </Grid>
                 
                </Container>
                <Container style={{ xs: 12 }} title="Commercial Amenities">
                  <Grid container spacing={2} alignItems="center">
                    
                  
                  </Grid>
                 
                </Container>
                <Container style={{ xs: 12 }} title="Description">
                  <Grid container spacing={2} alignItems="center">
                
                    
                  
                  </Grid>
                </Container>
              
            
              </>
            )}
          </Formik>
        </Grid>
      </Page>
    </LoadScript>
  );
}

ExchangeForm.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ExchangeForm;
