import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; 

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const createSubCompany = async (data) => {
  const response = await axiosInstance.post('/api/dashboard/createSubCompany', data);
  return response.data;
};

export const deleteSubCompany = async (subCompanyId) => {
  const response = await axiosInstance.delete(`/api/dashboard/deleteSubCompany?sub_company_id=${subCompanyId}`);
  return response.data;
};

export const getSubCompanies = async (parentCompanyId, companyType, page = 1, limit = 10) => {
  const params = {
    parent_company_id: parentCompanyId,
    company_type: companyType,
    page,
    limit,
  };
  const queryString = new URLSearchParams(params).toString();
  const response = await axiosInstance.get(`/api/dashboard/getSubCompanies?${queryString}`);
  return response.data;
};

export const getSubCompany = async (subCompanyId, companyType) => {
  const response = await axiosInstance.get(`/api/dashboard/getSubCompany?sub_company_id=${subCompanyId}&company_type=${companyType}`);
  return response.data;
};
