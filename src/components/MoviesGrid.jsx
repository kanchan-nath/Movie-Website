import React from 'react';

const MoviesGrid = ({ 
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

  const getFilteredMovies = () => {
  if (!searchResults || !Array.isArray(searchResults)) return []

  return searchResults.filter((movie) => {
    const genreMatch = selectGenre ? movie.genre_ids.includes(Number(selectGenre)) : true
    const yearMatch = selectedYear ? movie.release_date?.startsWith(selectedYear) : true
    const ratingMatch = selectRating ? Math.floor(movie.vote_average) === Number(selectRating) : true

    return genreMatch && yearMatch && ratingMatch
  })
}




  return (
    <main className="main-content">
      <div className="container">
        <div className="section-header">
          <h2>Popular Movies</h2>
          <div className="view-toggle">
            <button className="toggle-btn active">
              <i className="fas fa-th"></i>
            </button>
            <button className="toggle-btn">
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>

        {/* Movies Grid Container */}
        <div className="movies-grid" id="moviesGrid">
          {
            getFilteredMovies().map((curElem) => (
              <div className="movie-card" key={curElem.id}>
                <div className="movie-poster">
                    {curElem.poster_path  ? (
                        <img src ={`https://image.tmdb.org/t/p/w500${curElem.poster_path}`} alt={curElem.title}/>
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
                      <i className="fas fa-star"></i>
                      {curElem.vote_average}
                    </span>
                    <span className="year">{curElem.release_date}</span>
                  </div>
                  <p className="movie-description">{curElem.overview}</p>
                  <div className="movie-genres">
                    <span className="genre-tag">Comedy</span>
                    <span className="genre-tag">Drama</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* Load More Button */}
        <div className="load-more-container">
          <button className="load-more-btn">Load More Movies</button>
        </div>
      </div>
    </main>
  );
};

export default MoviesGrid;
