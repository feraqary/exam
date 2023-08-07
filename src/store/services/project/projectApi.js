import { api } from '../api';

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //CREATE PROJECT DOCUMENT API
    createProjectDoc: builder.mutation({
      query(formData) {
        return {
          url: `api/dashboard/createProjectDoc`,
          method: 'POST',
          body: formData
        };
      }
    }),

    //CREATE PROJECT API
    CreateProject: builder.mutation({
      query(data) {
        return {
          url: `dashboard/createProject/1`,
          method: 'POST',
          body: data
        };
      }
    }),

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

    //GET PROJECTS BY ID API
    getProjectById: builder.query({
      query(ProjectId) {
        return {
          url: `dashboard/getProject/${ProjectId}`,
          method: 'GET'
        };
      }
    }),

    //GET ALL FACILITIES API
    getAllfacilities: builder.query({
      query(_) {
        return {
          url: `facilities/getAllFacilitiesByCategory/1`,
          method: 'GET'
        };
      }
    }),

    //GET BROKER COMPANIES BY CITY API
    getBrokerCompaniesByCities: builder.query({
      query({ id, isState }) {
        console.log('is, isstate', id, isState);
        return {
          url: `dashboard/getAllBrokerCompanyByStateCity?id=${id}&is_state=${isState}`,
          method: 'GET'
        };
      }
    }),

    //GET ALL DOCUMENT CATEGORIES
    getAllDocCategories: builder.query({
      query() {
        return {
          url: `docscategory/getAllDocCategories`,
          method: 'GET'
        };
      }
    }),

    //GET ALL DOCUMENT SUBCATEGORY BY CATEGORY ID API
    getSubCategoryById: builder.query({
      query(categoryId) {
        return {
          url: `docscategory/getAllSubCategoriesByCategory/${categoryId}`,
          method: 'GET'
        };
      }
    }),

    //GET DOCS BY PROJECT ID API
    getDocByProjectId: builder.query({
      query({ pagination, project_id }) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllDocsByProject?project_id=${project_id}&page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      }
    }),

    //GET PROPERTY TYP
    getPropertyType: builder.query({
      query() {
        return {
          url: `propertyTypes/getPropertyTypes`,
          method: 'GET'
        };
      }
    }),

    //GET PROPERTIES BY PROJECT ID API
    getPropertyByProjectId: builder.query({
      query({ project_id, pagination }) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllProjectPropertiesByProject?project_id=${project_id}&page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
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
    //UPDATE PROJECT API
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
  useGetDocByProjectIdQuery,
  useGetAllDocCategoriesQuery,
  useGetSubCategoryByIdQuery,
  useGetProjectByIdQuery,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useGetProjectUpdateQuery,
  useGetPropertyTypeQuery,
  useGetPropertyByProjectIdQuery,
  useCreateProjectMutation,
  useCreateProjectDocMutation,
  useUpdateProjectStatusMutation,
  useUpdateProjectRankMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation
} = projectApi;
