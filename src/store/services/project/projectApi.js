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
    getPropertyType: builder.query({
      query() {
        return {
          url: `propertyTypes/getPropertyTypes`,
          method: 'GET'
        };
      }
    }),
    //update Project
    getProjectUpdate: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updateProject/1`,
          method: 'GET',
          body: formData
        };
      },
      invalidatesTags: ['localProjects', 'internationalProjects']
    }),
    //Update Projects by Rank API
    updateProjectRank: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/updatePorjectRank`,
          method: 'PUT',
          body: formData
        };
      },
      invalidatesTags: ['ProjectsByRank', 'InternationalProjects', 'LocalProjects']
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

    // GET ALL INTERNATIONAL PROJECTS API
    getInternationalProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllIntProjects?page_no=${pageIndex + 1}&page_size=${pageSize}&country=united arab emirates`,
          method: 'GET'
        };
      },
      providesTags: ['InternationalProjects']
    }),
    getProjectById: builder.query({
      query(ProjectId) {
        return {
          url: `dashboard/getProject/${ProjectId}`,
          method: 'GET'
        };
      }
    }),
    getAllfacilities: builder.query({
      query(_) {
        return {
          url: `facilities/getAllFacilitiesByCategory/1`,
          method: 'GET'
        };
      }
    }),
    getBrokerCompaniesByCities: builder.query({
      query({ id, isState }) {
        console.log('is, isstate', id, isState);
        return {
          url: `dashboard/getAllBrokerCompanyByStateCity?id=${id}&is_state=${isState}`,
          method: 'GET'
        };
      }
    }),
    CreateProject: builder.mutation({
      query(data) {
        return {
          url: `dashboard/createProject/1`,
          method: 'POST',
          body: data
        };
      }
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
  useUpdateProjectRankMutation,
  useGetProjectUpdateQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetPropertyTypeQuery,
  useGetProjectByIdQuery,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useCreateProjectMutation
} = projectApi;
