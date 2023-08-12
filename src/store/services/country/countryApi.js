import { api } from '../api';

export const countryApi = api.injectEndpoints({
  endpoints: (builder) => ({

    // GET ALL COUNTRIES API
    getCountries: builder.query({
      query(_) {
        return {
          url: `country/getallcountries`,
          method: 'GET'
        };
      }
    }),

    //GET ALL STATES AND/OR CITIES API
    getStatesOrCities: builder.query({
      query(id) {
        return {
          url: `country/getStateCityByCountry/${id}`,
          method: 'GET'
        };
      }
    }),

    //GET STATES BASED ON THE COUNTRY API
    getStatesByCountry: builder.query({
      query(country_id) {
        return {
          url: `country/getstatesbycountry/${country_id}`,
          method: 'GET'
        };
      }
    }),

    //GET CITIES BASED ON THE STATES FOUND API
    getCitiesByState: builder.query({
      query(state_id) {
        return {
          url: `country/getcitiesbystate/${state_id}`,
          method: 'GET'
        };
      }
    }),

    //GET COMMUNITIES BASED ON THE CITIES FOUND API
    getCommunitiesByCity: builder.query({
      query(city_id) {
        return {
          url: `country/getcommunitiesbycity/${city_id}`,
          method: 'GET'
        };
      }
    }),

    //GET SUB COMMUNITIES BASED ON THE COMMUNITIES FOUND API
    getSubCommunitiesByCommunity: builder.query({
      query(community_id) {
        return {
          url: `country/getsubcommunitiesbycommunity/${community_id}`,
          method: 'GET'
        };
      }
    }),

    //GET ALL CURRENCIES API
    getCurrencies: builder.query({
      query(_) {
        return {
          url: `currency/getAllCurrencies`,
          method: 'GET'
        };
      }
    })
  })
});

export const {
  useGetCitiesByStateQuery,
  useGetCommunitiesByCityQuery,
  useGetCountriesQuery,
  useGetCurrenciesQuery,
  useGetStatesByCountryQuery,
  useGetSubCommunitiesByCommunityQuery,
  useGetStatesOrCitiesQuery
} = countryApi;
