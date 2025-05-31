import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/movie"
})

const InputApi = (box) => {
  return api.get('',{
    params:{
         api_key: "769f5e84c79983f742a9f2ec02af3e55",
        query: box,
    }
  })
}

export default InputApi

    
    const api2 = axios.create({
        baseURL: " https://api.themoviedb.org/3/genre/movie/list"
    })
   export  const GenereApi = () => {
    return (
        api2.get('',{
            params:{
                api_key: "769f5e84c79983f742a9f2ec02af3e55", 
                // vote_count.gte: 100
            }
        })
    )
    }
