// subCompanyActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSubCompanies = createAsyncThunk(
  'subCompany/fetchSubCompanies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://20.203.31.58/api/dashboard/getSubCompanies',
        {
          params: {
            parent_company_id: 2,
            company_type: 3,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createSubCompany = createAsyncThunk(
  'subCompany/createSubCompany',
  async (subCompanyData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://20.203.31.58/api/dashboard/createSubCompany',
        subCompanyData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSubCompany = createAsyncThunk(
  'subCompany/deleteSubCompany',
  async (subCompanyId, { rejectWithValue }) => {
    try {
      await axios.delete(
        'http://20.203.31.58/api/dashboard/deleteSubCompany',
        {
          params: {
            sub_company_id: subCompanyId,
            company_type: 3,
          },
        }
      );
      return subCompanyId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
