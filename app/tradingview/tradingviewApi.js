// import axios from 'axios'

// export const getInstruments = () => {
//   return axios('/api/get-instruments')
// }

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const tradingviewApi = createApi({
  reducerPath: 'tradingviewApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getInstruments: builder.query({
      query: () => `get-instruments`,
    }),
  }),
})
console.log("tradingviewApi", tradingviewApi)

export const { useGetInstrumentsQuery } = tradingviewApi
