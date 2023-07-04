import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subCompanies: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

const subCompaniesSlice = createSlice({
  name: 'subCompanies',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSubCompanies: (state, action) => {
      state.subCompanies = action.payload.data;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPages;
    },
  },
});

export const { setLoading, setError, setSubCompanies } = subCompaniesSlice.actions;

export default subCompaniesSlice.reducer;
