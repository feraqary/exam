import { api } from '../api';

export const companyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //CREATE COMPANY TYPE API
    createSubCompanyType: builder.mutation({
      query(formData) {
        return {
          url: 'services/createCompanyType',
          method: 'POST',
          body: formData
        };
      },
      invalidatesTags: ['subCompanies']
    }),

    //CREATE COMPANY API
    createCompany: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/createCompany`,
          method: 'POST',
          body: formData
        };
      },
      invalidatesTags: ['LocalCompanies', 'InternationalCompanies']
    }),

    //CREATE COMPANY BRANCH API FROM A COMPANY API
    createCompanyBranch: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/createSubCompany`,
          method: 'POST',
          body: formData
        };
      },
      invalidatesTags: ['LocalCompanies', 'InternationalCompanies']
    }),

    //GET SUB COMPANY TYPES BASED ON COMPANY TYPE API
    getSubCompanyTypesByCompanyType: builder.query({
      query(id) {
        return {
          url: `services/getAllCompanyTypesByType/${id}`,
          method: 'GET'
        };
      },
      providesTags: ['subCompanies']
    }),

    //GET SUB COMPANY
    getSubCompanyType: builder.query({
      query(id) {
        return {
          url: `services/getCompanyType/${id}`,
          method: 'GET'
        };
      }
    }),

    //GET ALL COMPANY TYPES API

    getAllSubCompanyTypes: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `services/getAllCompanyTypes?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      },
      providesTags: ['subCompanies']
    }),
    //GET LOCAL COMPANIES API
    getLocalCompanies: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getLocalCompanies?page_no=${pageIndex + 1}&page_size=${pageSize}&country=united arab emirates`,
          method: 'GET'
        };
      },
      providesTags: ['LocalCompanies']
    }),

    //GET INTERNATIONAL COMPANIES API
    getInternationalCompanies: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getInternationalCompanies?page_no=${pageIndex + 1}&page_size=${pageSize}&country=united arab emirates`,
          method: 'GET'
        };
      },
      providesTags: ['InternationalCompanies']
    }),

    // GET A SINGLE COMPANY API
    getCompany: builder.query({
      query(data) {
        const { id, is_branch, company_type } = data;
        return {
          url: `dashboard/getCompany?id=${id}&company_type=${company_type}&is_branch=${is_branch}`,
          method: 'GET'
        };
      }
    }),
    //generate draft
    getallDraftSubscriptions: builder.query({
      query(data) {
        const { id, is_branch, company_type } = data;
        return {
          url: `dashboard/draftSubscription?id=${id}&company_type=${company_type}&is_branch=${is_branch}`,
          method: 'GET'
        };
      }
    }),

    //GET COMPANIES BY RANK API
    getCompaniesByRank: builder.query({
      query({ rank, pagination }) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getCompaniesByRank/${rank}?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      },
      providesTags: ['CompaniesByRank']
    }),
    //GET DRAFT SUBSCRIPTIONS
    getDraftContract: builder.query({
      query({ data }) {
        const { id, company_type, is_branch } = data;
        return {
          url: `dashboard/draftSubscription?id=${id}&company_type=${company_type}&is_branch=${is_branch}`,
          method: 'GET'
        };
      }
    }),

    //GET COMPANIES BY STATUS API
    getCompaniesByStatus: builder.query({
      query({ status, pagination }) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getCompaniesByStatus/${status}?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      },
      providesTags: ['CompaniesByStatus']
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
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getActiveSubscription?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      }
    }),

    //GET PENDING SUBSCRIPTIONS API
    getPendingSubscriptions: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getPendingSubscription?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      }
    }),

    //UPDATE COMPANY TYPE API
    updateSubCompanyType: builder.mutation({
      query(data) {
        const { id, formData } = data;
        return {
          url: `services/updateCompanyType/${id}`,
          method: 'PUT',
          body: formData
        };
      },
      invalidatesTags: ['subCompanies', 'InternationalCompanies', 'LocalCompanies']
    }),

    //UPDATE COMPANY RANK API
    updateCompanyRank: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updateCompanyRank`,
          method: 'PUT',
          body: formData
        };
      },
      invalidatesTags: ['CompaniesByRank', 'InternationalCompanies', 'LocalCompanies']
    }),

    //UPDATE COMPANY STATUS API
    updateCompanyStatus: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updateCompanyStatus`,
          method: 'PUT',
          body: formData
        };
      },
      invalidatesTags: ['CompaniesByStatus', 'InternationalCompanies', 'LocalCompanies']
    }),

    //UPDATE COMPANY API
    updateCompany: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updateCompany`,
          method: 'PUT',
          body: formData
        };
      },
      invalidatesTags: ['LocalCompanies', 'InternationalCompanies', 'CompaniesByStatus', 'CompaniesByRank']
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
    }),

    //DELETE SUB COMPANY TYPE API
    deleteSubCompanyType: builder.mutation({
      query(id) {
        return {
          url: `services/deleteCompanyType/${id}`,
          method: 'DELETE'
        };
      }
    }),

    //GET SUB COMPANY TYPE RELATIVE TO THE DEVELOPER
    getSubCompanyAccordingToParent: builder.query({
      query(parentCompanyId) {
        return {
          url: `dashboard/getSubCompanies?parent_company_id=${parentCompanyId}&company_type=2`,
          method: 'GET'
        };
      }
    }),

    //GET SUB COMPANY TYPE RELATIVE TO THE DEVELOPER
    getDeveloperCompany: builder.query({
      query(_) {
        return {
          url: `dashboard/getAllDeveloperCompany`,
          method: 'GET'
        };
      }
    })
  })
});

export const {
  useGetDeveloperCompanyQuery,
  useGetSubCompanyAccordingToParentQuery,
  useCreateCompanyMutation,
  useCreateSubCompanyTypeMutation,
  useCreateCompanyBranchMutation,
  useGetActiveSubscriptionsQuery,
  useGetCompaniesByRankQuery,
  useGetCompaniesByStatusQuery,
  useGetCompanyDocsQuery,
  useGetInternationalCompaniesQuery,
  useGetLocalCompaniesQuery,
  useGetPendingSubscriptionsQuery,
  useGetSubCompanyTypesByCompanyTypeQuery,
  useGetSubCompanyTypeQuery,
  useGetAllSubCompanyTypesQuery,
  useGetCompanyQuery,
  useUpdateCompanyDocMutation,
  useUpdateCompanyRankMutation,
  useUpdateCompanyStatusMutation,
  useUpdateSubscriptionMutation,
  useUpdateSubCompanyTypeMutation,
  useUpdateCompanyMutation,
  useDeleteSubCompanyTypeMutation
} = companyApi;
