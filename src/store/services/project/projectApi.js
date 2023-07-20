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
    })
  })
});

export const { useGetAllIntProjectsQuery, useGetPropertyTypeQuery, useGetSharedProjectsQuery } = projectApi;
