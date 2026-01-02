import { useState, useEffect } from "react";
import { moviesApi } from "../../../app/config/movie.api";

const useMovieVideos = (movieId) => {
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchVideos() {
      try {
        const data = await moviesApi.getMovieVideos(movieId);
    
        const trailer = data.results.find(
          (v) => v.site === "YouTube" && v.type === "Trailer"
        );
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    }

    fetchVideos();
  }, [movieId]);

  return trailerUrl;
};

export default useMovieVideos;
