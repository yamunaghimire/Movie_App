import { useState, useEffect } from "react";
import { moviesApi } from "../../../app/config/movie.api";

const useSimilarMovies = (movieId) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (!movieId) return; 

    async function fetchSimilarMovies() {
      try {
        const data = await moviesApi.getSimilarMovies(movieId); 
        setSimilarMovies(data.results || []); 
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      }
    }

    fetchSimilarMovies();
  }, [movieId]);

  return similarMovies;
};

export default useSimilarMovies;
