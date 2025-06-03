import React from 'react'
// import"./Style/style.css"
const Movie = () => {
  return (
    <main class="main-content">
        <div class="container">
            <div class="section-header">
                <h2> Movies</h2>
                <div class="view-toggle">
                    <button class="toggle-btn active" onClick="">
                        <i class="fas fa-th"></i>
                    </button>
                    <button class="toggle-btn" onClick="">
                        <i class="fas fa-list"></i>
                    </button>
                </div>
            </div>
            
        
            <div class="loading" style={{ display: 'none' }}>
                <div class="spinner"></div>
                <p>Loading movies...</p>
            </div>

        
            <div class="movies-grid" id="moviesGrid">
            
                <div class="movie-card" onClick="">
                    <div class="movie-poster">
                        <div class="poster-placeholder">
                            <i class="fas fa-image"></i>
                        </div>
                        <div class="movie-overlay">
                            <button class="play-btn">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="movie-info">
                        <h3>Sample Movie Title</h3>
                        <div class="movie-meta">
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                8.5
                            </span>
                            <span class="year">2024</span>
                        </div>
                        <p class="movie-description">
                            Sample description of the movie that will be replaced with actual data from API...
                        </p>
                        <div class="movie-genres">
                            <span class="genre-tag">Action</span>
                            <span class="genre-tag">Adventure</span>
                        </div>
                    </div>
                </div>

               
                <div class="movie-card" onClick="">
                    <div class="movie-poster">
                        <div class="poster-placeholder">
                            <i class="fas fa-image"></i>
                        </div>
                        <div class="movie-overlay">
                            <button class="play-btn">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="movie-info">
                        <h3>Another Movie</h3>
                        <div class="movie-meta">
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                7.8
                            </span>
                            <span class="year">2023</span>
                        </div>
                        <p class="movie-description">
                            Another sample description that will be replaced...
                        </p>
                        <div class="movie-genres">
                            <span class="genre-tag">Comedy</span>
                            <span class="genre-tag">Drama</span>
                        </div>
                    </div>
                </div>
            </div>

           
            <div class="load-more-container">
                <button class="load-more-btn" onClick="">
                    Load More Movies
                </button>
            </div>
        </div>
    </main>
  )
}

export default Movie