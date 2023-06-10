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
  getAllServices
} from '../action/company';
import { toast } from 'react-toastify';

const initialState = {
  companies: [],
  localCompanies: [],
  internationalCompanies: [],
  companyTypes: [],
  mainServices: [],
  services: [],
  companyType: null,
  service: null,
  company: null,
  companyInformation: {
    companyDetails: {
      companyType: null,
      subCompanyType: null,
      mainService: null,
      service: '',
      companyName: '',
      companyTagline: '',
      reraNo: '',
      licenseNo: '',
      licenseImage: '',
      licenseExpiry: '',
      vatNo: '',
      vatStatus: '',
      vatImage: ''
    },
    billingAddressInformation: {
      country: '',
      state: '',
      city: '',
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
      subscriptionEndDate: '',
      profileImage: ''
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

      .addCase(getAllCompanyTypes.pending, (state) => {
        state.loading = true;
        state.companyTypes = [];
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
        state.companyTypes = [];
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

      .addCase(getAllMainServices.pending, (state) => {
        state.loading = true;
        state.mainServices = [];
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
        state.mainServices = [];
      })

      // create company
      .addCase(createCompany.pending, (state) => {
        state.loading = true;
        state.companies = [];
        state.error = null;
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companies = [...state.companies, action.payload.data];
      })
      .addCase(createCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.companies = [];
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
        state.localCompanies = [...action.payload.data];
      })
      .addCase(getLocalCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.localCompanies = state.localCompanies;
      })

      .addCase(getInternationalCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.localCompanies = state.localCompanies;
      })
      .addCase(getInternationalCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.internationalCompanies = [...action.payload.data];
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
      });
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
  setCompanyService
} = slice.actions;
