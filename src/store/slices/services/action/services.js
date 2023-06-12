// In dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const baseurl = 'http://localhost:8080';

// ... existing code

export const updateService = createAsyncThunk('services/updateServices',     async ({  updatedData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/services/updateservice/100`, updatedData);
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


