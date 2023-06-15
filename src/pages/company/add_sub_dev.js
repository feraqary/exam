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

import { getCountries, getStates, getCities, getCommunities } from 'store/slices/country-section/actions/countries';

// assets
import InputText from 'components/widgets/TextInput';
import FileUpload from 'components/widgets/FileUpload';
import Selector from 'components/widgets/Selector';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';
import { useEffect } from 'react';
import { setCity, setCountry, setCommunity } from 'store/slices/country-section/slice/country';
import { setState } from 'store/slices/country-section/slice/country';
import InputLayout from 'components/widgets/InputLayout';
import CustomDateTime from 'components/widgets/CustomDateTime';
import { ToastContainer } from 'react-toastify';
import { useRef } from 'react';

// ==============================|| FIELDS ||============================== //
const options = [
  { label: 'Broker Company', id: 1 },
  { label: 'Developer Company', id: 2 },
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
  const [disabled, setDisabled] = useState(false);





  useEffect(() => {
    if (!lisenceFile || !vatImage || !companyLogo || !companyCoverImage || !profileImage) {
      setDisabled(true);
    }
  }, [lisenceFile, vatImage, companyLogo, companyCoverImage, profileImage]);


  return (
    <LoadScript googleMapsApiKey="AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y" libraries={['places']}>
      <Page title="Add Company">
        <ToastContainer />
        <Grid container spacing={gridSpacing}>
          <Container title="Add Compnay Details" style={{ xs: 12 }}>
            <Grid container spacing={2} justifyContent="center" style={{ xs: 12 }}>
              <AutoCompleteSelector
                style={{ xs: 12, lg: 10, mb: 2 }}
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
                  style={{ xs: 12, lg: 10, mb: 2 }}
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
                  style={{ xs: 12, lg: 10, mb: 2 }}
                  label="Service Type"
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
                  style={{ xs: 12, lg: 10, mb: 2 }}
                  label="Sub-Service Type"
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
          <Container title="Add Billing Information" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
              <AutoCompleteSelector
                style={{ xs: 12, lg: 6, mb: 2 }}
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
                  dispatch(setState(null));
                }}
              />

              <AutoCompleteSelector
                style={{ xs: 12, lg: 6, mb: 2 }}
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
                  dispatch(setCity(null));
                }}
              />

              <AutoCompleteSelector
                style={{ xs: 12, lg: 6, mb: 2 }}
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
                  dispatch(setCommunity(null));
                }}
              />
              <AutoCompleteSelector
                style={{ xs: 12, lg: 6, mb: 2 }}
                label="Community"
                id="community-selector"
                options={communities?.map((community) => {
                  return { label: community.Community, id: community.ID };
                })}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                placeholder="Select a Community"
                value={community}
                disabled={community ? false : true}
                helperText="Please select a community"
                loading={loading}
                func={(newValue) => {
                  dispatch(setCommunity(newValue));
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
                label="Billing Reference"
                placeholder="Enter the billing reference"
                helperText="Please enter the billing reference"
                type="text"
                style={{ xs: 12, lg: 6 }}
                value={companyInformation.billingAddressInformation.billingReference}
                setValue={(e) => dispatch(setCompanyBillingReference(e))}
              />
            </Grid>
          </Container>

          <Container title="Company Location" style={{ xs: 12 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid container spacing={2} alignItems="center">
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
                <Map locationAddress={address} xs={12} lg={12} />
              </Grid>
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
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Currency"
                placeholder="Currency"
                helperText="Please enter currency"
                type="text"
                value={companyInformation.bankAccountDetails.currency}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsCurrency(e))}
              />
              <InputText
                style={{ xs: 12, lg: 4 }}
                label="Country"
                placeholder="Country"
                helperText="Please enter country"
                type="country"
                value={companyInformation.bankAccountDetails.country}
                setValue={(e) => dispatch(setCompanyBankAccountDetailsCountry(e))}
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
          <SubmitButton submit={submitForm} disabled={disabled} />
        </Grid>
      </Page>
    </LoadScript>
  );
}

ColumnsLayouts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ColumnsLayouts;
