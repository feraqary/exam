import { createSlice } from '@reduxjs/toolkit';

import { getCountries, getStates, getCities } from '../actions/countries';

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
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.countries = [];
    },
    [getCountries.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload.data;
      state.error = null;
    },
    [getCountries.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.countries = [];
    },
    [getStates.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.states = [];
    },
    [getStates.fulfilled]: (state, action) => {
      state.loading = false;
      state.states = action.payload.data;
      state.error = null;
    },
    [getStates.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.states = [];
    },
    [getCities.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
      state.cities = [];
    },
    [getCities.fulfilled]: (state, action) => {
      state.loading = false;
      state.cities = action.payload.data;
      state.error = null;
    },
    [getCities.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cities = [];
    }
  }
});

// Reducers

export default slice.reducer;

export const { setCountry, setState, setCity } = slice.actions;

// ----------------------------------------------------------------------
