import { api } from 'utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const baseurl = 'http://20.203.31.58';
const config = {
  headers: { 'Content-Type': 'multipart/form-data' }
};

export const createCompanyType = createAsyncThunk('company/createCompanyType', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createCompanyType`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const createMainService = createAsyncThunk('company/createMainService', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createmainservices`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getAllCompanyTypes = createAsyncThunk('company/getAllCompanyTypes', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/services/getAllCompanyTypes`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});
export const getAllMainServices = createAsyncThunk('company/getAllMainServices', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/services/getallmainservices`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});


export const getMainServices = createAsyncThunk('service/getMainServiceById', async (company_id, { rejectWithValue }) => {
  try {
    if (!company_id) {
      return [];
    }
    const response = await api.get(`${baseurl}/api/services/getmainservice/${company_id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});



export const createCompany = createAsyncThunk('company/createCompany', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createCompany`, formData, config);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

export const createService = createAsyncThunk('company/createService', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createservices`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
