import React from 'react'
import "../styling/trending.css"
const Trending = () => {
  return (
    <section class="trending-content">
            <h2 class="section-title">Trending Now</h2>
            
            <div class="trending-grid">
                <div class="movie-card" onclick="handleMovieClick('movie1')">
                    <div class="movie-poster">🎬</div>
                    <div class="movie-info">
                        <h3 class="movie-title">Trending Movie 1</h3>
                        <div class="movie-meta">2024 • Action</div>
                        <div class="movie-rating">
                            <span class="rating-stars">★★★★☆</span>
                            <span>8.5</span>
                        </div>
                    </div>
                </div>

                <div class="movie-card" onclick="handleMovieClick('movie2')">
                    <div class="movie-poster">🎭</div>
                    <div class="movie-info">
                        <h3 class="movie-title">Trending Movie 2</h3>
                        <div class="movie-meta">2024 • Drama</div>
                        <div class="movie-rating">
                            <span class="rating-stars">★★★★★</span>
                            <span>9.2</span>
                        </div>
                    </div>
                </div>

                <div class="movie-card" onclick="handleMovieClick('movie3')">
                    <div class="movie-poster">🚀</div>
                    <div class="movie-info">
                        <h3 class="movie-title">Trending Movie 3</h3>
                        <div class="movie-meta">2024 • Sci-Fi</div>
                        <div class="movie-rating">
                            <span class="rating-stars">★★★★☆</span>
                            <span>8.7</span>
                        </div>
                    </div>
                </div>

                <div class="movie-card" onclick="handleMovieClick('movie4')">
                    <div class="movie-poster">😂</div>
                    <div class="movie-info">
                        <h3 class="movie-title">Trending Movie 4</h3>
                        <div class="movie-meta">2024 • Comedy</div>
                        <div class="movie-rating">
                            <span class="rating-stars">★★★☆☆</span>
                            <span>7.8</span>
                        </div>
                    </div>
                </div>

                <div class="movie-card" onclick="handleMovieClick('movie5')">
                    <div class="movie-poster">💀</div>
                    <div class="movie-info">
                        <h3 class="movie-title">Trending Movie 5</h3>
                        <div class="movie-meta">2024 • Horror</div>
                        <div class="movie-rating">
                            <span class="rating-stars">★★★★☆</span>
                            <span>8.1</span>
                        </div>
                    </div>
                </div>

                <div class="movie-card" onclick="handleMovieClick('movie6')">
                    <div class="movie-poster">💕</div>
                    <div class="movie-info">
                        <h3 class="movie-title">Trending Movie 6</h3>
                        <div class="movie-meta">2024 • Romance</div>
                        <div class="movie-rating">
                            <span class="rating-stars">★★★★☆</span>
                            <span>8.3</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Trending