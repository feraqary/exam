import { api } from '../api';

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // GET ALL PROJECTS API
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
    getSharedProjects: builder.query({
      query(_) {
        return {
          url: `dashboard/getAllSharedProjects`,
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
    })
  })
});

export const {
  useGetAllIntProjectsQuery,
  useGetPropertyTypeQuery,
  useGetSharedProjectsQuery,
  useGetProjectByIdQuery,
  useGetAllfacilitiesQuery,
  useGetBrokerCompaniesByCitiesQuery,
  useCreateProjectMutation
} = projectApi;
