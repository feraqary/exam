import { createSlice } from '@reduxjs/toolkit';

const subCompanySlice = createSlice({
  name: 'subCompany',
  initialState: {
    subCompanies: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchSubCompaniesRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSubCompaniesSuccess: (state, action) => {
      state.isLoading = false;
      state.subCompanies = action.payload;
    },
    fetchSubCompaniesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createSubCompanyRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createSubCompanySuccess: (state, action) => {
      state.isLoading = false;
      // Handle the created sub company data if needed
    },
    createSubCompanyFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteSubCompanyRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteSubCompanySuccess: (state, action) => {
      state.isLoading = false;
      // Remove the deleted sub company from state if needed
    },
    deleteSubCompanyFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getSubCompanyRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getSubCompanySuccess: (state, action) => {
      state.isLoading = false;
      // Handle the fetched sub company data if needed
    },
    getSubCompanyFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSubCompaniesRequest,
  fetchSubCompaniesSuccess,
  fetchSubCompaniesFailure,
  createSubCompanyRequest,
  createSubCompanySuccess,
  createSubCompanyFailure,
  deleteSubCompanyRequest,
  deleteSubCompanySuccess,
  deleteSubCompanyFailure,
  getSubCompanyRequest,
  getSubCompanySuccess,
  getSubCompanyFailure,
} = subCompanySlice.actions;

export default subCompanySlice.reducer;
