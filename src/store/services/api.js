import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const token =
  'v2.local.sH2RcwTB1iouvhnmNzh9FRik-0Z4fDtMUL5QCyaXVUgH25HUj-w2QC7-816J_MMJrWGDo1wVtau4CJuRRrMe0WbbpvU1V5UIOeTXipN00ePvDmteEwzQcLJQkig48BXcTNCKR2Zf23JVpU2e7VdJGVk6E3TwiQI4Vy8IvJiXkiLe19w_DCsvMteoY_-HrEdJaU0jP7ZOuFcWVTcHawQ7aKxJ9Ac8_xb19afvPbeFJ0ZJzpPbF6zy1E_w6gxphElzQz2FRIJoEYlB3Sc.bnVsbA';

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
    'Documents',
    'Promotions',
    'PropertyPlan'
  ],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({})
});
