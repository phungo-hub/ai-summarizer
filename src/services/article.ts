import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
        prepareHeaders: (headers) => {
            if (apiKey){
                headers.set('X-RapidAPI-Key', apiKey)
            }
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query<any, any>({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const { useLazyGetSummaryQuery } = articleApi;