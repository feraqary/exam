import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import sub_dev_comp from 'pages/company/add_sub_dev';

export const subDevCompSlice = createApi ( {
    reducerPath: 'subDevCompSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://20.203.31.58' }),
    endpoints: (builder) => ({
        devCompanies: builder.query<sub_dev_comp[], void> ({
            query:() => '/sub_dev_comp'
        })    })
})


export const { usedevCompaniesQuery }  = subDevCompSlice;