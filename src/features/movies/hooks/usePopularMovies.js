import { useEffect, useState } from "react";
import { moviesApi } from "../../../app/config/movie.api";

const usePopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const data = await moviesApi.getPopularMovies(1);
      console.log("TMDB:", data);
      setMovies(data.results);
    }

    fetchPopularMovies();
  }, []);

  return movies;
};

export default usePopularMovies;
