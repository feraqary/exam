import { createSlice } from '@reduxjs/toolkit';
import { getCountries, getStates, getCities } from '../actions/countries';
import { toast } from 'react-toastify';

const initialState = {
  error: null,
  loading: false,
  countries: [],
  country: null,
  states: [],
  state: null,
  cities: [],
  city: null
};

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    }
  },

  
  extraReducers:(builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
        state.companies = [];
        state.error = null;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
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
      .addCase(getCountries.rejected, (state, action) => {
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





    .addCase(getStates.pending, (state) => {
      state.loading = true;
      state.companies = [];
      state.error = null;
    })
    .addCase(getStates.fulfilled, (state, action) => {
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
    .addCase(getStates.rejected, (state, action) => {
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


    .addCase(getCities.pending, (state) => {
      state.loading = true;
      state.companies = [];
      state.error = null;
    })
    .addCase(getCities.fulfilled, (state, action) => {
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
    .addCase(getCities.rejected, (state, action) => {
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


  }
});

// Reducers

export default slice.reducer;

export const { setCountry, setState, setCity } = slice.actions;

// ----------------------------------------------------------------------


    // [getCountries.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    //   state.countries = [];
    // },
    // [getCountries.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.countries = action.payload.data;
    //   state.error = null;
    // },
    // [getCountries.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    //   state.countries = [];
    // },

    // [getStates.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    //   state.states = [];
    // },
    // [getStates.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.states = action.payload.data;
    //   state.error = null;
    // },
    // [getStates.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    //   state.states = [];
    // },
    // [getCities.pending]: (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    //   state.cities = [];
    // },
    // [getCities.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.cities = action.payload.data;
    //   state.error = null;
    // },
    // [getCities.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    //   state.cities = [];
    // }