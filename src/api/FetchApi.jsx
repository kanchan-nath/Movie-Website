import React from 'react'
import axios from 'axios'
const  api =axios.create({
    baseURL:  "https://api.themoviedb.org/3/search/movie"
})

const FetchApi = (query) => {
  return api.get('',{
    params:{
        api_key: "769f5e84c79983f742a9f2ec02af3e55",
        query: query,
    }
  })
}

export default FetchApi