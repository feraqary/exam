import { api } from '../../../../utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const baseurl = 'http://20.203.31.58';

export const getCountries = createAsyncThunk('countries/getallcountries', async () => {
  try {
    const response = await api.get(`${baseurl}/api/country/getallcountries`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getStates = createAsyncThunk('countries/getStatebycountry', async (country_id, { rejectWithValue }) => {
  try {
    if (!country_id) {
      return [];
    }
    const response = await api.get(`${baseurl}/api/country/getstatesbycountry/${country_id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getCities = createAsyncThunk('countries/getCitiesbystate', async (state_id, { rejectWithValue }) => {
  try {
    if (!state_id) {
      return [];
    }
    const response = await api.get(`${baseurl}/api/country/getcitiesbystate/${state_id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.error);
  }
});

export const getCommunities = createAsyncThunk('countries/getCommunities', async (city_id, { rejectWithValue }) => {
  try {
    if (!city_id) {
      return [];
    }
    const response = await api.get(`${baseurl}/api/country/getcommunitiesbycity/${city_id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getSubCommunities = createAsyncThunk('countries/subCommunities', async (community_id, { rejectWithValue }) => {
  try {
    if (!community_id) {
      return [];
    }
    const response = await api.get(`${baseurl}/api/country/getsubcommunitiesbycommunity/${community_id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.error);
  }
});

export const getAllCountries = createAsyncThunk('countries/getAllCountries', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/country/getallcountries`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getStateCity = createAsyncThunk('countries/getStateCity', async (country_id, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/country/getStateCityByCountry/${country_id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getAllCurrencies = createAsyncThunk('countries/getAllCurrencies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/currency/getAllCurrencies`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});
