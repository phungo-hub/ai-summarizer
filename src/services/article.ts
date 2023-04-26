import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const apiKey = process.env.API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', "ab5b0d6760mshaf8c098925f9f0cp1c171bjsn0fcec552ad15")
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