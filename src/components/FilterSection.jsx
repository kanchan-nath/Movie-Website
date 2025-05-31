import React, { useEffect, useState } from 'react'
import InputApi from '../FetchApi/InputApi'
import {GenereApi} from '../FetchApi/InputApi'

const FilterSection = ({
  searchItem,
  searchResults,
  selectGenre,
  setSelectGenre,
  genere,
  setGenere,
  years,
  setYears,
  selectedYear,
  setSelectedYear,
  selectRating,
  setSelectRating,
  rating,
  setRating

}) => {
 
  
const handlechangeRating = (e)=>{
    setSelectRating(e.target.value)
      }
    
    const handleSetYear = (e) => {
      setSelectedYear(e.target.value)
    }
    
    const handleGenre = (e) => {
      setSelectGenre(e.target.value)
    }
    

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await InputApi(searchItem)
        const movies = response.data.results
  
        const uniqueRatings = [
          ...new Set(
            movies
              .map((movie) => Math.floor(movie.vote_average))
              .filter(Boolean)
          ),
        ].sort((a, b) => b - a)
        setRating(uniqueRatings)
        // You can store these in state to render options dynamically if you want
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRatings()
  }, [searchItem])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await GenereApi()
        const genereList = res.data.genres

      //   if (!searchItem) {
      //   setGenere(genereList)
      //   return
      // }

        const movieRes = await InputApi(searchItem)
        const movies =movieRes.data.results
        const movieGenre = new Set(movies.flatMap((curElem) => curElem.genre_ids))
        // console.log(movieGenre )
        console.log(movieGenre)

        const filteredGenres = genereList.filter((genre) =>
        movieGenre.has(genre.id)
      )
       setGenere(filteredGenres)

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchGenres()
  }, [searchItem])

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const res = await InputApi(searchItem) // pass some query to get movies
        const movies = res.data.results

        // Extract unique years from release_date
        const uniqueYears = [
          ...new Set(
            movies
              .map((movie) => movie.release_date?.slice(0, 4))
              .filter(Boolean)
          ),
        ].sort((a, b) => b - a) // Sort descending

        setYears(uniqueYears)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchYears()
  }, [searchItem])

  return (
    <section className="filters">
      <div className="container">
        <div className="filter-group">
          <label>Genre:</label>
          <select className="filter-select" value={selectGenre} onChange={handleGenre}>
            <option value="">All Genres</option>
            {genere.map((curElem) => (
              <option key={curElem.id} value={curElem.id}>
                {curElem.name}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Year:</label>
          <select className="filter-select" value={selectedYear} onChange={handleSetYear}>
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Rating:</label>
          <select className="filter-select" value = {selectRating} onChange={handlechangeRating}>
            <option value="">All Ratings</option>
            {rating.map((ratings)=>{
                return <option key={ratings} value={ratings}>
                {ratings}
              </option>
            })}
          </select>
        </div>
      </div>
    </section>
  )
}

export default FilterSection
