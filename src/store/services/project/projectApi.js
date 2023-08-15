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

    getProjectById: builder.query({
      query(ProjectId) {
        return {
          url: `dashboard/getProject/${ProjectId}`,
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
    }),

    // GET ALL SHARED PROJECTS API
    getRatings: builder.query({
      query({ pageIndex, pageSize, id }) {
        return {
          url: `dashboard/getAllReviewsByProject?page_no=${pageIndex}&page_size=${pageSize}&project_id=${1}`,
          method: 'GET'
        };
      }
    }),
    // GET PROJECTS DOCUMENTS API
    getDocsByProjectId: builder.query({
      query({ pageIndex, pageSize, id }) {
        return {
          url: `dashboard/getAllDocsByProject?project_id=${1}&page_no=${pageIndex}&page_size=${pageSize}`,
          method: 'GET'
        };
      }
    }),
    // GET DOCUMENT CATEGORIES API
    getDocsCategories: builder.query({
      query() {
        return {
          url: `docscategory/getAllDocCategories?page_no=1&page_size=100`,
          method: 'GET'
        };
      }
    }),
// Get Promotions API
getPromotions: builder.query({ 
  query({ pageIndex, pageSize,id}) {
    return { 
      url: `dashboard/getAllProjectPromotions?page_no=${pageIndex}&page_size=${pageSize}`,
      method: 'GET'
    };
  }
}),
//Create Promotions 
createPromotions : builder.mutation ({
  query(data) {
    return {
      url: `dashboard/createProjectPromotion`,
      method: 'POST',
      body: data
    };
  }

}),
     //Create Projects API
    CreateProject: builder.mutation({
      query({ data, isMulti }) {
        return {
          url: `dashboard/createProject/${isMulti ? '0' : '1'}`,
          method: 'POST',
          body: data
        };
      }
    }),

    //CREATE DOCS CATEGORY
    CreateCategory: builder.mutation({
      query(data) {
        return {
          url: `docscategory/createDocCategory`,
          method: 'POST',
          body: data
        };
      },
      invalidatesTags: ['DocumentsCategory']
    }),
    //CREATE DOCS SUB CATEGORY
    CreateSubCategory: builder.mutation({
      query(data) {
        return {
          url: `docscategory/createDocSubCategory`,
          method: 'POST',
          body: data
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

    //GET ALL DOCUMENT CATEGORIES
    getAllDocCategories: builder.query({
      query() {
        return {
          url: `docscategory/getAllDocCategories`,
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

    //updateproject
    updateProject: builder.mutation({
      query: ({ data, isMulti }) => {
        return {
          url: `dashboard/updateProject/${isMulti ? '0' : '1'}`,
          method: 'PUT',
          body: data
        };
      }
    }),

    //UPDATE PROJECTS VERIFY STATUS
    updateProjectsVerifyStatus: builder.mutation({
      query(submit) {
        return {
          url: `dashboard/updatePorjectVerifyStatus`,
          method: 'PUT',
          body: submit
        };
      },
      invalidatesTags: ['LocalProjects', 'InternationalProjects', 'SharedProjects']
    }),
    //UPDATE PROJECTS
    updateProjectsIsEnabled: builder.mutation({
      query(submit) {
        return {
          url: `dashboard/updateProjectIsEnable`,
          method: 'PUT',
          body: submit
        };
      }
    })
  })
});

export const {
  useGetDocsCategoriesQuery,
  useCreateCategoryMutation,
  useCreateSubCategoryMutation,
  useGetDocsByProjectIdQuery,
  useUpdateProjectsIsEnabledMutation,
  useGetLocalProjectsQuery,
  useGetProjectQuery,
  useGetInternationalProjectsQuery,
  useUpdateProjectsVerifyStatusMutation,
  useGetDocByProjectIdQuery,
  useGetAllDocCategoriesQuery,
  useGetSubCategoryByIdQuery,
  useGetPropertyByProjectIdQuery,
  useCreateProjectDocMutation,
  useGetProjectsByStatusQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectRankMutation,
  useUpdateProjectMutation,
  useGetPropertyTypeQuery,
  useGetSharedProjectsQuery,
  useGetProjectByIdQuery,
  useGetAllAmenitiesQuery,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useCreateProjectMutation,
  useGetViewQuery,
  useGetRatingsQuery,
  useCreatePromotionsMutation,
  useGetPromotionsQuery
} = projectApi;
