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
  updateSubService,
  getFeaturedCompanies,
  updateCompanyRank,
  restoreCompany,
  updateCompanyStatus,
  updateMainService,
  deleteMainService,
  getCompanyNames,
  getSubscription,
  updateSubscription,
  getActiveSubscription,
  getPendingSubscription,
  getFeaturedCompany,
  getCompanyByStatus,
  getCompanyDocs,
  updateCompanyDoc
} from '../action/company';

import { ToastError, ToastSuccess } from 'utils/toast';

import { deleteService } from 'store/slices/company-section/action/company';

const initialState = {
  companies: [],
  localCompanies: [],
  internationalCompanies: [],
  companyTypes: [],
  mainServices: [],
  features: [],
  services: [],
  featuredCompanies: [],
  companiesStatus: [],
  activeSubscription: [],
  pendingSubscription: [],
  blocks: [],
  companyDocs: [],
  companyType: null,
  service: null,
  company: null,
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

        ToastSuccess('Added Successfully');
      })
      .addCase(createCompanyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.companyTypes = state.companyTypes;

        ToastError(state.error);
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
        console.log(action);
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

        ToastSuccess('Added Successfully');
      })

      .addCase(createMainService.rejected, (state, action) => {
        state.loading = false;
        state.mainServices = state.mainServices;
        state.error = action.payload.error;

        ToastError(state.error);
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

        ToastSuccess('Company Added Successfully');
      })
      .addCase(createCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.companies = state.companies;

        ToastError(state.error);
      })

      .addCase(createService.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.services = state.services;
      })

      .addCase(createService.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.services = [...state.services, action.payload.data];

        ToastSuccess('Added Successfully');
      })

      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.services = state.services;

        ToastError(state.error);
      })

      .addCase(getLocalCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.localCompanies = state.localCompanies;
      })
      .addCase(getLocalCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.localCompanies = action.payload.data.filter((item) => item.Status != '5');
      })
      .addCase(getLocalCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
        state.localCompanies = state.localCompanies;
      })

      .addCase(getInternationalCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;

        state.internationalCompanies = state.localCompanies;
      })
      .addCase(getInternationalCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.internationalCompanies = action.payload.data || [];
      })
      .addCase(getInternationalCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.internationalCompanies = state.internationalCompanies;
      })
      // ================================================ get company docs =============================================

      .addCase(updateCompanyDoc.pending, (state) => {
        state.loading = true;
        state.companyDocs = state.companyDocs;
        state.error = null;
      })

      .addCase(updateCompanyDoc.fulfilled, (state, action) => {
        state.loading = false;
        state.companyDocs = state.companyDocs;
        state.error = null;
      })

      .addCase(updateCompanyDoc.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.companyDocs = state.companyDocs;
        state.error = action.payload.error;
      })
      .addCase(getCompanyDocs.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.companyDocs = state.companyDocs;
      })
      .addCase(getCompanyDocs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companyDocs = [action.payload.data];
      })
      .addCase(getCompanyDocs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.companyDocs = state.companyDocs;
      })

      .addCase(getAllServices.pending, (state) => {
        state.loading = true;
        state.services = state.services;
        state.error = null;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
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
      .addCase(getCompanyByStatus.pending, (state) => {
        state.loading = true;
        state.companiesStatus = state.companiesStatus;
        state.error = null;
      })
      .addCase(getCompanyByStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.companiesStatus = action.payload.data;
        state.error = null;
      })
      .addCase(getCompanyByStatus.rejected, (state, action) => {
        state.loading = false;
        state.companiesStatus = state.companiesStatus;
        state.error = action.payload.error;
      })
      .addCase(updateSubService.pending, (state) => {
        state.loading = true;
        state.services = state.services;
        state.error = null;
      })

      .addCase(updateSubService.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        state.loading = false;
        state.services = state.services.map((item) => {
          if (item.id === action.payload.data.id && item.main_services_id === action.payload.data.main_services_id) {
            return action.payload.data;
          }
          return item;
        });
        state.error = null;
      })

      // ==============================================================
      .addCase(updateMainService.pending, (state) => {
        state.loading = true;
        state.services = state.services;
        state.error = null;
      })

      .addCase(updateMainService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.map((item) => {
          if (item.id === action.payload.data.id && item.main_services_id === action.payload.data.main_services_id) {
            return action.payload.data;
          }
          return item;
        });
        state.error = null;
      })

      // ==============================================================

      .addCase(deleteService.pending, (state) => {
        state.deleting = true;
        state.services = state.services;
        state.error = null;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.filter((service) => service.id !== action.payload);
        state.deleting = false;
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.deleting = false;
        state.services = state.services;
        state.error = action.payload;
      })

      .addCase(getFeaturedCompanies.pending, (state) => {
        state.loading = true;
        state.featuredCompanies = state.featuredCompanies;
        state.error = null;
      })
      .addCase(getFeaturedCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredCompanies = action.payload.data || [];
        state.error = null;
      })
      .addCase(getFeaturedCompanies.rejected, (state, action) => {
        state.loading = false;
        state.featuredCompanies = state.featuredCompanies;
        state.error = action.payload;
      })
      .addCase(updateCompanyRank.fulfilled, () => {
        ToastSuccess('Updated Successfully');
      })
      .addCase(updateCompanyRank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        ToastError(state.error);
      })

      .addCase(deleteMainService.pending, (state) => {
        state.deleting = true;
        state.services = state.services;
        state.error = null;
      })
      .addCase(deleteMainService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.filter((service) => service.id !== action.payload);
        state.deleting = false;
      })
      .addCase(deleteMainService.rejected, (state, action) => {
        state.deleting = false;
        state.services = state.services;
        state.error = action.payload;
      })

      .addCase(updateCompanyStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        ToastSuccess('Status Updated Successfully');
      })
      .addCase(updateCompanyStatus.rejected, (state, action) => {
        ToastError(action.payload);
      })
      .addCase(restoreCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(restoreCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // state.blockedCompanies = state.blockedCompanies.filter((company) => company.ID !== action.payload.id);
        ToastSuccess('Restored Successfully');
      })
      .addCase(restoreCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        ToastError(state.error);
      })

      .addCase(getCompanyNames.pending, (state) => {
        state.loading = true;
        state.companies = state.companies;
        state.error = null;
      })
      .addCase(getCompanyNames.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload.data || [];
        state.error = null;
      })
      .addCase(getCompanyNames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.companies = state.companies;
      })
      .addCase(getSubscription.pending, (state) => {
        state.company = state.company;
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubscription.fulfilled, (state, action) => {
        state.company = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(getSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.companies = state.companies;
      })
      .addCase(updateSubscription.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubscription.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        ToastSuccess('Subscription Updated Succesfully');
      })
      .addCase(updateSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        ToastError(action.payload);
      })
      .addCase(getActiveSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.activeSubscription = state.activeSubscription;
      })
      .addCase(getActiveSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.activeSubscription = action.payload.data || [];
        state.error = null;
      })
      .addCase(getActiveSubscription.rejected, (state, action) => {
        state.loading = false;
        state.activeSubscription = state.activeSubscription;
        state.error = action.payload;
      })
      .addCase(getPendingSubscription.pending, (state, action) => {
        state.loading = true;
        state.pendingSubscription = state.pendingSubscription;
        state.error = null;
      })
      .addCase(getPendingSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingSubscription = action.payload.data || [];
        state.error = null;
      })
      .addCase(getPendingSubscription.rejected, (state, action) => {
        state.loading = false;
        state.pendingSubscription = state.pendingSubscription;
        state.error = action.payload;
      });
  }
});

export default slice.reducer;

export const {} = slice.actions;
