
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const cryptoHeader = {
    'X-RapidAPI-Key': '564d1039c7mshdb6b46e424d4b8ep1ee075jsnf21561c2d9b7',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};


const baseUrl = "https://coinranking1.p.rapidapi.com";



const createRequest = (url) => ({ url, headers: cryptoHeader })

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),

    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi