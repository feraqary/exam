import { createSlice } from '@reduxjs/toolkit';
import {
  getCountries,
  getStates,
  getCities,
  getCommunities,
  getSubCommunities,
  getAllCountries,
  getAllCurrencies,
  getStateCity
} from '../actions/countries';

const initialState = {
  error: null,
  loading: false,
  countries: [],
  country: null,
  states: [],
  state: null,
  cities: [],
  city: null,
  communities: [],
  community: null,
  subCommunities: [],
  subCommunity: null,
  bankCountries: [],
  bankCountry: null,
  currencies: [],
  currency: null,
  stateCity: []
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
    },
    setCommunity: (state, action) => {
      state.community = action.payload;
    },
    setSubCommunity: (state, action) => {
      state.subCommunity = action.payload;
    },
    setBankCountry: (state, action) => {
      console.log(action.payload);
      state.bankCountry = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
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
      })
      .addCase(getCommunities.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.communities = state.communities;
      })
      .addCase(getCommunities.fulfilled, (state, action) => {
        state.loading = false;
        state.communities = action.payload.data;
        state.error = null;
      })
      .addCase(getCommunities.rejected, (state, action) => {
        state.loading = false;
        state.communities = state.communities;
        state.error = null;
      })
      .addCase(getSubCommunities.pending, (state) => {
        state.loading = true;
        state.subCommunities = state.subCommunities;
        state.error = null;
      })
      .addCase(getSubCommunities.fulfilled, (state, action) => {
        state.loading = false;
        state.subCommunities = action.payload.data;
        state.error = null;
      })
      .addCase(getSubCommunities.rejected, (state, action) => {
        state.loading = false;
        state.subCommunities = state.subCommunities;
        state.error = action.payload;
      })
      .addCase(getAllCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.bankCountries = state.bankCountries;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.bankCountries = action.payload.data;
        state.error = null;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.bankCountries = state.bankCountries;
        state.error = action.payload;
      })
      .addCase(getAllCurrencies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currencies = state.currencies;
      })
      .addCase(getAllCurrencies.fulfilled, (state, action) => {
        state.loading = false;
        state.currencies = action.payload.data;
        state.error = null;
      })
      .addCase(getAllCurrencies.rejected, (state, action) => {
        state.loading = false;
        state.currencies = state.currencies;
        state.error = action.payload;
      })

      .addCase(getStateCity.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currencies = state.currencies;
      })
      .addCase(getStateCity.fulfilled, (state, action) => {
        state.loading = false;
        state.stateCity = action.payload.data;
        state.error = null;
      })
      .addCase(getStateCity.rejected, (state, action) => {
        state.loading = false;
        state.currencies = state.currencies;
        state.error = action.payload;
      });
  }
});

// Reducers

export default slice.reducer;

export const { setCountry, setState, setCity, setCommunity, setSubCommunity, setBankCountry, setCurrency } = slice.actions;
