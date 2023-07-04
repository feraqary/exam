import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSubCompanies = createAsyncThunk(
  'subCompany/fetchSubCompanies',
  async (params) => {
    try {
      const response = await axios.get(
        `http://20.203.31.58/api/dashboard/getSubCompanies?parent_company_id=${params.parentCompanyId}&company_type=${params.companyType}`
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const createSubCompany = createAsyncThunk(
  'subCompany/createSubCompany',
  async (subCompanyData) => {
    try {
      const response = await axios.post(
        'http://20.203.31.58/api/dashboard/createSubCompany',
        subCompanyData
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const deleteSubCompany = createAsyncThunk(
  'subCompany/deleteSubCompany',
  async (subCompanyId) => {
    try {
      await axios.delete(
        `http://20.203.31.58/api/dashboard/deleteSubCompany?sub_company_id=${subCompanyId}&company_type=3`
      );
      return subCompanyId;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const getSubCompany = createAsyncThunk(
  'subCompany/getSubCompany',
  async (subCompanyId) => {
    try {
      const response = await axios.get(
        `http://20.203.31.58/api/dashboard/getSubCompany?sub_company_id=${subCompanyId}&company_type=3`
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
