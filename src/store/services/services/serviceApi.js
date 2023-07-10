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

    //GET ALL MAIN SERVICE API
    getAllMainServices: builder.query({
      query(_) {
        return {
          url: 'services/getallmainservices',
          method: 'GET'
        };
      }
    }),

    //GET ALL SERVICES API
    getAllServices: builder.query({
      query(_) {
        return {
          url: 'services/getallservices',
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
  useUpdateServiceMutation
} = serviceApi;
