import React from 'react'
import Movie from './Movie'
import HomeMovie from "./HomeMovie.jsx"
const HeroSection = () => {
  return (
    <>
    
    <section class="hero">
        <div class="hero-content">
            <h1>Discover Amazing Movies</h1>
            <p>Explore thousands of movies, get ratings, reviews and more</p>
            <button class="cta-btn" onClick="">Explore Now</button>
        </div>
        <div class="hero-image">
            <div class="hero-placeholder">
                <i class="fas fa-video"></i>
            </div>
        </div>
    </section>

    {/* <div class="modal" id="movieModal" style={{Display: "none"}}>
        <div class="modal-content">
            <span class="close-btn" onClick="">&times;</span>
            <div class="modal-body">
                <div class="modal-poster">
                    <div class="poster-placeholder">
                        <i class="fas fa-image"></i>
                    </div>
                </div>
                <div class="modal-info">
                    <h2>Movie Title</h2>
                    <div class="modal-meta">
                        <span class="rating">
                            <i class="fas fa-star"></i>
                            8.5
                        </span>
                        <span class="year">2024</span>
                        <span class="duration">120 min</span>
                    </div>
                    <p class="modal-description">
                        Detailed movie description will go here...
                    </p>
                    <div class="modal-genres">
                        <span class="genre-tag">Action</span>
                        <span class="genre-tag">Adventure</span>
                    </div>
                    <div class="modal-actions">
                        <button class="btn-primary" onClick="">
                            <i class="fas fa-play"></i>
                            Watch Trailer
                        </button>
                        <button class="btn-secondary" onClick="">
                            <i class="fas fa-heart"></i>
                            Add to Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    <HomeMovie/>
    </>
  )
}

export default HeroSection