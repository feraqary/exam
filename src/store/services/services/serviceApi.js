import { api } from '../api';

export const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //CREATE MAIN SERVICE API
    createMainService: builder.mutation({
      query(formData) {
        return {
          url: 'services/createmainservices',
          method: 'POST',
          body: formData
        };
      }
    }),

    //CREATE SERVICE API
    createService: builder.mutation({
      query(formData) {
        return {
          url: 'services/createservices',
          method: 'POST',
          body: formData
        };
      }
    }),

    // GET ALL SUB COMPANY TYPES WITHOUT PAGINATION API
    getSubCompanyTypesWithoutPagination: builder.query({
      query() {
        return {
          url: `services/getAllCompanyTypesWithoutPagination`,
          method: 'GET'
        };
      }
    }),

    // GET ALL MAIN SERVICES WITHOUT PAGINATION API
    getAllMainServicesWithoutPagination: builder.query({
      query() {
        return {
          url: `services/getallmainservicesWithoutPagination`,
          method: 'GET'
        };
      }
    }),
    // GET ALL  SERVICES WITHOUT PAGINATION API
    getAllServicesWithPagination: builder.query({
      query() {
        return {
          url: `services/getallservicesWithoutPagination`,
          method: 'GET'
        };
      }
    }),

    //GET ALL MAIN SERVICE API
    getAllMainServices: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `services/getallmainservices?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      }
    }),

    //GET ALL SERVICES API
    getAllServices: builder.query({
      query(pagination) {
        const { pageIndex, pageSize } = pagination;
        return {
          url: `services/getallservices?page_no=${pageIndex + 1}&page_size=${pageSize}`,
          method: 'GET'
        };
      }
    }),

    //GET ALL MAIN SERVICE API BASED ON SUB COMPANY TYPE
    getAllMainServicesBySubCompanyType: builder.query({
      query(id) {
        return {
          url: `services/getAllMainServiceByCompanyTypeId/${id}`,
          method: 'GET'
        };
      }
    }),

    //GET SERVICES BASED ON MAIN SERVICES
    getAllServicesBYMainServiceType: builder.query({
      query(id) {
        return {
          url: `services/getAllServicesByMainServiceId/${id}`,
          method: 'GET'
        };
      }
    }),

    //GET A SINGLE MAIN SERVICE
    getMainService: builder.query({
      query(id) {
        return {
          url: `services/getmainservice/${id}`,
          method: 'GET'
        };
      }
    }),

    //GET A SINGLE SERVICE
    getService: builder.query({
      query(id) {
        return {
          url: `services/getservice/${id}`,
          method: 'GET'
        };
      }
    }),

    //UPDATE A MAIN SERVICE API
    updateMainService: builder.mutation({
      query(data) {
        const { id, formData } = data;
        return {
          url: `services/updatemainservice/${id}`,
          method: 'POST',
          body: formData
        };
      }
    }),

    //UPDATE A SERVICE API
    updateService: builder.mutation({
      query(data) {
        const { id, formData } = data;
        return {
          url: `services/updateservice/${id}`,
          method: 'POST',
          body: formData
        };
      }
    }),

    //DELETE A MAIN SERVICE API
    deleteMainService: builder.mutation({
      query(id) {
        return {
          url: `services/deletemainservice/${id}`,
          method: 'POST'
        };
      }
    }),

    //DELETE A SERVICE API
    deleteService: builder.mutation({
      query(id) {
        return {
          url: `services/deleteservice/${id}`,
          method: 'POST'
        };
      }
    })
  })
});

export const {
  useGetAllMainServicesBySubCompanyTypeQuery,
  useCreateMainServiceMutation,
  useCreateServiceMutation,
  useDeleteMainServiceMutation,
  useDeleteServiceMutation,
  useGetAllMainServicesQuery,
  useGetAllServicesBYMainServiceTypeQuery,
  useGetAllServicesQuery,
  useGetMainServiceQuery,
  useGetServiceQuery,
  useUpdateMainServiceMutation,
  useUpdateServiceMutation,
  useGetAllMainServicesWithoutPaginationQuery,
  useGetAllServicesWithPaginationQuery,
  useGetSubCompanyTypesWithoutPaginationQuery
} = serviceApi;
