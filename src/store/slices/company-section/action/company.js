import { api } from 'utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'v2.local.-EpSYI4sdwfM2bYxzJUdHA-_H8ML8JLA7198pCjg3cixgYt8uPuhbwOiZzV59qCynfVY707LHVhGPrjoHfW5FMEAU-cNtnc_ikoXytj6g3heblA4abLuKQMuadnBtNRVRH-EkLbJuUAfBAN0eieBHuTwR4apGAeC8WaX3W3WqxW6J2lFaUr_2WadAkKyMgA4HSjNMaCh9D6rdpQlpR3gl4gGgEnLwUl8yk0bwUlhkV9jpCnRLmgZoCot9PU8kbk220pj_C255e4MznVgfee1.bnVsbA';
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
    const response = await api.get(`${baseurl}/api/services/getAllCompanyTypes`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const updateCompanyType = createAsyncThunk('company/updateCompanyType', async ({ company_id, formData }, { rejectWithValue }) => {
  try {
    console.log(`company id: ${company_id}`);
    const response = await api.put(`${baseurl}/api/services/updateCompanyType/${company_id}`, formData, config);

    return response.data;
  } catch (error) {
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
    const response = await api.get(
      `${baseurl}/api/dashboard/getLocalCompanies?page_no=1&page_size=10&country=united arab emirates`,
      config
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getInternationalCompanies = createAsyncThunk('company/getInternationalCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(
      `${baseurl}/api/dashboard/getInternationalCompanies?page_no=1&page_size=100&country=united arab emirates`,
      config
    );
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
    const response = await api.get(`${baseurl}/api/dashboard/getCompaniesByRank/2`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getFeaturedCompany = createAsyncThunk('company/featured', async (_, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/services/updateservice/${id}`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteService = createAsyncThunk('services/deleteService', async (serviceId, { rejectWithValue }) => {
  try {
    await api.delete(`${baseurl}/api/services/deleteservice/${serviceId}`);
    return serviceId;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateMainService = createAsyncThunk('subService/Updateservice', async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/services/updatemainservice/${id}`, formData, config);
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getFeaturedCompanies = createAsyncThunk('companies/getFeaturedCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getCompaniesByRank/2`, config);

    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateCompanyRank = createAsyncThunk('companies/updateCompanyRank', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/dashboard/updateCompanyRank`, formData, config);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteMainService = createAsyncThunk('services/deleteMainService', async (serviceId, { rejectWithValue }) => {
  try {
    await axios.delete(`${baseurl}/api/services/deletemainservice/${serviceId}`);
    return serviceId;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getBlockedCompanies = createAsyncThunk('companies/getBlockedCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getCompaniesByStatus/5`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const restoreCompany = createAsyncThunk('companies/restoreCompany', async ({ formData, id }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/dashboard/updateCompanyStatus`, formData, config);
    response.data.id = id;
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const blockCompany = createAsyncThunk('companies/blockCompany', async ({ formData, id }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/dashboard/updateCompanyStatus`, formData, config);
    response.data.id = id;
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateCompanyStatus = createAsyncThunk('companies/status', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/dashboard/updateCompanyStatus`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getCompanyNames = createAsyncThunk('companies/companyNames', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getAllCompanyNames`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getSubscription = createAsyncThunk(
  'companies/getSubscription',
  async ({ id, company_type, is_branch }, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `${baseurl}/api/dashboard/getSubscription?id=${id}&company_type=${company_type}&is_branch=${is_branch}`,
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateSubscription = createAsyncThunk('companies/updateSubscription', async ({ formData, id }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/dashboard/updateSubscription/${id}`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getActiveSubscription = createAsyncThunk('companies/getActiveSubscription', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getActiveSubscription?page_no=1&page_size=5`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getPendingSubscription = createAsyncThunk('companies/getPendingSubscription', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getPendingSubscription?page_no=1&page_size=5`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
