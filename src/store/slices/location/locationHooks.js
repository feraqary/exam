import { createListenerMiddleware } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { applyMiddleware } from 'redux';

const locationApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://20.203.31.58/api/country',
    // axios: axios.create(),
    middleware: applyMiddleware(createListenerMiddleware())
  }),
  cache: {
    enabled: true,
    ttl: 10
  },
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ({
        url: '/getallcountries'
      }),
      async onQueryStarted(arg, { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData }) {},
      // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData }
      ) {}
    }),
    stateByCountry: builder.mutation({
      query: ({ country_id }) => ({
        url: `/getstatesbycountry/${country_id}`,
        method: 'GET'
      })
    })
  })
});

export default locationApi;
// export { middleware };
