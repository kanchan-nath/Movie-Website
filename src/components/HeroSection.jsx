import React from 'react'

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection