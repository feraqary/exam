import { api } from 'utils/axios';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'v2.local.qFaCoB8jNaB0b6Boxn5J19MV8QTi656lRNWJSvp5_c_Ip9LIZ8H_vZBqRmaPDwe8NUxcwinVnPV2F6qEvjyMYxu87PrMSSgeeAqwtHWHEljqJFQBnTnlRq8XikJOGW5q1kGgK-Yp2DFphav3Y4RUuIclJqN21HbthpkPA5oEq1YZTW90Q0S6gYX-eLlv0tW_bftEgJy8NppWF4d4Xf-bV1EH_pqhvy_UNiBaFJ654PHGSTr8ATzmXZPzPt-g3cEmpeqZ_RAoB8uAJi7kyfI.bnVsbA';
const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`
  }
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

export const getCompanyDocs = createAsyncThunk('company/getCompanyDocs', async ({ companyType, id }, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getCompanyDoc?company_type=${companyType}&id=${id}`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.error);
  }
});

export const getInternationalCompanies = createAsyncThunk('company/getInternationalCompanies', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getInternationalCompanies?page_no=1&page_size=100&country=pakistan`, config);
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
    const response = await api.get(`${baseurl}/api/dashboard/getCompaniesByRank/2`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
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

export const createServices = createAsyncThunk('services/createServices', async ({ formData }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${baseurl}/api/services/updatemainservice/${id}`, formData, config);
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
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

export const deleteMainService = createAsyncThunk('services/deleteMainService', async (serviceId, { rejectWithValue }) => {
  try {
    await axios.delete(`${baseurl}/api/services/deletemainservice/${serviceId}`);
    return serviceId;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getCompanyByStatus = createAsyncThunk('company/status', async (status, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getCompaniesByStatus/${status}`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
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
export const updateCompanyDoc = createAsyncThunk('companies/docUpdate', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/dashboard/updateCompanyDoc`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateCompany = createAsyncThunk('companies/update_company', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/dashboard/updateCompany`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
