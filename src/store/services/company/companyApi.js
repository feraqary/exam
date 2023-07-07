import { api } from '../api';

export const companyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //CREATE COMPANY TYPE API
    createCompanyType: builder.mutation({
      query(formData) {
        return {
          url: 'services/createCompanyType',
          method: 'POST',
          body: formData
        };
      }
    }),

    //CREATE COMPANY API
    createCompany: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/createCompany`,
          method: 'POST',
          body: formData
        };
      }
    }),

    //GET LOCAL COMPANIES API
    getLocalCompanies: builder.query({
      query(_) {
        return {
          url: `dashboard/getLocalCompanies?page_no=1&page_size=10&country=united arab emirates`,
          method: 'GET'
        };
      }
    }),

    //GET INTERNATIONAL COMPANIES API
    getInternationalCompanies: builder.query({
      query(_) {
        return {
          url: `dashboard/getInternationalCompanies?page_no=1&page_size=100&country=pakistan`,
          method: 'GET'
        };
      }
    }),

    //GET COMPANIES BY RANK API
    getCompaniesByRank: builder.query({
      query(rank) {
        return {
          url: `dashboard/getCompaniesByRank${rank}`,
          method: 'GET'
        };
      }
    }),

    //GET COMPANIES BY STATUS API
    getCompaniesByStatus: builder.query({
      query(status) {
        return {
          url: `dashboard/getCompaniesByStatus${status}`,
          method: 'GET'
        };
      }
    }),

    //GET COMPANY DOCS API
    getCompanyDocs: builder.query({
      query(data) {
        const { companyType, id } = data;
        return {
          url: `dashboard/getCompanyDoc?company_type=${companyType}&id=${id}`,
          method: 'GET'
        };
      }
    }),

    //GET ACTIVE SUBSCRIPTIONS API
    getActiveSubscriptions: builder.query({
      query(_) {
        return {
          url: `dashboard/getActiveSubscription?page_no=1&page_size=5`,
          method: 'GET'
        };
      }
    }),

    //GET PENDING SUBSCRIPTIONS API
    getPendingSubscriptions: builder.query({
      query(_) {
        return {
          url: `dashboard/getPendingSubscription?page_no=1&page_size=35`,
          method: 'GET'
        };
      }
    }),

    //UPDATE COMPANY RANK API
    updateCompanyRank: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updateCompanyRank`,
          method: 'PUT',
          body: formData
        };
      }
    }),

    //UPDATE COMPANY STATUS API
    updateCompanyStatus: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updateCompanyStatus`,
          method: 'PUT',
          body: formData
        };
      }
    }),

    //UPDATE COMPANY DOC API
    updateCompanyDoc: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updateCompanyDoc`,
          method: 'PUT',
          body: formData
        };
      }
    }),

    //UPDATE COMPANY SUBSCRIPTION API
    updateSubscription: builder.mutation({
      query(data) {
        const { formData, id } = data;
        return {
          url: `dashboard/updateSubscription/${id}`,
          method: 'PUT',
          body: formData
        };
      }
    })
  })
});

export const {
  useCreateCompanyMutation,
  useCreateCompanyTypeMutation,
  useGetActiveSubscriptionsQuery,
  useGetCompaniesByRankQuery,
  useGetCompaniesByStatusQuery,
  useGetCompanyDocsQuery,
  useGetInternationalCompaniesQuery,
  useGetLocalCompaniesQuery,
  useGetPendingSubscriptionsQuery,
  useUpdateCompanyDocMutation,
  useUpdateCompanyRankMutation,
  useUpdateCompanyStatusMutation,
  useUpdateSubscriptionMutation
} = companyApi;
