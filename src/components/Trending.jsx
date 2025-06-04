import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styling/trending.css';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/week',
          {
            params: {
              api_key: '769f5e84c79983f742a9f2ec02af3e55',
            },
          }
        );
        setTrendingMovies(res.data.results);
      } catch (err) {
        console.error('Error fetching trending movies:', err);
      }
    };

    fetchTrending();
  }, []);

  return (
    <section className="trending-content">
      <h2 className="section-title">Trending Now</h2>

      <div className="trending-grid">
        {trendingMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-poster">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="poster-placeholder">🎬</div>
              )}
            </div>

            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <div className="movie-meta">
                {new Date(movie.release_date).getFullYear()} • {movie.original_language.toUpperCase()}
              </div>
              <div className="movie-rating">
                <span className="rating-stars">⭐</span>
                <span>{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
