import { api } from 'utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const config = {
  headers: { 'Content-Type': 'multipart/form-data', "Authorization": "Bearer v2.local.R5OYUzjy4beHYOvF6fCv1iRN6SrfyLnDPsOE_-ICa-HygXGpVVe4OlOqQjv7w5OSrM7w-KjI0YJ-53DT7dmIcT_4_KNlxmxrFZp6OgWsRuWYMdIbQlojowB5jNCRBBWFuZiYwdKMa5CNJZvHY-6EEe8FYWqFuwATEay3o-Jhm_k_aFZ8P1b66ckrt6mMJNm2YmHZxx2s_R-bxC5ExftFJzPJu98Kc9CkzkaPzgJIh7uMXNuNUEm25Q9jNB30qFY36ZHpDTuzy4HDhogFxQ.bnVsbA" }
};
const baseurl = 'http://20.203.31.58'

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
export const updateCompanyType = createAsyncThunk('company/updateCompanyType', async ({company_id,formData} , { rejectWithValue }) => {
  try {
    console.log(`company id: ${company_id}`)
    const response = await api.put(`${baseurl}/api/services/updatecompanytype/${company_id}`,formData, config);
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

export const createService = createAsyncThunk('company/createService', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/services/createservices`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getLocalCompanies = createAsyncThunk('company/getLocalCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getLocalCompanies?page_no=1&page_size=10&country=pakistan22`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getInternationalCompanies = createAsyncThunk('company/getInternationalCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getInternationalCompanies?page_no=1&page_size=100&country=pakistan22`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createCompany = createAsyncThunk('company/createCompany', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/dashboard/createCompany`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
