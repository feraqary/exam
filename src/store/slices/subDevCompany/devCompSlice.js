// subCompanySlice.js
import { createSlice } from '@reduxjs/toolkit';

const subCompanySlice = createSlice({
  name: 'subCompany',
  initialState: {
    subCompanies: [],
    error: null,
  },
  reducers: {
    fetchSubCompaniesSuccess: (state, action) => {
      state.subCompanies = action.payload;
      state.error = null;
    },
    fetchSubCompaniesFailure: (state, action) => {
      state.subCompanies = [];
      state.error = action.payload;
    },
    createSubCompanySuccess: (state, action) => {
      state.subCompanies.push(action.payload);
      state.error = null;
    },
    createSubCompanyFailure: (state, action) => {
      state.error = action.payload;
    },
    deleteSubCompanySuccess: (state, action) => {
      state.subCompanies = state.subCompanies.filter(
        (company) => company.id !== action.payload
      );
      state.error = null;
    },
    deleteSubCompanyFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchSubCompaniesSuccess,
  fetchSubCompaniesFailure,
  createSubCompanySuccess,
  createSubCompanyFailure,
  deleteSubCompanySuccess,
  deleteSubCompanyFailure,
} = subCompanySlice.actions;

export default subCompanySlice.reducer;
