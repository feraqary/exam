// material-ui
import { Grid, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import Map from 'components/map/google-map';
import MapAutocomplete from 'components/map/maps-autocomplete';
import { LoadScript } from '@react-google-maps/api';
import Image from 'next/image';

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
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';
import { useEffect } from 'react';
import {
  setCity,
  setCountry,
  setCommunity,
  setSubCommunity,
  setBankCountry,
  setCurrency
} from 'store/slices/country-section/slice/country';
import { setState } from 'store/slices/country-section/slice/country';
import InputLayout from 'components/InputArea/InputLayout';
import {
  setCompanyAdminContactInformationEmailAddress,
  setCompanyAdminContactInformationFirstName,
  setCompanyAdminContactInformationLastName,
  setCompanyAdminContactInfromationPhoneNumber,
  setCompanyBillingReference,
  setCompanyLicenseExpiry,
  setCompanyLicenseNo,
  setCompanyLocationMapUrl,
  setCompanyMainService,
  setCompanyName,
  setCompanyOfficeAddress,
  setCompanyPresentationCompanyContactNumber,
  setCompanyPresentationCompanyDescription,
  setCompanyPresentationCompanyEmail,
  setCompanyPresentationCompanyWebsite,
  setCompanyReraNo,
  setCompanyService,
  setCompanySocialMediaFacebook,
  setCompanySocialMediaInstagram,
  setCompanySocialMediaLinkedIn,
  setCompanySocialMediaTwitter,
  setCompanyTagline,
  setCompanyVatNo,
  setCompanyVatStatus,
  setMainCompanyType,
  setSubCompanyType,
  setCompanyAdminContactInformationSubscriptionDuration,
  setCompanyAdminContactInformationSubscriptionDurationStartDate,
  setCompanyAdminContactInformationSubscriptionDurationEndDate,
  setCompanyBankAccountDetailsAccountName,
  setCompanyBankAccountDetailsAccountNumber,
  setCompanyBankAccountDetailsIbanNumber,
  setCompanyBankAccountDetailsCurrency,
  setCompanyBankAccountDetailsBankName,
  setCompanyBankAccountDetailsBankBranch,
  setCompanyBankAccountDetailsSwiftCode
} from 'store/slices/company-section/slice/company';
import { createCompany, getAllCompanyTypes, getAllMainServices, getAllServices } from 'store/slices/company-section/action/company';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import { ToastContainer } from 'react-toastify';
import { useRef } from 'react';

// ==============================|| FIELDS ||============================== //
const options = [
  { label: 'Real Estate Broker Company', id: 1 },
  { label: 'Real Estate Developer Company', id: 2 },
  { label: 'Service Company', id: 3 }
];
// ==============================|| Add Company form ||============================== //
function ColumnsLayouts() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [address, setAddress] = useState('Abu Dhabi');
  const [lisenceFile, setLisenceFile] = useState(null);
  const [vatImage, setVatImage] = useState(null);
  const [vatPreview, setVatPreview] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyLogoPreview, setCompanyLogoPreview] = useState(null);
  const [companyCoverImage, setCompanyCoverImage] = useState(null);
  const [companyCoverPreview, setCompanyCoverPreview] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllCountries());
    dispatch(getAllCurrencies());
  }, [dispatch]);

  const {
    countries,
    error,
    loading,
    states,
    country,
    state,
    city,
    cities,
    communities,
    community,
    bankCountry,
    bankCountries,
    subCommunity,
    subCommunities,
    currency,
    currencies
  } = useSelector((state) => state.countries);
  const {
    companyInformation,
    error: companyError,
    loading: companyLoading,
    companyTypes,
    mainServices,
    services
  } = useSelector((state) => state.companies);

  const {
    companyDetails,
    billingAddressInformation,
    companyLocation,
    socialMedia,
    adminContactInformation,
    bankAccountDetails,
    companyPresentation
  } = companyInformation;

  const vatRef = useRef(null);
  const lisenceRef = useRef(null);
  const companyLogoRef = useRef(null);
  const companyCoverRef = useRef(null);
  const profileRef = useRef(null);

  const submitForm = () => {
    const formData = new FormData();
    formData.append('company_types', companyDetails.companyType.id);
    formData.append('main_service_type', companyDetails.mainService.id);
    formData.append('sub_company_type', companyDetails.subCompanyType.id);
    formData.append('sub_service_type', companyDetails.service.id);
    formData.append('company_name', companyDetails.companyName);
    formData.append('tag_line', companyDetails.companyTagline);
    formData.append('rera_no', companyDetails.reraNo);
    formData.append('commercial_license_no', companyDetails.licenseNo);
    formData.append('commercial_license_file_url', lisenceFile);
    formData.append('commercial_license_expiry', companyDetails.licenseExpiry);
    formData.append('vat_no', companyDetails.vatNo);
    formData.append('vat_status', companyDetails.vatStatus);
    formData.append('vat_file_url', vatImage);
    formData.append('lat', '3.0');
    formData.append('lng', '3.5');
    formData.append('no_of_employees', adminContactInformation.numberOfEmployees);
    formData.append('billing_country_id', country?.id);
    formData.append('billing_state_id', state?.id);
    formData.append('billing_city_id', city?.id);
    formData.append('billing_community_id', community?.id);
    formData.append('billing_office_address', billingAddressInformation.officeAddress);
    formData.append('billing_reference', billingAddressInformation.billingReference);
    formData.append('google_map_link', companyLocation.mapUrl || 'some link... ..');
    formData.append('website_url', companyPresentation.companyWebsite);
    formData.append('company_email', companyPresentation.companyEmail);
    formData.append('company_contact_number', companyPresentation.companyContactNumber);
    formData.append('company_whatsapp_number', companyPresentation.companyContactNumber);
    formData.append('company_description', companyPresentation.companyDescription);
    formData.append('logo_url', companyLogo);
    formData.append('cover_image_url', companyCoverImage);
    formData.append('facebook_profile_url', socialMedia.facebook);
    formData.append('instagram_profile_url', socialMedia.twitter);
    formData.append('linkedin_profile_url', socialMedia.instagram);
    formData.append('twitter_profile_url', socialMedia.linkedin);
    formData.append('first_name', adminContactInformation.firstName);
    formData.append('last_name', adminContactInformation.lastName);
    formData.append('user_email', adminContactInformation.emailAddress);
    formData.append('user_phone_number', adminContactInformation.phoneNumber);
    formData.append('user_profile_picture', profileImage);
    formData.append('subscription_duration', adminContactInformation.subscriptionDuration);
    formData.append('subscription_start_date', adminContactInformation.subscriptionStartDate);
    formData.append('subscription_end_date', adminContactInformation.subscriptionEndDate);
    formData.append('account_name', bankAccountDetails.accountNumber);
    formData.append('account_number', bankAccountDetails.accountName);
    formData.append('iban', bankAccountDetails.ibanNumber);
    formData.append('currency_id', currency?.id);
    formData.append('bank_country_id', bankCountry?.id);
    formData.append('bank_name', bankAccountDetails.bankName);
    formData.append('branch_name', bankAccountDetails.bankBranch);
    formData.append('swift_code', bankAccountDetails.swiftCode);
    dispatch(createCompany(formData));
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places']}>
      <Page title="Add Company">
        <ToastContainer />
        <Grid container spacing={gridSpacing}>
          <Container title="Add Compnay Details" style={{ xs: 12 }}>
            <Grid container spacing={2} justifyContent="center" style={{ xs: 12 }}>
              <AutoCompleteSelector
                style={{ xs: 12, lg: 10 }}
                label="Company Type"
                id="companyType"
                options={options}
                placeholder="Select Company Type"
                value={companyInformation.companyDetails.companyType}
                func={(newValue) => {
                  dispatch(setMainCompanyType(newValue));
                  dispatch(getAllCompanyTypes(newValue?.id));
                  dispatch(setCompanyService(null));
                  dispatch(setCompanyMainService(null));
                  dispatch(setSubCompanyType(null));
                }}
              />
              {companyInformation.companyDetails.companyType && (
                <AutoCompleteSelector
                  style={{ xs: 12, lg: 10 }}
                  label="Sub Company Type"
                  id="subCompanyType"
                  placeholder="Select Sub Company Type"
                  options={companyTypes?.map((company) => {
                    return { label: company.title, ...company };
                  })}
                  value={companyInformation.companyDetails.subCompanyType}
                  func={(newValue) => {
                    dispatch(setSubCompanyType(newValue));
                    dispatch(getAllMainServices(newValue?.id));
                    dispatch(setCompanyService(null));
                    dispatch(setCompanyMainService(null));
                  }}
                />
              )}

              {companyInformation.companyDetails.subCompanyType && (
                <AutoCompleteSelector
                  style={{ xs: 12, lg: 10 }}
                  label="Main Service Type"
                  id="mainServiceType"
                  placeholder="Select Main Service Type"
                  options={mainServices.map((service) => {
                    return { label: service.title, ...service };
                  })}
                  value={companyInformation.companyDetails.mainService}
                  func={(newValue) => {
                    dispatch(setCompanyMainService(newValue));
                    dispatch(getAllServices(newValue?.id));
                    dispatch(setCompanyService(null));
                  }}
                />
              )}
              {companyInformation.companyDetails.mainService && (
                <AutoCompleteSelector
                  style={{ xs: 12, lg: 10 }}
                  label="Service Type"
                  id="serviceType"
                  placeholder="Select Service Type"
                  options={services.map((service) => {
                    return { label: service.title, ...service };
                  })}
                  value={companyInformation.companyDetails.service}
                  func={(newValue) => {
                    dispatch(setCompanyService(newValue));
                  }}
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
                value={companyInformation.companyDetails.companyName}
                setValue={(e) => dispatch(setCompanyName(e))}
              />
              <InputText
                label="Company Tagline"
                placeholder="Enter Company Tagline"
                helperText="Please Enter Official Tagline"
                style={{ xs: 12, lg: 6 }}
                type="text"
                value={companyInformation.companyDetails.companyTagline}
                setValue={(e) => dispatch(setCompanyTagline(e))}
              />
              <InputText
                label="RERA No."
                placeholder="Enter RERA No."
                helperText="Please Enter RERA No."
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.companyDetails.reraNo}
                setValue={(e) => dispatch(setCompanyReraNo(e))}
              />
              <CustomDateTime style={{ xs: 12, lg: 6 }} label="RERA No. Expiry Date" helperText="Please enter RERA No. Expiry Date" />
              <FileUpload
                label="Upload RERA"
                type="pdf"
                placeholder="Upload RERA"
                helperText="Please upload the company RERA"
                style={{ xs: 12, lg: 6 }}
              />
              <InputText
                label="License No."
                placeholder="Enter Company License No."
                helperText="Please enter Company License No."
                style={{ xs: 12, lg: 6 }}
                type="text"
                value={companyInformation.companyDetails.lisenceNo}
                setValue={(e) => dispatch(setCompanyLicenseNo(e))}
              />
              <FileUpload
                label="Upload License"
                type="pdf"
                placeholder="Upload Company License"
                helperText="Please Upload Company License"
                style={{ xs: 12, lg: 6 }}
                setValue={setLisenceFile}
                ref={lisenceRef}
              />
              <CustomDateTime
                style={{ xs: 12, lg: 6 }}
                label="License Expiry Date"
                helperText="Please enter license expiry date"
                value={companyInformation.companyDetails.licenseExpiry}
                setValue={(e) => dispatch(setCompanyLicenseExpiry(e))}
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
                value={companyInformation.billingAddressInformation.billingReference}
                setValue={(e) => dispatch(setCompanyBillingReference(e))}
              />
              <InputText
                label="VAT Number:"
                placeholder="VAT Number"
                helperText="Please enter your VAT number"
                type="text"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.companyDetails.vatNo}
                setValue={(e) => dispatch(setCompanyVatNo(e))}
              />
              <Selector
                id="selector"
                style={{ xs: 12, lg: 6 }}
                label="VAT status"
                helperText="Please Choose a VAT status"
                options={['Active', 'Non-Active', 'Pending']}
                value={companyInformation.companyDetails.vatStatus}
                setValue={(e) => dispatch(setCompanyVatStatus(e))}
              />
              <br />
              <Grid lg={6}></Grid>
              <FileUpload
                label="Upload VAT"
                type="png,jpeg,jpg"
                placeholder="Upload your VAT"
                helperText="Please upload your VAT"
                style={{ xs: 12, lg: 6 }}
                image={{ alt: 'VAT Preview', width: '250px', height: '250px' }}
                ref={vatRef}
                setValue={setVatImage}
                imagePreview={vatPreview}
                setImagePreview={setVatPreview}
              />
            </Grid>
          </Container>

          <Container title="Company Location" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
              <AutoCompleteSelector
                style={{ xs: 12, lg: 6 }}
                label="Countries"
                id="country-selector"
                options={countries?.map((country) => {
                  return { label: country.Country, id: country.ID, flag: country.Flag };
                })}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <Image src={`http://20.203.31.58/upload/${option.flag}`} width={30} height={30} style={{ objectFit: 'contain' }} />

                    {option.label}
                  </Box>
                )}
                placeholder="Select a Country"
                value={country}
                setValue={setCountry}
                helperText="Please select a country"
                loading={loading}
                func={(newValue) => {
                  dispatch(setCountry(newValue));
                  dispatch(getStates(newValue?.id));
                  dispatch(setSubCommunity(null));
                  dispatch(setState(null));
                }}
              />

              <AutoCompleteSelector
                style={{ xs: 12, lg: 6 }}
                label="States"
                id="state-selector"
                options={states?.map((state) => {
                  return { label: state.State, id: state.ID };
                })}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                placeholder="Select a State"
                value={state}
                setValue={setState}
                helperText="Please select a state"
                disabled={country ? false : true}
                loading={loading}
                func={(newValue) => {
                  dispatch(getCities(newValue?.id));
                  dispatch(setState(newValue));
                  dispatch(setSubCommunity(null));
                  dispatch(setCity(null));
                }}
              />

              <AutoCompleteSelector
                style={{ xs: 12, lg: 6 }}
                label="Cites"
                id="cites-selector"
                options={cities?.map((city) => {
                  return { label: city.City, id: city.ID };
                })}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                placeholder="Select a City"
                value={city}
                disabled={state ? false : true}
                helperText="Please select a city"
                loading={loading}
                func={(newValue) => {
                  dispatch(getCommunities(newValue?.id));
                  dispatch(setCity(newValue));
                  dispatch(setSubCommunity(null));
                  dispatch(setCommunity(null));
                }}
              />
              <AutoCompleteSelector
                style={{ xs: 12, lg: 6 }}
                label="Community"
                id="community-selector"
                options={communities?.map((community) => {
                  return { label: community.Community, id: community.ID };
                })}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                placeholder="Select a Community"
                value={community}
                disabled={city ? false : true}
                helperText="Please select a community"
                loading={loading}
                func={(newValue) => {
                  dispatch(setCommunity(newValue));
                  dispatch(getSubCommunities(newValue?.id));
                  dispatch(setSubCommunity(null));
                }}
              />
              <AutoCompleteSelector
                style={{ xs: 12, lg: 6 }}
                label="Sub Community"
                id="sub-community-selector"
                options={subCommunities?.map((community) => {
                  return { label: community.SubCommunity, id: community.ID };
                })}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                placeholder="Select a Community"
                value={subCommunity}
                disabled={community ? false : true}
                helperText="Please select a community"
                loading={loading}
                func={(newValue) => {
                  dispatch(setSubCommunity(newValue));
                }}
              />
              <InputText
                label="Office Address"
                placeholder="Enter the office address"
                helperText="Please enter the office address"
                type="text"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.billingAddressInformation.officeAddress}
                setValue={(e) => dispatch(setCompanyOfficeAddress(e))}
              />
              <InputText
                label="Google Map Link"
                placeholder="Google Map URL"
                helperText="Please enter Google Map URL for Company Location"
                type="text"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.companyLocation.mapUrl}
                setValue={(e) => dispatch(setCompanyLocationMapUrl(e))}
              />

              <InputLayout label="Place" helperText="Please enter place address" style={{ xs: 12, lg: 6 }}>
                <MapAutocomplete placeHolder onChangeAddress={setAddress} country={setCountry} state={setState} value="uae" />
              </InputLayout>
              <Map locationAddress={address} xs={12} lg={12} mapUrl={companyInformation.companyLocation.mapUrl} />
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
                value={companyInformation.companyPresentation.companyWebsite}
                setValue={(e) => dispatch(setCompanyPresentationCompanyWebsite(e))}
              />

              <InputText
                label="Company Email Address"
                placeholder="Enter the company email address"
                helperText="Please enter the company email address"
                type="text"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.companyPresentation.companyEmail}
                setValue={(e) => dispatch(setCompanyPresentationCompanyEmail(e))}
              />

              <InputText
                label="Company Contact Number"
                placeholder="Enter the company Contact Number"
                helperText="Please enter the company Contact Number"
                type="text"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.companyPresentation.companyContactNumber}
                setValue={(e) => dispatch(setCompanyPresentationCompanyContactNumber(e))}
              />
              <InputText
                label="Company Description"
                placeholder="Enter the company description"
                helperText="Please enter the company description"
                type="text"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.companyPresentation.companyDescription}
                setValue={(e) => dispatch(setCompanyPresentationCompanyDescription(e))}
              />

              <FileUpload
                label="Company logo"
                placeholder="Enter the company logo"
                helperText="Please enter the company logo"
                type="png,jpeg,jpg"
                style={{ xs: 12, lg: 6 }}
                image={{ alt: 'Company Logo Preview', width: '250px', height: '250px' }}
                ref={companyLogoRef}
                setValue={setCompanyLogo}
                imagePreview={companyLogoPreview}
                setImagePreview={setCompanyLogoPreview}
              />
              <FileUpload
                label="Company Cover Image"
                placeholder="Enter the company cover image"
                helperText="Please enter the company cover image"
                type="png,jpeg,jpg"
                style={{ xs: 12, lg: 6 }}
                image={{ alt: 'Cover Image Preview', width: '250px', height: '250px' }}
                ref={companyCoverRef}
                setValue={setCompanyCoverImage}
                imagePreview={companyCoverPreview}
                setImagePreview={setCompanyCoverPreview}
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
                value={companyInformation.socialMedia.facebook}
                setValue={(e) => dispatch(setCompanySocialMediaFacebook(e))}
              />
              <InputText
                label="Instagram"
                type="url"
                placeholder="Enter Company Instagram Profile"
                helperText="Please enter company instagram profile"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.socialMedia.instagram}
                setValue={(e) => dispatch(setCompanySocialMediaInstagram(e))}
              />
              <InputText
                label="LinkedIn"
                type="url"
                placeholder="Enter Company LinkedIn Profile"
                helperText="Please enter company linkedIn profile"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.socialMedia.linkedin}
                setValue={(e) => dispatch(setCompanySocialMediaLinkedIn(e))}
              />
              <InputText
                label="Twitter"
                type="url"
                placeholder="Enter Company Twitter Profile"
                helperText="Please enter company twitter profile"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.socialMedia.twitter}
                setValue={(e) => dispatch(setCompanySocialMediaTwitter(e))}
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
                value={companyInformation.adminContactInformation.firstName}
                setValue={(e) => dispatch(setCompanyAdminContactInformationFirstName(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Last Name"
                placeholder="Admin Last Name"
                helperText="Please enter admin last name"
                type="text"
                value={companyInformation.adminContactInformation.lastName}
                setValue={(e) => dispatch(setCompanyAdminContactInformationLastName(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Email Address"
                placeholder="Admin Email Address"
                helperText="Please enter admin email address"
                type="text"
                value={companyInformation.adminContactInformation.emailAddress}
                setValue={(e) => dispatch(setCompanyAdminContactInformationEmailAddress(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Phone Number"
                placeholder="Admin Phone Number"
                helperText="Please enter admin phone number"
                type="text"
                value={companyInformation.adminContactInformation.phoneNumber}
                setValue={(e) => dispatch(setCompanyAdminContactInfromationPhoneNumber(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Number of Employees"
                placeholder="Number of Employees"
                helperText="Please enter Number of Employees"
                type="text"
              />
              <Selector
                helperText="Please choose your purchased subscription duration"
                style={{ xs: 12, lg: 4 }}
                label="Subscription Duration"
                id="select"
                options={['1 Month', '3 Months', '6 Months', '9 Months', '12 Months']}
                value={companyInformation.adminContactInformation.subscriptionDuration}
                setValue={(e) => dispatch(setCompanyAdminContactInformationSubscriptionDuration(e))}
              />
              <CustomDateTime
                style={{ xs: 12, lg: 4 }}
                label="Subscription Start Date"
                helperText="Please enter subscription start date"
                value={companyInformation.adminContactInformation.subscriptionStartDate}
                setValue={(e) => dispatch(setCompanyAdminContactInformationSubscriptionDurationStartDate(e))}
              />
              <CustomDateTime
                style={{ xs: 12, lg: 4 }}
                label="Subscription End Date"
                helperText="Please enter subscription End date"
                value={companyInformation.adminContactInformation.subscriptionEndDate}
                setValue={(e) => dispatch(setCompanyAdminContactInformationSubscriptionDurationEndDate(e))}
              />
              <Grid item lg="4"></Grid>
              <FileUpload
                style={{ xs: 12, lg: 4 }}
                label="Upload Profile Picture"
                placeholder="Upload Profile Picture"
                helperText="Please enter upload profile picture"
                type="png,jpeg,jpg"
                image={{ alt: 'Admin Profile Preview', width: '250px', height: '250px' }}
                setValue={setProfileImage}
                ref={profileRef}
                imagePreview={profilePreview}
                setImagePreview={setProfilePreview}
              />
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
                value={companyInformation.bankAccountDetails.accountNumber}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsAccountName(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Account Name"
                placeholder="Account Name"
                helperText="Please enter account name"
                type="text"
                value={companyInformation.bankAccountDetails.accountNumber}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsAccountNumber(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="IBAN Number"
                placeholder="IBAN Number"
                helperText="Please enter IBAN number"
                type="text"
                value={companyInformation.bankAccountDetails.ibanNumber}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsIbanNumber(e))}
              />
              <AutoCompleteSelector
                style={{ xs: 12, lg: 4 }}
                label="Currencies"
                id="currency-selector"
                options={currencies?.map((cur) => {
                  return { label: cur.Currency, id: cur.ID, code: cur.Code };
                })}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    {option.label.toUpperCase()} : {option.code}
                  </Box>
                )}
                placeholder="Select a Currency"
                value={currency}
                setValue={setCurrency}
                helperText="Please select a currency"
                loading={loading}
                func={(newValue) => {
                  dispatch(setCurrency(newValue));
                }}
              />
              <AutoCompleteSelector
                style={{ xs: 12, lg: 4 }}
                label="Countries"
                id="bank-country-selector"
                options={bankCountries?.map((country) => {
                  return { label: country.Country, id: country.ID, flag: country.Flag };
                })}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <Image src={`http://20.203.31.58/upload/${option.flag}`} width={30} height={30} style={{ objectFit: 'contain' }} />

                    {option.label}
                  </Box>
                )}
                placeholder="Select a Country"
                value={bankCountry}
                setValue={setBankCountry}
                helperText="Please select a country"
                loading={loading}
                func={(newValue) => {
                  dispatch(setBankCountry(newValue));
                }}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Bank Name"
                placeholder="Bank Name"
                helperText="Please enter bank name"
                type="text"
                value={companyInformation.bankAccountDetails.bankName}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsBankName(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Bank Branch"
                placeholder="Bank Branch"
                helperText="Please enter bank branch"
                type="text"
                value={companyInformation.bankAccountDetails.branchName}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsBankBranch(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Swift Code"
                placeholder="Swift Code"
                helperText="Please enter swift code"
                type="text"
                value={companyInformation.bankAccountDetails.swiftCode}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsSwiftCode(e))}
              />
            </Grid>
          </Container>
          <SubmitButton submit={submitForm} />
        </Grid>
      </Page>
    </LoadScript>
  );
}

ColumnsLayouts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ColumnsLayouts;
