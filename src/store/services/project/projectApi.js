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
      providesTags: ['LocalProjects']
    }),
    //GET International Projects API
    getInternationalProjects: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `dashboard/getAllIntProjects?page_no=${pageIndex + 1}&page_size=${pageSize}&country=united arab emirates`,
          method: 'GET'
        };
      },
      providesTags: ['InternationalProject']
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
      invalidatesTags: ['localProjects' , 'internationalProjects']
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
      invalidatesTags: ['ProjectStatus', 'InternationalProjects', 'LocalProjects']
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
    }),

    // create/add promotions mutation

    createPromotions: builder.mutation({
      query({ pagination, status }) {
        const { pageIndex, pageSize } = pagination;
        return{
          url: `dashboard/createProjectPromotion`,
          method: 'POST',
          body: createPromotions
        };
    },
    invalidatesTags: ['CreatePromotions']
  })
}),
});
export const {
  useGetLocalProjectsQuery,
  useGetInternationalProjectsQuery,
  useGetProjectUpdateQuery,
  useUpdateProjectRankMutation,
  useGetProjectsByStatusQuery,
  useGetSharedProjectsQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectMutation,
  useCreatePromotionsMutation

} = projectApi;
