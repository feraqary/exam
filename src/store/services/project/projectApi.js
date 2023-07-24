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
    //UPDATE Project STATUS API
    updateProjectStatus: builder.mutation({
      query(formData) {
        return {
          url: `dashboard/getAllProjectsByStatus`,
          method: 'PUT',
          body: formData
        };
      },
      invalidatesTags: ['ProjectByStatus', 'InternationalProjects', 'LocalProjects']
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
    
    deleteSubCompanyType: builder.mutation({
      query(id) {
        return {
          url: `Type/${id}`,
          method: 'DELETE'
        };
      }
    })
  })
});

export const { useGetLocalProjectsQuery, 
  useGetInternationalProjectsQuery,
  useUpdateProjectStatusMutation 

} = projectApi;
