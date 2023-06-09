import { createSlice } from '@reduxjs/toolkit';
import { createCompanyType, getAllCompanyTypes, getAllMainServices, createCompany } from '../action/company';
import { toast } from 'react-toastify';


const initialState = {
  services: [],
  companies: [],
  mainServices: [],
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
    },
    setMainService: (state, action) => {
      state.mainService = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompanyType.pending, (state) => {
        state.loading = true;
        state.companies = [];
        state.error = null;
      })
      .addCase(createCompanyType.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companies = [...state.companies, action.payload.data];
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
        state.error = action.error;
        state.companies = [];
        toast.error('Something went Wrong', {
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
        state.companies = [];
        state.error = null;
      })
      .addCase(getAllCompanyTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companies = action.payload.data;
      })
      .addCase(getAllCompanyTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.companies = [];
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
        state.error = action.error;
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
        state.error = action.error;
        state.companies = [];
      })
  }
});

export default slice.reducer;

export const { setCompany, setMainService } = slice.actions;
