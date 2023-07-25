import { createApi, createSlice } from '@reduxjs/toolkit';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: '20.203.31.58' }),
  endpoints: (builder) => ({
    fetchDashboardData: builder.query({
      query: ({ id, company_type, is_branch }) => `dashboard/draftSubscription?id=${id}&company_type=${company_type}&is_branch=${is_branch}`
    })
  })
});

export const { useFetchDashboardDataQuery } = dashboardApi;

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(useFetchDashboardDataQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(useFetchDashboardDataQuery.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(useFetchDashboardDataQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { reducer } = dashboardSlice;
