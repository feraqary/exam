// In dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateServices } from '../action/services';
import { toast } from 'react-toastify';




const initialState = {
    title: null,
    description: [],
    icon_url: [],
    image_url: [],
    loading: false,
    error: null
  };

const updateService = createSlice({
    name: 'companies',
    initialState,
  extraReducers: (builder) => {
    builder
      // get all company types=================================================================================================
      .addCase(updateServices.pending, (state) => {
        state.loading = true;
        state.title = '';
        state.error = null;
      })
      .addCase(updateServices.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companyTypes = action.payload.data;
        

      })
      .addCase(updateServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.title = '';
      });
  }
});

export const { updateData } = updateService.actions;
export default updateService.reducer;
