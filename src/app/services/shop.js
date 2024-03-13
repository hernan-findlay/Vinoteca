import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://desaapp-6a883-default-rtdb.firebaseio.com' }),
    endpoints:(builder)=>({
        
        getCategories: builder.query({
            query: () => "/categories.json"
        }),
        getProductsByCategory:builder.query({
            query: (category) => `/products.json?orderBy="categoria"&equalTo="${category}"`,
            transformResponse:(response)=>{
                const data = Object.values(response)
                return data
            }
        }),
        getProduct:builder.query({
            query:(id) => `/products/${id}.json`
        })
    })
})


  export const {useGetCategoriesQuery,useGetProductsByCategoryQuery,useGetProductQuery}= shopApi