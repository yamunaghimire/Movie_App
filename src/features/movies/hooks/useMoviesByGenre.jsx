import { useState, useEffect } from "react";
import { moviesApi } from "../../../app/config/movie.api";

const useMoviesByGenre = (genreId) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!genreId) return;

    async function fetchMovies() {
      try {
        const data = await moviesApi.getMoviesByGenre(genreId);
        setMovies(data.results || []);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMovies();
  }, [genreId]);

  return movies;
};

export default useMoviesByGenre;
