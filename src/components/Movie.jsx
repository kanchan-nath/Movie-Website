import React, { useState, useEffect } from 'react'
// import "./Style/style.css"
import Header from '../layout/Header.jsx'
import FetchApi from "../api/FetchApi"

const Movie = ({ enterInput, setEnterInput }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const FetchMovie = async () => {
        try {
            const res = await FetchApi(enterInput)
            setMovies(res.data.results)
            // console.log(res.data.results)
            
        } catch (error) {
            console.log(error)
        }
    }
    if (enterInput) {
      FetchMovie()
    }
  }, [enterInput])

  return (
    <main className="main-content">
      <div className="container">
        <div className="section-header">
          <h2> Movies</h2>
          <div className="view-toggle">
            <button className="toggle-btn active">
              <i className="fas fa-th"></i>
            </button>
            <button className="toggle-btn">
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>

        <div className="loading" style={{ display: 'none' }}>
          <div className="spinner"></div>
          <p>Loading movies...</p>
        </div>

        <div className="movies-grid" id="moviesGrid">
          {movies.map((curElem) => (
            <div className="movie-card" key={curElem.id}>
              <div className="movie-poster">
                {curElem.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${curElem.poster_path}`}
                    alt={curElem.title}
                    className="poster-image"
                  />
                ) : (
                  <div className="poster-placeholder">
                    <i className="fas fa-image"></i>
                  </div>
                )}
                <div className="movie-overlay">
                  <button className="play-btn">
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              </div>
              <div className="movie-info">
                <h3>{curElem.title}</h3>
                <div className="movie-meta">
                  <span className="rating">
                    <i className="fas fa-star"></i> {curElem.vote_average}
                  </span>
                  <span className="year">{new Date(curElem.release_date).getFullYear()}</span>
                  <span className="year" style={{ textTransform: "uppercase" }}>
                    {curElem.original_language}
                  </span>
                </div>
                <p className="movie-description">{curElem.overview}</p>
                <div className="movie-genres">
                  <span className="genre-tag">Popularity: {curElem.popularity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="load-more-container">
        <button className="load-more-btn">
          Load More Movies
        </button>
      </div> */}
    </main>
  )
}

export default Movie
