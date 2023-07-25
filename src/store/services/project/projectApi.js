import { api } from '../api';

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //GET LOCAL Projects API
    getLocalProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllLocalProjects?page_no=${pageIndex + 1}&page_size=${pageSize}&country=united arab emirates`,
          method: 'GET'
        };
      },
      providesTags: ['LocalProject']
    }),

    /*  // GET ALL PROJECTS API
     getAllIntProjects: builder.query({
      query(_) {
        return {
          url: `dashboard/getAllIntProjects?page_no=1&page_size=20&country=pakistan`,
          method: 'GET'
        };
      }
    }),
    getPropertyType: builder.query({
      query(_) {
        return {
          url: `propertyTypes/getPropertyTypes`,
          method: 'GET'
        };
      }
    }),
    */

    // GET ALL PROJECTS BY STATUS
    getProjectsByStatus: builder.query({
      query({ pagination, status }) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllProjectsByStatus?page_no=${pageIndex + 1}&page_size=${pageSize}&status_id=${status}`,
          method: 'GET'
        };
      },
      providesTags: ['projectStatus']
    }),

    // GET ALL SHARED PROJECTS API
    getSharedProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllSharedProjects?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      }
    }),

    //UPDATE Project STATUS API
    updateProjectStatus: builder.mutation({
      query(data) {
        return {
          url: `dashboard/getAllProjectsByStatus`,
          method: 'PUT',
          body: data
        };
      },
      invalidatesTags: ['projectStatus']
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
      invalidatesTags: ['localProjects']
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
  useGetProjectsByStatusQuery,
  useUpdateProjectStatusMutation,
  useGetSharedProjectsQuery,
  useUpdateProjectRankMutation
} = projectApi;
