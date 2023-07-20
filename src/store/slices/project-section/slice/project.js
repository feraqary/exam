import { ToastError, ToastLoading, ToastSuccess } from 'utils/toast';
import { createSlice } from '@reduxjs/toolkit';
import { deleteService } from 'store/slices/company-section/action/company';

const initialState = {
    localProjects:[],
    internationalProjects:[],
};

const slice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder;

    
  }
});


export default slice.reducer;

export const {} = slice.actions;