import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const api_key = "769f5e84c79983f742a9f2ec02af3e55";

const Home = () => {
  // Store movies + page number per category
  const [trending, setTrending] = useState([]);
  const [trendingPage, setTrendingPage] = useState(1);

  const [popular, setPopular] = useState([]);
  const [popularPage, setPopularPage] = useState(1);

  const [topRated, setTopRated] = useState([]);
  const [topRatedPage, setTopRatedPage] = useState(1);

  const [loading, setLoading] = useState(false);

  // Fetch category movies based on category and page
  const fetchCategory = useCallback(async (category, page) => {
    setLoading(true);
    try {
      let url = "";
      if (category === "trending") {
        url = `https://api.themoviedb.org/3/trending/movie/week`;
      } else if (category === "popular") {
        url = `https://api.themoviedb.org/3/movie/popular`;
      } else if (category === "topRated") {
        url = `https://api.themoviedb.org/3/movie/top_rated`;
      }

      const res = await axios.get(url, {
        params: {
          api_key,
          page,
        },
      });

      if (category === "trending") {
        setTrending((prev) => [...prev, ...res.data.results]);
      } else if (category === "popular") {
        setPopular((prev) => [...prev, ...res.data.results]);
      } else if (category === "topRated") {
        setTopRated((prev) => [...prev, ...res.data.results]);
      }
    } catch (err) {
      console.error(`Error fetching ${category} movies:`, err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load for all 3 categories
  useEffect(() => {
    fetchCategory("trending", 1);
    fetchCategory("popular", 1);
    fetchCategory("topRated", 1);
  }, [fetchCategory]);

  // Scroll event handler for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if near bottom of page
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading
      ) {
        // Load next page for all categories
        setTrendingPage((prev) => {
          const next = prev + 1;
          fetchCategory("trending", next);
          return next;
        });
        setPopularPage((prev) => {
          const next = prev + 1;
          fetchCategory("popular", next);
          return next;
        });
        setTopRatedPage((prev) => {
          const next = prev + 1;
          fetchCategory("topRated", next);
          return next;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, fetchCategory]);

  const renderMovies = (movies) =>
    movies.map((movie) => (
      <div className="movie-card" key={movie.id} style={{ margin: "10px", width: "150px" }}>
        <div className="movie-poster" style={{ height: "225px", overflow: "hidden", borderRadius: "5px" }}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div className="poster-placeholder" style={{ fontSize: "60px", textAlign: "center", lineHeight: "225px" }}>
              🎬
            </div>
          )}
        </div>
        <div className="movie-info" style={{ marginTop: "8px" }}>
          <h3 style={{ fontSize: "14px", margin: "0 0 4px 0" }}>{movie.title}</h3>
          <div className="movie-meta" style={{ fontSize: "12px", color: "#555" }}>
            <span className="rating" style={{ marginRight: "10px" }}>
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
            <span className="year">
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "N/A"}
            </span>
          </div>
        </div>
      </div>
    ));

  return (
    <main className="main-content" style={{ padding: "20px" }}>
      <section className="category-section" style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "24px",
            marginBottom: "15px",
            borderBottom: "2px solid #333",
            paddingBottom: "5px",
          }}
        >
          Trending This Week
        </h2>
        <div
          className="movies-grid"
          style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
        >
          {renderMovies(trending)}
        </div>
      </section>

      <section className="category-section" style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "24px",
            marginBottom: "15px",
            borderBottom: "2px solid #333",
            paddingBottom: "5px",
          }}
        >
          Popular Movies
        </h2>
        <div
          className="movies-grid"
          style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
        >
          {renderMovies(popular)}
        </div>
      </section>

      <section className="category-section" style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "24px",
            marginBottom: "15px",
            borderBottom: "2px solid #333",
            paddingBottom: "5px",
          }}
        >
          Top Rated Movies
        </h2>
        <div
          className="movies-grid"
          style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
        >
          {renderMovies(topRated)}
        </div>
      </section>

      {loading && (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Loading more movies...
        </p>
      )}
    </main>
  );
};

export default Home;
