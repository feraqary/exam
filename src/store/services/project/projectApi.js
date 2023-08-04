import { api } from '../api';

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //GET LOCAL Projects API

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
      }
    }),

    //GET ALL LOCAL PROJECTS API
    getLocalProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllLocalProjects?page_no=${pageIndex + 1}&page_size=${pageSize}&country=pakistan`,
          method: 'GET'
        };
      },
      providesTags: ['LocalProject']
    }),

    // GET ALL INTERNATIONAL PROJECTS API
    getInternationalProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        console.log(pagination);
        return {
          url: `dashboard/getAllIntProjects?page_no=${pageIndex + 1}&page_size=${pageSize}&country=united arab emirates`,
          method: 'GET'
        };
      }
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
        return {
          url: `dashboard/getAllBrokerCompanyByStateCity?id=${id}&is_state=${isState}`,
          method: 'GET'
        };
      }
    }),
    CreateProject: builder.mutation({
      query({ data, isMulti }) {
        console.log('xxxx', isMulti);
        return {
          url: `dashboard/createProject/${isMulti ? '0' : '1'}`,
          method: 'POST',
          body: data
        };
      }
    }),
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

    //updateproject
    updateProject: builder.mutation({
      query: (updateProject) => {
        return {
          url: `dashboard/updateProject/1`,
          method: 'PUT',
          body: updateProject
        };
      }
    }),
    //GET PROJECT BY ID
    getProject: builder.query({
      query(id) {
        return {
          url: `dashboard/getProject/${id}`,
          method: 'GET'
        };
      }
    }),
    //GET VIEW
    getView: builder.query({
      query() {
        return {
          url: `views/getAllViews?page_no=1&page_size=10`,
          method: 'GET'
        };
      }
    }),
    //GET VIEW
    getAllAmenities: builder.query({
      query() {
        return {
          url: `facilities/getAllAmenititesByCategory/1`,
          method: 'GET'
        };
      }
    })
  })
});

export const {
  useGetLocalProjectsQuery,
  useGetProjectQuery,
  useGetInternationalProjectsQuery,
  useUpdateProjectRankMutation,
  useGetProjectsByStatusQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectMutation,
  useGetPropertyTypeQuery,
  useGetSharedProjectsQuery,
  useGetProjectByIdQuery,
  useGetAllAmenitiesQuery,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useCreateProjectMutation,
  useGetViewQuery
  // useDeleteProjectMutation,
  // useGetProjectUpdateQuery
} = projectApi;
