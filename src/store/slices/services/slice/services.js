// In dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { updateService, deleteService, createServices } from '../action/services';






const initialState = {
    title: '',
    description: '',
    icon_url: '',
    image_url: '',
    loading: false,
    error: null
  };

const serviceUpdate = createSlice({
    name: 'companies',
    initialState,
  extraReducers: (builder) => {
    builder


    
      
  }
});

export const { updateData } = serviceUpdate.actions;
export default serviceUpdate.reducer;
