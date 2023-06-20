// In dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getAllUserRoles } from '../action/users';

const initialState = {
    ID: null,
    Role: null,
    Code: null,
    loading: false,
    error: null,
    users: []
};

const userManagement = createSlice({
  name: 'users-management',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getAllUserRoles.pending, (state) => {
        state.loading = true;
        state.users = state.users;
        state.error = null;
      })
    .addCase(getAllUserRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = [...action.payload.data];
        console.log(action.payload.data);
      })
    .addCase(getAllUserRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.users = state.users;
      })


  }
});

export default userManagement.reducer;
