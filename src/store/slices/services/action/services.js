// In dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const baseurl = 'http://localhost:8080';
// ... existing code

export const updateServices = createAsyncThunk('services/updateServices', async (dataToUpdate) => {
  try {
    const response = await fetch(`${baseurl}/api/services/updateservice/100`, {
      method: 'PUT',
      body: JSON.stringify(dataToUpdate),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    });

    if (response.ok) {
      const updatedData = await response.json();
      console.log(response.json())
      console.log(response.json());
      return updatedData;
    } else {
      throw new Error('Failed to update data');
    }
  } catch (error) {
    throw new Error('Error occurred while updating data');
  }
});
