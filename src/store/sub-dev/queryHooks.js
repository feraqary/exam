import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    createSubCompany: builder.mutation({
      query: (data) => ({
        url: '/dashboard/createSubCompany',
        method: 'POST',
        body: data,
      }),
    }),
    getSubCompanies: builder.query({
      query: ({ parentCompanyId, companyType, page = 1, pageSize = 10 }) => ({
        url: `/dashboard/getSubCompanies`,
        params: { parent_company_id: parentCompanyId, company_type: companyType, page, pageSize },
      }),
    }),
    deleteSubCompany: builder.mutation({
      query: (subCompanyId) => ({
        url: `/dashboard/deleteSubCompany`,
        method: 'DELETE',
        params: { sub_company_id: subCompanyId },
      }),
    }),
    getSubCompany: builder.query({
      query: ({ subCompanyId, companyType }) => ({
        url: `/dashboard/getSubCompany`,
        params: { sub_company_id: subCompanyId, company_type: companyType },
      }),
    }),
  }),
});

export const { useCreateSubCompanyMutation, useGetSubCompaniesQuery, useDeleteSubCompanyMutation, useGetSubCompanyQuery } =
  api;
