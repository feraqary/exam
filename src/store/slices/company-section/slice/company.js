import { createSlice } from '@reduxjs/toolkit';

import {
  createCompanyType,
  getAllCompanyTypes,
  getAllMainServices,
  createCompany,
  createMainService,
  createService,
  getLocalCompanies,
  getInternationalCompanies,
  getAllServices,
  getMainServices,
  updateCompanyType,
  getFeaturedCompany,
  getBlockedCompany
} from '../action/company';

import { toast } from 'react-toastify';

const initialState = {
  companies: [],
  localCompanies: [],
  internationalCompanies: [],
  companyTypes: [],
  mainServices: [],
  features: [],
  services: [],
  blocks: [],
  companyType: null,
  service: null,
  company: null,
  companyInformation: {
    companyDetails: {
      companyType: null,
      subCompanyType: null,
      mainService: null,
      service: null,
      companyName: '',
      companyTagline: '',
      reraNo: '',
      licenseNo: '',
      licenseExpiry: '',
      vatNo: '',
      vatStatus: ''
    },
    billingAddressInformation: {
      community: '',
      officeAddress: '',
      billingReference: ''
    },
    companyLocation: {
      mapUrl: '',
      place: '',
      state: '',
      country: '',
      lat: '',
      long: ''
    },
    socialMedia: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: ''
    },
    adminContactInformation: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      numberOfEmployees: '',
      subscriptionDuration: '',
      subscriptionStartDate: '',
      subscriptionEndDate: ''
    },
    bankAccountDetails: {
      accountNumber: '',
      accountName: '',
      ibanNumber: '',
      currency: '',
      country: '',
      bankName: '',
      bankBranch: '',
      swiftCode: ''
    },

    companyPresentation: {
      companyWebsite: '',
      companyEmail: '',
      companyContactNumber: '',
      companyDescription: ''
    }
  },
  mainService: null,
  loading: false,
  error: null
};

const slice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setMainService: (state, action) => {
      state.mainService = action.payload;
    },
    setCompanyType: (state, action) => {
      state.companyType = action.payload;
    },
    setMainCompanyType: (state, action) => {
      state.companyInformation.companyDetails.companyType = action.payload;
    },
    setSubCompanyType: (state, action) => {
      state.companyInformation.companyDetails.subCompanyType = action.payload;
    },
    setCompanyMainService: (state, action) => {
      state.companyInformation.companyDetails.mainService = action.payload;
    },
    setCompanyService: (state, action) => {
      state.companyInformation.companyDetails.service = action.payload;
    },
    setCompanyName: (state, action) => {
      console.log(action);
      state.companyInformation.companyDetails.companyName = action.payload;
    },
    setCompanyTagline: (state, action) => {
      state.companyInformation.companyDetails.companyTagline = action.payload;
    },
    setCompanyReraNo: (state, action) => {
      state.companyInformation.companyDetails.reraNo = action.payload;
    },
    setCompanyLicenseNo: (state, action) => {
      state.companyInformation.companyDetails.licenseNo = action.payload;
    },
    setCompanyLicenseExpiry: (state, action) => {
      state.companyInformation.companyDetails.licenseExpiry = action.payload;
    },
    setCompanyVatNo: (state, action) => {
      state.companyInformation.companyDetails.vatNo = action.payload;
    },
    setCompanyVatStatus: (state, action) => {
      state.companyInformation.companyDetails.vatStatus = action.payload;
    },
    setCompanyCommunity: (state, action) => {
      state.companyInformation.billingAddressInformation.community = action.payload;
    },
    setCompanyOfficeAddress: (state, action) => {
      state.companyInformation.billingAddressInformation.officeAddress = action.payload;
    },
    setCompanyBillingReference: (state, action) => {
      state.companyInformation.billingAddressInformation.billingReference = action.payload;
    },
    setCompanyLocationMapUrl: (state, action) => {
      state.companyInformation.companyLocation.mapUrl = action.payload;
    },

    setCompanyLocationPlace: (state, action) => {
      state.companyInformation.companyLocation.place = action.payload;
    },
    setCompanyLocationState: (state, action) => {
      state.companyInformation.companyLocation.state = action.payload;
    },
    setCompanyLocationCountry: (state, action) => {
      state.companyInformation.companyLocation.country = action.payload;
    },
    setCompanyLocationLat: (state, action) => {
      state.companyInformation.companyLocation.lat = action.payload;
    },
    setCompanyLocationLong: (state, action) => {
      state.companyInformation.companyLocation.long = action.payload;
    },
    setCompanySocialMediaFacebook: (state, action) => {
      state.companyInformation.socialMedia.facebook = action.payload;
    },
    setCompanySocialMediaTwitter: (state, action) => {
      state.companyInformation.socialMedia.twitter = action.payload;
    },
    setCompanySocialMediaInstagram: (state, action) => {
      state.companyInformation.socialMedia.instagram = action.payload;
    },
    setCompanySocialMediaLinkedIn: (state, action) => {
      state.companyInformation.socialMedia.linkedin = action.payload;
    },
    setCompanyPresentationCompanyWebsite: (state, action) => {
      state.companyInformation.companyPresentation.companyWebsite = action.payload;
    },
    setCompanyPresentationCompanyEmail: (state, action) => {
      state.companyInformation.companyPresentation.companyEmail = action.payload;
    },
    setCompanyPresentationCompanyContactNumber: (state, action) => {
      state.companyInformation.companyPresentation.companyContactNumber = action.payload;
    },
    setCompanyPresentationCompanyDescription: (state, action) => {
      state.companyInformation.companyPresentation.companyDescription = action.payload;
    },
    setCompanyAdminContactInformationFirstName: (state, action) => {
      state.companyInformation.adminContactInformation.firstName = action.payload;
    },
    setCompanyAdminContactInformationLastName: (state, action) => {
      state.companyInformation.adminContactInformation.lastName = action.payload;
    },
    setCompanyAdminContactInformationEmailAddress: (state, action) => {
      state.companyInformation.adminContactInformation.emailAddress = action.payload;
    },
    setCompanyAdminContactInfromationPhoneNumber: (state, action) => {
      state.companyInformation.adminContactInformation.phoneNumber = action.payload;
    },
    setCompanyAdminContactInformationSubscriptionDuration: (state, action) => {
      state.companyInformation.adminContactInformation.subscriptionDuration = action.payload;
    },
    setCompanyAdminContactInformationSubscriptionDurationStartDate: (state, action) => {
      state.companyInformation.adminContactInformation.subscriptionStartDate = action.payload;
    },
    setCompanyAdminContactInformationSubscriptionDurationEndDate: (state, action) => {
      state.companyInformation.adminContactInformation.subscriptionEndDate = action.payload;
    },
    setCompanyBankAccountDetailsAccountNumber: (state, action) => {
      state.companyInformation.bankAccountDetails.accountNumber = action.payload;
    },
    setCompanyBankAccountDetailsAccountName: (state, action) => {
      state.companyInformation.bankAccountDetails.accountNumber = action.payload;
    },
    setCompanyBankAccountDetailsIbanNumber: (state, action) => {
      state.companyInformation.bankAccountDetails.ibanNumber = action.payload;
    },
    setCompanyBankAccountDetailsCurrency: (state, action) => {
      state.companyInformation.bankAccountDetails.currency = action.payload;
    },
    setCompanyBankAccountDetailsCountry: (state, action) => {
      state.companyInformation.bankAccountDetails.country = action.payload;
    },
    setCompanyBankAccountDetailsBankName: (state, action) => {
      state.companyInformation.bankAccountDetails.bankName = action.payload;
    },
    setCompanyBankAccountDetailsBankBranch: (state, action) => {
      state.companyInformation.bankAccountDetails.bankBranch = action.payload;
    },
    setCompanyBankAccountDetailsSwiftCode: (state, action) => {
      state.companyInformation.bankAccountDetails.swiftCode = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompanyType.pending, (state) => {
        state.loading = true;
        state.companyTypes = state.companyTypes;
        state.error = null;
      })
      .addCase(createCompanyType.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companyTypes = [...state.companyTypes, action.payload.data];
        toast.success('Added Successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })
      .addCase(createCompanyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.companyTypes = state.companyTypes;
        toast.error(`${state.error}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })
      // update company types=================================================================================================
      .addCase(updateCompanyType.pending, (state) => {
        state.loading = true;
        state.companyTypes = state.companyTypes;
        state.error = null;
      })
      .addCase(updateCompanyType.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companyTypes = action.payload.data;
      })
      .addCase(updateCompanyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.companyTypes = state.companyTypes;
      })
      // get all company types=================================================================================================
      .addCase(getAllCompanyTypes.pending, (state) => {
        state.loading = true;
        state.companyTypes = state.companyTypes;
        state.error = null;
      })
      .addCase(getAllCompanyTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companyTypes = action.payload.data;
      })
      .addCase(getAllCompanyTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.companyTypes = state.companyTypes;
      })

      // create main service

      .addCase(createMainService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMainService.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.loading = false;
        state.mainServices = [...state.mainServices, action.payload.data];
        state.error = null;
        toast.success('Added Successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })

      .addCase(createMainService.rejected, (state, action) => {
        state.loading = false;
        state.mainServices = state.mainServices;
        state.error = action.payload.error;
        toast.error(`${state.error}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })
      // get all main services=================================================================================================
      .addCase(getAllMainServices.pending, (state) => {
        state.loading = true;
        state.mainServices = state.mainServices;
        state.error = null;
      })
      .addCase(getAllMainServices.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.mainServices = action.payload.data;
      })
      .addCase(getAllMainServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.mainServices = state.mainServices;
      })
      // get main services=================================================================================================
      .addCase(getMainServices.pending, (state) => {
        console.log(state);
        state.loading = true;
        state.mainService = state.mainService;
        state.error = null;
      })
      .addCase(getMainServices.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.mainService = action.payload.data;
      })
      .addCase(getMainServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.mainService = state.mainService;
      })

      .addCase(createCompany.pending, (state) => {
        state.loading = true;
        state.companies = state.companies;
        state.error = null;
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companies = [...state.companies, action.payload.data];
        toast.success('Company Added Successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })
      .addCase(createCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.companies = state.companies;
        toast.error(`${state.error}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })
      // create service

      .addCase(createService.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.services = state.services;
      })

      .addCase(createService.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.services = [...state.services, action.payload.data];
        toast.success('Added Successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })

      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.services = state.services;
        toast.error(`${state.error}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      })

      .addCase(getLocalCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.localCompanies = state.localCompanies;
      })
      .addCase(getLocalCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.localCompanies = action.payload.data;
      })
      .addCase(getLocalCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.localCompanies = state.localCompanies;
      })

      .addCase(getInternationalCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.internationalCompanies = state.internationalCompanies;
      })
      .addCase(getInternationalCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.internationalCompanies = action.payload.data ? [...action.payload.data] : [];
      })
      .addCase(getInternationalCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.internationalCompanies = state.internationalCompanies;
      })
      .addCase(getAllServices.pending, (state) => {
        state.loading = true;
        state.services = state.services;
        state.error = null;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.services = action.payload.data;
        state.error = null;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.loading = false;
        state.services = state.services;
        state.error = action.payload.error;
      })

      //get company features
      .addCase(getFeaturedCompany.pending, (state) => {
        state.loading = true;
        state.features = state.features;
        state.error = null;
      })
      .addCase(getFeaturedCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.features = action.payload.data;
        state.error = null;
      })
      .addCase(getFeaturedCompany.rejected, (state, action) => {
        state.loading = false;
        state.features = state.features;
        state.error = action.payload.error;
      })

      //get Blocked Company
      .addCase(getBlockedCompany.pending, (state) => {
        state.loading = true;
        state.blocks = state.blocks;
        state.error = null;
      })
      .addCase(getBlockedCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.blocks = action.payload.data;
        state.error = null;
      })
      .addCase(getBlockedCompany.rejected, (state, action) => {
        state.loading = false;
        state.blocks = state.blocks;
        state.error = action.payload.error;
      })
  }
});

export default slice.reducer;

export const {
  setCompany,
  setMainService,
  setCompanyType,
  setMainCompanyType,
  setSubCompanyType,
  setCompanyMainService,
  setCompanyService,
  setCompanyLicenseExpiry,
  setCompanyLicenseNo,
  setCompanyName,
  setCompanyReraNo,
  setCompanyTagline,
  setCompanyVatNo,
  setCompanyVatStatus,
  setCompanyCommunity,
  setCompanyBillingReference,
  setCompanyOfficeAddress,
  setCompanyLocationMapUrl,
  setCompanyLocationCountry,
  setCompanyLocationState,
  setCompanyLocationLat,
  setCompanyLocationLong,
  setCompanyLocationPlace,
  setCompanySocialMediaFacebook,
  setCompanySocialMediaInstagram,
  setCompanySocialMediaLinkedIn,
  setCompanySocialMediaTwitter,
  setCompanyPresentationCompanyWebsite,
  setCompanyPresentationCompanyContactNumber,
  setCompanyPresentationCompanyDescription,
  setCompanyPresentationCompanyEmail,
  setCompanyAdminContactInformationEmailAddress,
  setCompanyAdminContactInformationFirstName,
  setCompanyAdminContactInformationLastName,
  setCompanyAdminContactInformationSubscriptionDuration,
  setCompanyAdminContactInformationSubscriptionDurationEndDate,
  setCompanyAdminContactInformationSubscriptionDurationStartDate,
  setCompanyAdminContactInfromationPhoneNumber,
  setCompanyBankAccountDetailsAccountName,
  setCompanyBankAccountDetailsAccountNumber,
  setCompanyBankAccountDetailsBankBranch,
  setCompanyBankAccountDetailsBankName,
  setCompanyBankAccountDetailsCountry,
  setCompanyBankAccountDetailsCurrency,
  setCompanyBankAccountDetailsIbanNumber,
  setCompanyBankAccountDetailsSwiftCode
} = slice.actions;
