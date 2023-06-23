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


      // get all company types=================================================================================================
      .addCase(updateService.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updateService.fulfilled, (state) => {
        state.updating = false;
        // Additional state updates if necessary
        state.title = action.payload.title;
        state.description = action.payload.description;
        state.icon_url = action.payload.icon_url;
        state.image_url = action.payload.image_url;
      })
      .addCase(updateService.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload;
      })

      .addCase(deleteService.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.deleting = false;
        // Perform any additional state updates if necessary
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      })


      .addCase(createServices.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(createServices.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.services = [...state.services, action.payload.data];
        state.error = null;
        // Perform any additional state updates if necessary
      })
      .addCase(createServices.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      });
      
  }
});

export const { updateData } = serviceUpdate.actions;
export default serviceUpdate.reducer;
