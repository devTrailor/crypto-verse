import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '564d1039c7mshdb6b46e424d4b8ep1ee075jsnf21561c2d9b7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};


const baseUrl = "https://bing-news-search1.p.rapidapi.com";


const createRequest = (url) => ({ url, headers: cryptoNewsHeader });





export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})


export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi