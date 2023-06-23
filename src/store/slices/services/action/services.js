// In dataSlice.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token =
  'v2.local.5Y_Uhdj_pMf333G2uvCFzBy8Ddg4fAs3qqHGoeKw2Euv3_ni9gtnf0P6_n_f-G_8tiUwUxCSrPEecVxpOFDvzxDvwbHhChHQcZd6_fkpaOMQ2GpIb3rTwM3giRJ1gMbhd8Q6XqXZRbFF271NZd_n5XLmsRu7Vd4iMKlnzWt-GSy5M-6YutivP4lIvigvEUWlQB7rviogx0kUGDHDHiiAOFZXQbmIE0wBrTiHASH64_qtkcgSXgcBq-A6DOdzuRZ8KDR6J1upzoe5bMgrdFdFv1Q.bnVsbA';
const config = {
  headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
};

const baseurl = 'http://20.203.31.58';

// ... existing code


export const updateService = createAsyncThunk('services/updateServices',     async ( serviceId,{  updatedData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/services/updateservice/${serviceId}`, updatedData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
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

