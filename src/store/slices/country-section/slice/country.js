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
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.countries = state.countries;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload.data;
        state.error = null;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.countries = state.countries;
      })
      .addCase(getStates.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.states = state.states;
      })
      .addCase(getStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload.data;
        state.error = null;
      })
      .addCase(getStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.states = state.states;
      })
      .addCase(getCities.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.cities = state.cities;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload.data;
        state.error = null;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.cities = state.cities;
      });
  }
});

// Reducers

export default slice.reducer;

export const { setCountry, setState, setCity } = slice.actions;

// ----------------------------------------------------------------------
