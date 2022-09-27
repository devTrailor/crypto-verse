
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const cryptoHeader = {
    'X-RapidAPI-Key': '564d1039c7mshdb6b46e424d4b8ep1ee075jsnf21561c2d9b7',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};


const baseUrl = "https://coinranking1.p.rapidapi.com";


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
//     },
//     headers: {
//         'X-RapidAPI-Key': '564d1039c7mshdb6b46e424d4b8ep1ee075jsnf21561c2d9b7',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };



const createRequest = (url) => ({ url, headers: cryptoHeader })

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})


export const {
    useGetCryptosQuery,
} = cryptoApi