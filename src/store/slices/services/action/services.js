// In dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const baseurl = 'http://20.203.31.58';

// ... existing code

export const updateService = createAsyncThunk('services/updateServices',     async ( serviceId,{  updatedData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseurl}/api/services/updateservice/${serviceId}`, updatedData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);


export const deleteService = createAsyncThunk(
  'services/deleteService',
  async (serviceId, { rejectWithValue }) => {
    try {
      await axios.delete(`${baseurl}/api/services/deleteservice/${serviceId}`);
      return serviceId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


