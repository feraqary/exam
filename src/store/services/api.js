import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const token =
  'v2.local.FGe3TJuNPmwCsHUYXFC4c4_DvuJGQNDDz2mTa1TiXoOY59Q4Fih7uR_i9_y_h_AdwBHSAtWv4XcfjkILYcWUWIvx0r4_4BNEs6nCo1UhOf4E9mG3OWG-I205MlamJN4FrqcgFtK7NZ3q9D5u4BupSRYl9HOKawtmXtRBUa37n42arOF7B-PQX8klRmFlq0RvJPGJMeAS7MHEo2iDpr6ChDLuIh6DYmxpNeIh_1o-pFeaniWy2cTvboU33auW057uxez8TWiRgYT6v6eZMg.bnVsbA';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://20.203.31.58/api/',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests

    headers.set('Authorization', `Bearer ${token}`);
    // headers.set('Content-Type', 'multipart/form-data');

    return headers;
  }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: [
    'LocalCompanies',
    'InternationalCompanies',
    'CompaniesByStatus',
    'CompaniesByRank',
    'subCompanies',
    'ProjectStatus',
    'LocalProjects',
    'InternationalProjects',
    'SharedProjects'
  ],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({})
});
