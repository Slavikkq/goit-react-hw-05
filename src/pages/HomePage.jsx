import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import { searchMovies } from "../api";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await searchMovies("trending");
        setTrendingMovies(movies);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
