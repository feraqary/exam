import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }), // Set your live domain URL here
  endpoints: (builder) => ({
    createSubCompany: builder.mutation({
      query: (data) => ({
        url: '/api/dashboard/createSubCompany',
        method: 'POST',
        body: data,
      }),
    }),
    deleteSubCompany: builder.mutation({
      query: (subCompanyId) => ({
        url: `/api/dashboard/deleteSubCompany?sub_company_id=${subCompanyId}`,
        method: 'DELETE',
      }),
    }),
    getSubCompanies: builder.query({
      query: ({ parentCompanyId, companyType, page, limit }) => ({
        url: '/api/dashboard/getSubCompanies',
        params: { parent_company_id: parentCompanyId, company_type: companyType, page, limit },
      }),
    }),
    getSubCompany: builder.query({
      query: ({ subCompanyId, companyType }) => ({
        url: '/api/dashboard/getSubCompany',
        params: { sub_company_id: subCompanyId, company_type: companyType },
      }),
    }),
  }),
});

export const {
  useCreateSubCompanyMutation,
  useDeleteSubCompanyMutation,
  useGetSubCompaniesQuery,
  useGetSubCompanyQuery,
} = api;
