import { api } from '../api';

export const projectApi  = api.injectEndpoints({
    endpoint: (builder) => ({
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
  })

    })
});

export const {
    useGetLocalProjectQuery

}
= projectApi;
   