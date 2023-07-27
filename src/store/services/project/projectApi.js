import { api } from '../api';

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //GET LOCAL Projects API
    getLocalProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllLocalProjects?page_no=${pageIndex + 1}&page_size=${pageSize}&country=pakistan`,
          method: 'GET'
        };
      },
      providesTags: ['LocalProjects']
    }),

    //GET International Projects API
    getInternationalProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllIntProjects?page_no=${pageIndex + 1}&page_size=${pageSize}&country=pakistan`,
          method: 'GET'
        };
      },
      providesTags: ['InternationalProjects']
    }),

    // GET ALL SHARED PROJECTS API
    getSharedProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllSharedProjects?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      },
      providesTags: ['SharedProjects']
    }),

    // GET ALL PROJECTS BY STATUS
    getProjectsByStatus: builder.query({
      query({ pagination, status }) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllProjectsByStatus?page_no=${pageIndex + 1}&page_size=${pageSize}&status_id=${status}`,
          method: 'GET'
        };
      },
      providesTags: ['ProjectStatus']
    }),

    //UPDATE Project STATUS API
    updateProjectStatus: builder.mutation({
      query(data) {
        return {
          url: `dashboard/updateProjectStatus`,
          method: 'PUT',
          body: data
        };
      },
      invalidatesTags: ['InternationalProjects', 'LocalProjects', 'ProjectStatus', 'SharedProjects']
    }),

    //UPDATE PROJECT RANK api
    updateProjectRank: builder.mutation({
      query(data) {
        return {
          url: `dashboard/updatePorjectRank`,
          method: 'PUT',
          body: data
        };
      },
      invalidatesTags: ['localProjects', 'InternationalProjects', 'SharedProjects']
    }),

    //updateproject
    updateProject: builder.mutation({
      query: (updateProject) => {
        const { formData, id } = data;
        return {
          url: ``,
          method: 'PATCH',
          body: updateProject
        };
      }
    })
  })
});

export const {
  useGetLocalProjectsQuery,
  useGetInternationalProjectsQuery,
  useGetProjectsByStatusQuery,
  useGetSharedProjectsQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectRankMutation
} = projectApi;
