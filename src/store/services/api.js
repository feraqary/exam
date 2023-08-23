import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const token =
  'v2.local.CxXZTpbKEhPbmz_lvjed10kdseGZhDLBqLBm1FSoB_94HiP0Fy-WCsJ5tz1Vcms-MF1koLUwD6xJ_c3LrDV1694UFmAzNDYqjn5S3V-C5IvU5niG_mK8PpJHy0vetDoGMCZfSP9858S16MvUrr5Slead9U0EqqNP14_IIqUfSc51Foxn7SUv3FAy-Nh74TC9vrxepeK2i6MI4S78h6Ix4lLktmODD0IsM36f1EhO9UD5ApZpMOQl_NjB16HQw9Omk0p1PZsyWsoKNJuv7A.bnVsbA';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://20.203.31.58/api/',
  credentials: 'same-origin',

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
    'SharedProjects',
    'ProjectDocuments'
  ],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({})
});
