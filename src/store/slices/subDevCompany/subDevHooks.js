// subCompanyApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const subCompanyApi = createApi({
  reducerPath: 'subCompanyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://20.203.31.58/api/dashboard' }),
  endpoints: (builder) => ({
    getSubCompanies: builder.query({
      query: ({ parentCompanyId, companyType }) => ({
        url: '/getSubCompanies',
        params: {
          parent_company_id: parentCompanyId,
          company_type: companyType,
        },
      }),
    }),
    createSubCompany: builder.mutation({
      query: (subCompanyData) => ({
        url: '/createSubCompany',
        method: 'POST',
        body: subCompanyData,
      }),
    }),
    deleteSubCompany: builder.mutation({
      query: ({ subCompanyId, companyType }) => ({
        url: '/deleteSubCompany',
        method: 'DELETE',
        params: {
          sub_company_id: subCompanyId,
          company_type: companyType,
        },
      }),
    }),
  }),
});

export const {
  useGetSubCompaniesQuery,
  useCreateSubCompanyMutation,
  useDeleteSubCompanyMutation,
} = subCompanyApi;
