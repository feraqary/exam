// material-ui
import { Grid, Box } from '@mui/material';
import * as Yup from 'yup';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import Map from 'components/map/google-map';
import MapAutocomplete from 'components/map/maps-autocomplete';
import { LoadScript } from '@react-google-maps/api';
import Image from 'next/image';
import valid from 'card-validator';
import { objectValidator, arrayValidator, stringValidator, numberValidator, fileValidator, dateValidator } from 'utils/formik-validations';
// redux actions import

import {
  getCountries,
  getStates,
  getCities,
  getCommunities,
  getSubCommunities,
  getAllCountries,
  getAllCurrencies
} from 'store/slices/country-section/actions/countries';

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

import { createCompany, getAllCompanyTypes, getAllMainServices, getAllServices } from 'store/slices/company-section/action/company';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import { ToastContainer } from 'react-toastify';
import { useRef } from 'react';
import { Formik } from 'formik';
import PhoneInput from 'components/InputArea/PhoneInput';

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
  companyTagline: stringValidator('Please provide a company tagline'),
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
  firstName: stringValidator('Please provide your first name'),
  lastName: stringValidator('Please provide your last name'),
  emailAddress: stringValidator('Please provide a valid email address').email(),
  phoneNumber: stringValidator('Please provide a valid phone number'),
  numberOfEmployees: numberValidator('Please enter the number of employees'),
  subscriptionDuration: stringValidator('Please select a subscription duration'),
  subscriptionStartDate: dateValidator('Please select a subscription start date'),
  subscriptionEndDate: dateValidator('Please select a subscription end date'),
  ibanNumber: stringValidator('Please provide a valid IBAN number'),
  currency: objectValidator(),
  accountCountry: objectValidator(),
  bankName: stringValidator('Please provide a bank name'),
  bankBranch: stringValidator('Please provide a bank branch'),
  swiftCode: stringValidator('Please provide a swift code'),
  cardNumber: Yup.string()
    .trim()
    .test('TEST_CREDIT_NUMBER', 'Credit number is invalid', (value) => valid.number(value).isValid),

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
  const dispatch = useDispatch();
  const [address, setAddress] = useState('Abu Dhabi');
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllCountries());
    dispatch(getAllCurrencies());
  }, [dispatch]);

  const { countries, error, loading, states, cities, communities, bankCountries, subCommunities, currencies } = useSelector(
    (state) => state.countries
  );
  const {
    companyInformation,
    error: companyError,
    loading: companyLoading,
    companyTypes,
    mainServices,
    services
  } = useSelector((state) => state.companies);

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
    formData.append('tag_line', values.companyTagline);
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
    formData.append('billing_country_id', values.country.id);
    formData.append('billing_state_id', values.state.id);
    formData.append('billing_city_id', values.city.id);
    formData.append('billing_community_id', values.community.id);
    formData.append('billing_sub_community_id', values.subCommunity.id);
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
    formData.append('currency_id', values.currency.id);
    formData.append('bank_country_id', values.accountCountry.id);
    formData.append('bank_name', values.bankName);
    formData.append('branch_name', values.bankBranch);
    formData.append('swift_code', values.swiftCode);
    formData.append('rera_file_url', values.reraFile);
    formData.append('rera_expiry', values.reraExpiryDate);
    values.service.forEach((ser) => {
      formData.append('sub_service_type[]', ser?.id);
    });
    dispatch(createCompany(formData));
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places', 'drawing']}>
      <Page title="Add Company">
        <ToastContainer />
        <Grid container spacing={gridSpacing}>
          <Formik
            initialValues={{
              companyType: '',
              subCompanyType: '',
              mainService: '',
              service: [],
              companyName: '',
              companyTagline: '',
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
                      style={{ xs: 12, lg: 10 }}
                      label="Company Type"
                      id="companyType"
                      name="companyType"
                      options={options}
                      placeholder="Select Company Type"
                      setFieldValue={props.setFieldValue}
                      func={(newValue) => {
                        dispatch(getAllCompanyTypes(newValue?.id));
                        props.setFieldValue('service', props.initialValues.service);
                        props.setFieldValue('subCompanyType', props.initialValues.subCompanyType);
                        props.setFieldValue('mainService', props.initialValues.mainService);
                      }}
                    />
                    {props.values.companyType && (
                      <AutoCompleteSelector
                        style={{ xs: 12, lg: 10 }}
                        label="Sub Company Type"
                        id="subCompanyType"
                        name="subCompanyType"
                        placeholder="Select Sub Company Type"
                        options={companyTypes?.map((company) => {
                          return { label: company.title, ...company };
                        })}
                        setFieldValue={props.setFieldValue}
                        func={(newValue) => {
                          dispatch(getAllMainServices(newValue?.id));
                          props.setFieldValue('mainService', props.initialValues.mainService);
                          props.setFieldValue('service', props.initialValues.service);
                        }}
                      />
                    )}

                    {props.values.subCompanyType && (
                      <AutoCompleteSelector
                        style={{ xs: 12, lg: 10 }}
                        label="Main Service Type"
                        id="mainService"
                        name="mainService"
                        placeholder="Select Main Service Type"
                        options={mainServices.map((service) => {
                          return { label: service.title, ...service };
                        })}
                        setFieldValue={props.setFieldValue}
                        func={(newValue) => {
                          dispatch(getAllServices(newValue?.id));
                          props.setFieldValue('service', props.initialValues.service);
                        }}
                      />
                    )}
                    {props.values.mainService && (
                      <MultipleAutoCompleteSelector
                        style={{ xs: 12, lg: 10 }}
                        label="Sub Service Type"
                        id="service"
                        name="service"
                        placeholder="Select Sub Service Type"
                        options={services.map((service) => {
                          return { label: service.title, ...service };
                        })}
                        setFieldValue={props.setFieldValue}
                      />
                    )}
                  </Grid>

                  <Grid container spacing={2} alignItems="center">
                    <InputText
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
                      label="Company Tagline"
                      placeholder="Enter Company Tagline"
                      helperText="Please Enter Official Tagline"
                      style={{ xs: 12, lg: 6 }}
                      type="text"
                      id="companyTagline"
                      name="companyTagline"
                      required={true}
                    />
                    <InputText
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
                      style={{ xs: 12, lg: 6 }}
                      label="RERA No. Expiry Date"
                      helperText="Please enter RERA No. Expiry Date"
                      id="reraExpiryDate"
                      name="reraExpiryDate"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                    <FileUpload
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
                      style={{ xs: 12, lg: 6 }}
                      label="Countries"
                      id="country"
                      name="country"
                      options={countries?.map((country) => {
                        return { label: country.Country, id: country.ID, flag: country.Flag };
                      })}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <Image
                            src={`http://20.203.31.58/upload/${option.flag}`}
                            width={30}
                            height={30}
                            style={{ objectFit: 'contain' }}
                          />

                          {option.label}
                        </Box>
                      )}
                      placeholder="Select a Country"
                      loading={loading}
                      func={(newValue) => {
                        dispatch(getStates(newValue?.id));
                        props.setFieldValue('subCommunity', '');
                        props.setFieldValue('state', '');
                        props.setFieldValue('city', '');
                        props.setFieldValue('community', '');
                        props.setFieldValue('subCommunity', '');
                      }}
                    />

                    <AutoCompleteSelector
                      style={{ xs: 12, lg: 6 }}
                      label="States"
                      id="state"
                      name="state"
                      options={states?.map((state) => {
                        return { label: state.State, id: state.ID };
                      })}
                      placeholder="Select a State"
                      disabled={props.values.country ? false : true}
                      loading={loading}
                      func={(newValue) => {
                        dispatch(getCities(newValue?.id));
                        props.setFieldValue('subCommunity', '');
                        props.setFieldValue('city', '');
                        props.setFieldValue('community', '');
                      }}
                    />

                    <AutoCompleteSelector
                      style={{ xs: 12, lg: 6 }}
                      label="Cites"
                      id="city"
                      name="city"
                      options={cities?.map((city) => {
                        return { label: city.City, id: city.ID };
                      })}
                      placeholder="Select a City"
                      disabled={props.values.state ? false : true}
                      loading={loading}
                      func={(newValue) => {
                        dispatch(getCommunities(newValue?.id));
                        props.setFieldValue('subCommunity', '');
                        props.setFieldValue('community', '');
                      }}
                    />
                    <AutoCompleteSelector
                      style={{ xs: 12, lg: 6 }}
                      label="Communities"
                      id="community"
                      name="community"
                      options={communities?.map((community) => {
                        return { label: community.Community, id: community.ID };
                      })}
                      placeholder="Select a Community"
                      disabled={props.values.city ? false : true}
                      loading={loading}
                      func={(newValue) => {
                        dispatch(getSubCommunities(newValue?.id));
                        props.setFieldValue('subCommunity', '');
                      }}
                    />
                    <AutoCompleteSelector
                      style={{ xs: 12, lg: 6 }}
                      label="Sub Communities"
                      id="subCommunity"
                      name="subCommunity"
                      options={subCommunities?.map((community) => {
                        return { label: community.SubCommunity, id: community.ID };
                      })}
                      placeholder="Select a Community"
                      disabled={props.values.community ? false : true}
                      loading={loading}
                    />
                    <InputText
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
                    <Map locationAddress={address} xs={12} lg={12} mapUrl={props.values.mapUrl} />
                  </Grid>
                </Container>

                <Container title="Company Presentation" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <InputText
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
                      style={{ xs: 12, lg: 6 }}
                      label="Company Contact Number"
                      placeholder="Enter the company Contact Number"
                      helperText="Please enter the company Contact Number"
                      name="companyContactNumber"
                      id="companyContactNumber"
                    />

                    <InputText
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
                      label="Facebook"
                      type="url"
                      placeholder="Enter Company Facebook Profile"
                      helperText="Please enter company facebook profile"
                      style={{ xs: 12, lg: 6 }}
                      name="facebook"
                      id="facebook"
                      required={true}
                    />
                    <InputText
                      label="Instagram"
                      type="url"
                      placeholder="Enter Company Instagram Profile"
                      helperText="Please enter company instagram profile"
                      style={{ xs: 12, lg: 6 }}
                      name="instagram"
                      id="instagram"
                      required={true}
                    />
                    <InputText
                      label="LinkedIn"
                      type="url"
                      placeholder="Enter Company LinkedIn Profile"
                      helperText="Please enter company linkedIn profile"
                      style={{ xs: 12, lg: 6 }}
                      name="linkedin"
                      id="linkedin"
                      required={true}
                    />
                    <InputText
                      label="Twitter"
                      type="url"
                      placeholder="Enter Company Twitter Profile"
                      helperText="Please enter company twitter profile"
                      style={{ xs: 12, lg: 6 }}
                      name="twitter"
                      id="twitter"
                      required={true}
                    />
                  </Grid>
                </Container>
                <Container title="Company Admin Contact Details" style={{ xs: 12 }}>
                  <Grid container spacing={2} alignItems="center">
                    <InputText
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
                      style={{ xs: 12, lg: 4 }}
                      label="Admin Phone Number"
                      placeholder="Enter the Admin Phone Number"
                      helperText="Please enter admin phone number"
                      name="phoneNumber"
                      id="phoneNumber"
                    />
                    <InputText
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
                      id="subscriptionDuration"
                      name="subscriptionDuration"
                      helperText="Please choose your purchased subscription duration"
                      style={{ xs: 12, lg: 4 }}
                      label="Subscription Duration"
                      options={['1 Month', '3 Months', '6 Months', '9 Months', '12 Months']}
                      required={true}
                    />
                    <CustomDateTime
                      style={{ xs: 12, lg: 6 }}
                      label="Subscription Start Date"
                      helperText="Please enter subscription start date"
                      id="subscriptionStartDate"
                      name="subscriptionStartDate"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                    <CustomDateTime
                      style={{ xs: 12, lg: 6 }}
                      label="Subscription End Date"
                      helperText="Please enter subscription end date"
                      id="subscriptionEndDate"
                      name="subscriptionEndDate"
                      required={true}
                      setFieldValue={props.setFieldValue}
                    />
                    <FileUpload
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
                      style={{ xs: 12, lg: 4 }}
                      label="Currencies"
                      id="currency"
                      name="currency"
                      options={currencies?.map((cur) => {
                        return { label: cur.Currency, id: cur.ID, code: cur.Code };
                      })}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          {option.label.toUpperCase()} : {option.code}
                        </Box>
                      )}
                      placeholder="Select a Currency"
                      helperText="Please select a currency"
                    />
                    <AutoCompleteSelector
                      style={{ xs: 12, lg: 4 }}
                      label="Countries"
                      id="accountCountry"
                      name="accountCountry"
                      options={bankCountries?.map((country) => {
                        return { label: country.Country, id: country.ID, flag: country.Flag };
                      })}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <Image
                            src={`http://20.203.31.58/upload/${option.flag}`}
                            width={30}
                            height={30}
                            style={{ objectFit: 'contain' }}
                          />

                          {option.label}
                        </Box>
                      )}
                      placeholder="Select a Country"
                      helperText="Please select a country"
                    />
                    <InputText
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

