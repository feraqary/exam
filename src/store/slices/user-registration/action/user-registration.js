import { api } from 'utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const config = {
  headers: { 'Content-Type': 'multipart/form-data' }
};
const baseurl = 'http://20.203.31.58'


export const createUser = createAsyncThunk('company/createCompanyType', async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post(`${baseurl}/api/user/register`, formData, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  