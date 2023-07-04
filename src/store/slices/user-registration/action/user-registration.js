import { api } from 'utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const config = {
  headers: { 'Content-Type': 'multipart/form-data' }
};
const baseurl = 'http://20.203.31.58';

export const createUser = createAsyncThunk('user/signUp', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/user/register`, formData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const userLogIn = createAsyncThunk('user/Login', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/user/login`, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const createUserRole = createAsyncThunk('management/add_user', async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${baseurl}/api/user/createRole`, formData, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const getAllDepartments = createAsyncThunk('department/getAllDepartments', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/department/getAllDepartments`,  config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const getAllRoles = createAsyncThunk('user/getAllRoles', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${baseurl}/api/user/getAllRoles`,  config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});