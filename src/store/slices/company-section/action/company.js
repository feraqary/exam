import { api } from 'utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'v2.local.vXWFgWR_d-uUdQHOh5JeS8FfXcKprUHqBYSL_n1c_xCIUCmPl_lUhkHicqcFJjt2SYrEk9cakXAn76mH6kglDaj30QDeiLHWZgJzYXYKmTvUX583Rd5bxsLLgSIdD_Q7nGAZIWpuT5FHkCRp-0zP8nZY4VWbBn2YAeNIwLMyDaKQbQc09MQQX6PSPl8Vn5Pss8BKcrII_IBZA0AKNEMPvxYJkfB4UfoL-1XkryhNzLp2e_ky8TezxzyLEQf7tw7qMf5jpuL_VtjprIiQLL8.bnVsbA';
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

export const getCompanyByStatus = createAsyncThunk('company/status', async (status, { rejectWithValue }) => {
  try {
    console.log(status);
    const response = await api.get(`${baseurl}/api/dashboard/getCompaniesByStatus/${status}`, config);
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
export const updateCompanyDoc = createAsyncThunk('companies/docUpdate', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/dashboard/updateCompanyDoc`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const updateCompanyStatus = createAsyncThunk('companies/StatusStatus', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/dashboard/updateCompanyStatus`, formData, config);
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
    const response = await api.get(`${baseurl}/api/dashboard/getActiveSubscription?page_no=1&page_size=5`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getPendingSubscription = createAsyncThunk('companies/getPendingSubscription', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getPendingSubscription?page_no=1&page_size=35`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getCompanyType = createAsyncThunk('companies/getCompanyType', async (id, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/services/getCompanyType/${id}`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getAllDeveloperCompany = createAsyncThunk('companies/getDeveloperCompany', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getAllDeveloperCompany`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getSubDevCompany = createAsyncThunk(
  'companies/getSubDeveloperCompany',
  async ({ parentCompanyId, companyType }, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `${baseurl}/api/dashboard/getSubCompanies?parent_company_id=${parentCompanyId}&company_type=${companyType}`,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPropertyTypes = createAsyncThunk('projects/getPropertyTypes', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/propertyTypes/getAllPropertyTypes/1`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getCompanyByType = createAsyncThunk('company/getCompanyByType', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/dashboard/getAllCompanyNames/1`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getFacilities = createAsyncThunk('projects/getFacilities', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/facilities/getAllFacilities/1`, config);
    return response.data;

  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const createProject = createAsyncThunk('project/AddProject', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/dashboard/createCompany`, formData, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
