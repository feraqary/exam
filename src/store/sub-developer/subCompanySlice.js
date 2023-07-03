import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//api slice  //post api request
export const  subDevCompanyApi = createApi({
    //storage cache 
     reducerPath: 'subDevCompanyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://20.203.31.58'}),
    endpoints: (builder) => ({
        subDevCompanyApi: builder.query ({
         getAllquery: (name ) => `api/dashboard/createSubCompany`,
        }),

        }),
    })