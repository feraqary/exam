import { api } from 'utils/axios';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'v2.local.5Y_Uhdj_pMf333G2uvCFzBy8Ddg4fAs3qqHGoeKw2Euv3_ni9gtnf0P6_n_f-G_8tiUwUxCSrPEecVxpOFDvzxDvwbHhChHQcZd6_fkpaOMQ2GpIb3rTwM3giRJ1gMbhd8Q6XqXZRbFF271NZd_n5XLmsRu7Vd4iMKlnzWt-GSy5M-6YutivP4lIvigvEUWlQB7rviogx0kUGDHDHiiAOFZXQbmIE0wBrTiHASH64_qtkcgSXgcBq-A6DOdzuRZ8KDR6J1upzoe5bMgrdFdFv1Q.bnVsbA';
const config = {
  headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
};
const baseurl = 'http://20.203.31.58';

export const createCompanyType = createAsyncThunk('company/createCompanyType', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createCompanyType`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createMainService = createAsyncThunk('company/createMainService', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createmainservices`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getAllCompanyTypes = createAsyncThunk('company/getAllCompanyTypes', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/services/getAllCompanyTypes`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
    console.log(rejectWithValue(error));
  }
});
export const updateCompanyType = createAsyncThunk('company/updateCompanyType', async ({ company_id, formData }, { rejectWithValue }) => {
  try {
    console.log(`company id: ${company_id}`);
    const response = await api.put(`${baseurl}/api/services/updateCompanyType/${company_id}`, formData, config);
    return response.data;
  } catch (error) {
    console.log(rejectWithValue(error));
    return rejectWithValue(error.response.data);
  }
});
export const getAllMainServices = createAsyncThunk('company/getAllMainServices', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/services/getallmainservices`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getAllServices = createAsyncThunk('company/getAllServices', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/services/getallservices`);
    return response.data;
  } catch (error) {
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

export const createService = createAsyncThunk('company/createServices', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createservices`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getLocalCompanies = createAsyncThunk('company/getLocalCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getLocalCompanies?page_no=1&page_size=10&country=pakistan`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getInternationalCompanies = createAsyncThunk('company/getInternationalCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getInternationalCompanies?page_no=1&page_size=10&country=pakistan`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createCompany = createAsyncThunk('company/createCompany', async (formData, { rejectWithValue }) => {
  console.log('fired');
  try {
    const response = await api.post(`${baseurl}/api/dashboard/createCompany`, formData, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const updateSubService = createAsyncThunk('subService/Updatesubservice', async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/services/updateservice/${id}`, formData, config);
    console.log('response', response.data);
    console.log('id', id);
    console.log('formData', formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const createServices = createAsyncThunk('services/createServices', async ({ formData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/services/createservices/100`, formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteService = createAsyncThunk('services/deleteService', async (serviceId, { rejectWithValue }) => {
  try {
    await axios.delete(`${baseurl}/api/services/deleteservice/${serviceId}`);
    return serviceId;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
