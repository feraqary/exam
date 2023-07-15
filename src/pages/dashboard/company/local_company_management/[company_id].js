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
// redux actions import

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
import { useCreateCompanyMutation, useGetCompanyQuery, useGetSubCompanyTypesByCompanyTypeQuery } from 'store/services/company/companyApi';
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
import { useRouter } from 'next/router';

// ==============================|| FIELDS ||============================== //
const options = [
  { label: 'Broker Company', id: 1 },
  { label: 'Developer Company', id: 2 },
  { label: 'Service Company', id: 3 }
];

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
// ==============================|| Add Company form ||============================== //
const validationSchema = Yup.object({
  companyType: objectValidator(),
  subCompanyType: objectValidator(),
  mainService: objectValidator(),
  service: arrayValidator('Please select a service', 1),
  companyName: stringValidator('Please provide a company name'),
  reraNo: stringValidator('Please provide a valid reara number'),
  reraExpiryDate: dateValidator('Please select an expiration date'),
  billingReference: stringValidator('please provide a valid bill reference'),
  vatNo: stringValidator('Please provide a valid vat number'),
  vatStatus: stringValidator('Please select your vat status'),
  country: objectValidator(),
  state: objectValidator(),
  city: objectValidator(),
  community: objectValidator(),
  subCommunity: objectValidator(),
  officeAddress: stringValidator('Please provide a valid office address'),
  mapUrl: stringValidator('Please provide a valid map url').url(),
  // place: Yup.array().required('Please provide a valid address or place'),
  lat: numberValidator('Latitude is missing'),
  long: numberValidator('Longitude is missing'),
  companyWebsite: stringValidator('Please provid a valid company website').url(),
  companyEmailAddress: stringValidator('Please provide a valid company email address').email(),
  companyContactNumber: stringValidator('Please provide a valid company contact number'),
  companyDescription: stringValidator('Please provide a company description'),
  lisenceNo: stringValidator('Please provide a valid liscence number'),
  lisenceExpiryDate: dateValidator('Please select an expiration date'),
  facebook: stringValidator('Please provide your facebook profile'),
  instagram: stringValidator('Please provide your instagram profile'),
  linkedin: stringValidator('Please provide your linkedin profile'),
  twitter: stringValidator('Please provide your twitter profile'),
  youtube: stringValidator('Please provide your YouTube profile'),
  tiktok: stringValidator('Please provide your TikTok profile'),
  firstName: stringValidator('Please provide your first name'),
  lastName: stringValidator('Please provide your last name'),
  emailAddress: stringValidator('Please provide a valid email address').email(),
  phoneNumber: stringValidator('Please provide a valid phone number'),
  numberOfEmployees: numberValidator('Please enter the number of employees'),
  subscriptionDuration: stringValidator('Please select a subscription duration'),
  subscriptionStartDate: dateValidator('Please select a subscription start date'),
  subscriptionEndDate: dateValidator('Please select a subscription end date'),
  ibanNumber: Yup.string()
    .trim()
    .test('TEST_IBAN_NUMBER', 'iban number is invalid', (value) => {
      return iban.isValid(value);
    }),
  currency: objectValidator(),
  accountCountry: objectValidator(),
  bankName: stringValidator('Please provide a bank name'),
  bankBranch: stringValidator('Please provide a bank branch'),
  swiftCode: stringValidator('Please provide a swift code'),
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

function ColumnsLayouts() {
  const [address, setAddress] = useState('Abu Dhabi');
  const [companyId, setCompanyId] = useState(null);
  const [subCompanyTypeId, setSubCompanyTypeId] = useState(null);
  const [mainServiceId, setMainServiceId] = useState(null);

  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [communityId, setCommunityId] = useState(null);

  const router = useRouter();

  const { data } = useGetCompanyQuery({
    id: router.query.company_id,
    company_type: router.query.company_type,
    is_branch: router.query.is_branch
  });

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

  const vatRef = useRef(null);
  const lisenceRef = useRef(null);
  const companyLogoRef = useRef(null);
  const companyCoverRef = useRef(null);
  const profileRef = useRef(null);
  const reraRef = useRef(null);

  const submitForm = (values) => {
    const formData = new FormData();
    formData.append('company_types', values.companyType.id);
    formData.append('sub_company_type', values.subCompanyType.id);
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
      <Page title="Add Company">
        <ToastContainer />
        <Grid container spacing={gridSpacing}>
          <Formik
            initialValues={{
              companyType: options[0],
              subCompanyType: data?.data.CompanyTypesID,
              mainService: data?.data.MainServiceType,
              service: [],
              companyName: '',
              reraNo: '',
              reraExpiryDate: '', //
              billingReference: '',
              vatNo: '',
              vatStatus: '1',
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
            onSubmit={(values, { setSubmitting, resetForm }) => {
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
                <Container title="Add Company Details" style={{ xs: 12 }}>
                  <Grid container spacing={2} justifyContent="center" style={{ xs: 12 }}>
                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 10 }}
                      label="Company Type"
                      id="companyType"
                      name="companyType"
                      options={options}
                      placeholder="Select Company Type"
                      setFieldValue={props.setFieldValue}
                      func={(newValue) => {
                        setCompanyId(newValue?.id);
                        props.setFieldValue('service', props.initialValues.service);
                        props.setFieldValue('subCompanyType', props.initialValues.subCompanyType);
                        props.setFieldValue('mainService', props.initialValues.mainService);
                      }}
                      required={true}
                    />
                    {props.values.companyType && (
                      <AutoCompleteSelector
                        helperInfo
                        style={{ xs: 12, lg: 10 }}
                        label="Sub Company Type"
                        id="subCompanyType"
                        name="subCompanyType"
                        placeholder="Select Sub Company Type"
                        options={companySubTypeError ? [] : companySubTypes?.data || []}
                        getOptionLabel={(companySubType) => companySubType.title || ''}
                        setFieldValue={props.setFieldValue}
                        func={(newValue) => {
                          setSubCompanyTypeId(newValue?.id);
                          props.setFieldValue('mainService', props.initialValues.mainService);
                          props.setFieldValue('service', props.initialValues.service);
                        }}
                        required={true}
                      />
                    )}

                    {props.values.subCompanyType && (
                      <AutoCompleteSelector
                        helperInfo
                        style={{ xs: 12, lg: 10 }}
                        label="Main Service Type"
                        id="mainService"
                        name="mainService"
                        placeholder="Select Main Service Type"
                        options={mainServiceIsError ? [] : mainServicesData?.data || []}
                        getOptionLabel={(mainService) => mainService.title || ''}
                        setFieldValue={props.setFieldValue}
                        func={(newValue) => {
                          setMainServiceId(newValue?.id);
                          props.setFieldValue('service', props.initialValues.service);
                        }}
                        required={true}
                      />
                    )}
                    {props.values.mainService && (
                      <MultipleAutoCompleteSelector
                        style={{ xs: 12, lg: 10 }}
                        label="Sub Service Type"
                        id="service"
                        name="service"
                        placeholder="Select Sub Service Type"
                        options={subServicesError ? [] : subServicesData?.data || []}
                        getOptionLabel={(subService) => subService.title || ''}
                        setFieldValue={props.setFieldValue}
                      />
                    )}
                  </Grid>

                  <Grid container spacing={2} alignItems="center">
                    <InputText
                      helperInfo
                      label="Company Name"
                      placeholder="Enter Company Name"
                      helperText="Please Enter Official Company Name"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                      id="companyName"
                      name="companyName"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      label="RERA No."
                      placeholder="Enter RERA No."
                      helperText="Please Enter RERA No."
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                      id="reraNo"
                      name="reraNo"
                      required={true}
                    />
                    <CustomDateTime
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="RERA No. Expiry Date"
                      helperText="Please enter RERA No. Expiry Date"
                      id="reraExpiryDate"
                      name="reraExpiryDate"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                    <FileUpload
                      helperInfo
                      label="Upload RERA"
                      placeholder="Upload RERA"
                      helperText="Please upload the company RERA"
                      style={{ xs: 12, lg: 6 }}
                      required={true}
                      setFieldValue={props.setFieldValue}
                      id="reraFile"
                      name="reraFile"
                      ref={reraRef}
                    />
                    <InputText
                      helperInfo
                      label="License No."
                      placeholder="Enter Company License No."
                      helperText="Please enter Company License No."
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                      id="lisenceNo"
                      name="lisenceNo"
                      required={true}
                    />
                    <FileUpload
                      helperInfo
                      label="Upload License"
                      placeholder="Upload Company License"
                      helperText="Please Upload Company License"
                      style={{ xs: 12, lg: 6 }}
                      ref={lisenceRef}
                      id="lisenceFile"
                      name="lisenceFile"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                    <CustomDateTime
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="License Expiry Date"
                      helperText="Please enter license expiry date"
                      id="lisenceExpiryDate"
                      name="lisenceExpiryDate"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                  </Grid>
                </Container>
                <Container title="Add Billing Information" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <InputText
                      helperInfo
                      label="Billing Reference"
                      placeholder="Enter the billing reference"
                      helperText="Please enter the billing reference"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      id="billingReference"
                      name="billingReference"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      label="VAT Number:"
                      placeholder="VAT Number"
                      helperText="Please enter your VAT number"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      id="vatNo"
                      name="vatNo"
                      required={true}
                    />
                    <Selector
                      helperInfo
                      id="vatStatus"
                      name="vatStatus"
                      style={{ xs: 12, lg: 6 }}
                      label="VAT status"
                      helperText="Please Choose a VAT status"
                      options={['Active', 'Non-Active', 'Pending']}
                      required={true}
                    />
                    <br />
                    <Grid lg={6}></Grid>
                    <FileUpload
                      helperInfo
                      label="Upload VAT"
                      placeholder="Upload your VAT"
                      helperText="Please upload your VAT"
                      style={{ xs: 12, lg: 6 }}
                      ref={vatRef}
                      setFieldValue={props.setFieldValue}
                      id="vatFile"
                      name="vatFile"
                      required={true}
                    />
                  </Grid>
                </Container>
                <Container title="Company Location" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Countries"
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
                      label="Cites"
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
                      placeholder="Enter the office address"
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
                      required={true}
                    />

                    <InputLayout
                      label="Place"
                      helperText="Please enter place address"
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

                <Container title="Company Presentation" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <InputText
                      helperInfo
                      label="Company Website"
                      placeholder="Enter the company website"
                      helperText="Please enter the company website"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="companyWebsite"
                      id="companyWebsite"
                      required={true}
                    />

                    <InputText
                      helperInfo
                      label="Company Email Address"
                      placeholder="Enter the company email address"
                      helperText="Please enter the company email address"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="companyEmailAddress"
                      id="companyEmailAddress"
                      required={true}
                    />

                    <PhoneInput
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Company Contact Number"
                      placeholder="Enter the company Contact Number"
                      helperText="Please enter the company Contact Number"
                      name="companyContactNumber"
                      id="companyContactNumber"
                    />

                    <InputText
                      helperInfo
                      label="Company Description"
                      placeholder="Enter the company description"
                      helperText="Please enter the company description"
                      type="text"
                      style={{ xs: 12, lg: 6 }}
                      name="companyDescription"
                      id="companyDescription"
                      required={true}
                    />

                    <FileUpload
                      helperInfo
                      label="Company logo"
                      placeholder="Enter the company logo"
                      helperText="Please enter the company logo"
                      style={{ xs: 12, lg: 6 }}
                      image={{ alt: 'Company Logo Preview', width: '250px', height: '250px' }}
                      ref={companyLogoRef}
                      id="companyLogo"
                      name="companyLogo"
                      setFieldValue={props.setFieldValue}
                      required={true}
                    />
                    <FileUpload
                      helperInfo
                      label="Company Cover Image"
                      placeholder="Enter the company cover image"
                      helperText="Please enter the company cover image"
                      style={{ xs: 12, lg: 6 }}
                      image={{ alt: 'Cover Image Preview', width: '250px', height: '250px' }}
                      ref={companyCoverRef}
                      required={true}
                      name="companyCoverImage"
                      id="companyCoverImage"
                      setFieldValue={props.setFieldValue}
                    />
                  </Grid>
                </Container>
                <Container style={{ xs: 12 }} title="Social Media">
                  <Grid container spacing={2} alignItems="center">
                    <InputText
                      helperInfo
                      label="Facebook"
                      type="url"
                      placeholder="Enter Company Facebook Profile"
                      helperText="Please enter company facebook profile"
                      style={{ xs: 12, lg: 6 }}
                      name="facebook"
                      id="facebook"
                      required={false}
                    />
                    <InputText
                      helperInfo
                      label="Instagram"
                      type="url"
                      placeholder="Enter Company Instagram Profile"
                      helperText="Please enter company instagram profile"
                      style={{ xs: 12, lg: 6 }}
                      name="instagram"
                      id="instagram"
                      required={false}
                    />
                    <InputText
                      helperInfo
                      label="LinkedIn"
                      type="url"
                      placeholder="Enter Company LinkedIn Profile"
                      helperText="Please enter company linkedIn profile"
                      style={{ xs: 12, lg: 6 }}
                      name="linkedin"
                      id="linkedin"
                      required={false}
                    />
                    <InputText
                      helperInfo
                      label="Twitter"
                      type="url"
                      placeholder="Enter Company Twitter Profile"
                      helperText="Please enter company twitter profile"
                      style={{ xs: 12, lg: 6 }}
                      name="twitter"
                      id="twitter"
                      required={false}
                    />
                    <InputText
                      helperInfo
                      label="YouTube"
                      type="url"
                      placeholder="Enter Company YouTube Profile"
                      helperText="Please enter company YouTube profile"
                      style={{ xs: 12, lg: 6 }}
                      name="youtube"
                      id="youtube"
                      required={false}
                    />
                    <InputText
                      helperInfo
                      label="TikTok"
                      type="url"
                      placeholder="Enter Company TikTok Profile"
                      helperText="Please enter company TikTok profile"
                      style={{ xs: 12, lg: 6 }}
                      name="tiktok"
                      id="tiktok"
                      required={false}
                    />
                  </Grid>
                </Container>
                <Container title="Company Admin Contact Details" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="First Name"
                      placeholder="Admin First Name"
                      helperText="Please enter admin first name"
                      type="text"
                      id="firstName"
                      name="firstName"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Last Name"
                      placeholder="Admin Last Name"
                      helperText="Please enter admin last name"
                      type="text"
                      id="lastName"
                      name="lastName"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Email Address"
                      placeholder="Admin Email Address"
                      helperText="Please enter admin email address"
                      type="text"
                      id="emailAddress"
                      name="emailAddress"
                      required={true}
                    />
                    <PhoneInput
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Admin Phone Number"
                      placeholder="Enter the Admin Phone Number"
                      helperText="Please enter admin phone number"
                      name="phoneNumber"
                      id="phoneNumber"
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Number of Employees"
                      placeholder="Number of Employees"
                      helperText="Please enter Number of Employees"
                      type="text"
                      id="numberOfEmployees"
                      name="numberOfEmployees"
                      required={true}
                    />
                    <Selector
                      helperInfo
                      id="subscriptionDuration"
                      name="subscriptionDuration"
                      helperText="Please choose your purchased subscription duration"
                      style={{ xs: 12, lg: 4 }}
                      label="Subscription Duration"
                      options={['1 Month', '3 Months', '6 Months', '9 Months', '12 Months']}
                      required={true}
                    />
                    <CustomDateTime
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Subscription Start Date"
                      helperText="Please enter subscription start date"
                      id="subscriptionStartDate"
                      name="subscriptionStartDate"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                    <CustomDateTime
                      helperInfo
                      style={{ xs: 12, lg: 6 }}
                      label="Subscription End Date"
                      helperText="Please enter subscription end date"
                      id="subscriptionEndDate"
                      name="subscriptionEndDate"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                    <FileUpload
                      helperInfo
                      setFieldValue={props.setFieldValue}
                      id="adminProfilePicture"
                      name="adminProfilePicture"
                      required={true}
                      style={{ xs: 12, lg: 6 }}
                      label="Upload Profile Picture"
                      placeholder="Upload Profile Picture"
                      helperText="Please enter upload profile picture"
                      image={{ alt: 'Admin Profile Preview', width: '250px', height: '250px' }}
                      ref={profileRef}
                    />
                    <Grid item lg="4"></Grid>
                  </Grid>
                </Container>
                <Container title="Bank Account Details" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Account Number"
                      placeholder="Account Number"
                      helperText="Please enter account number"
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Account Name"
                      placeholder="Account Name"
                      helperText="Please enter account name"
                      type="text"
                      id="cardName"
                      name="cardName"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="IBAN Number"
                      placeholder="IBAN Number"
                      helperText="Please enter IBAN number"
                      type="text"
                      id="ibanNumber"
                      name="ibanNumber"
                      required={true}
                    />
                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Countries"
                      id="accountCountry"
                      name="accountCountry"
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
                      helperText="Please select a country"
                      required={true}
                    />
                    <AutoCompleteSelector
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Currencies"
                      id="currency"
                      name="currency"
                      options={currenciesError || currenciesIsLoading ? [] : currenciesData?.data || []}
                      getOptionLabel={(currency) => currency.Currency || ''}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          {option.Currency.toUpperCase()} : {option.Code}
                        </Box>
                      )}
                      placeholder="Select a Currency"
                      helperText="Please select a currency"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Bank Name"
                      placeholder="Bank Name"
                      helperText="Please enter bank name"
                      type="text"
                      id="bankName"
                      name="bankName"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Bank Branch"
                      placeholder="Bank Branch"
                      helperText="Please enter bank branch"
                      type="text"
                      id="bankBranch"
                      name="bankBranch"
                      required={true}
                    />
                    <InputText
                      helperInfo
                      style={{ xs: 12, lg: 4 }}
                      label="Swift Code"
                      placeholder="Swift Code"
                      helperText="Please enter swift code"
                      type="text"
                      id="swiftCode"
                      name="swiftCode"
                      required={true}
                    />
                  </Grid>
                  <SubmitButton />
                </Container>
              </>
            )}
          </Formik>
        </Grid>
      </Page>
    </LoadScript>
  );
}

ColumnsLayouts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ColumnsLayouts;
