import { useState, useEffect } from "react";
import { moviesApi } from "../../../app/config/movie.api"; // you can rename to tmdbApi

const useTVShowsByGenre = (genreId) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    if (!genreId) return;

    async function fetchShows() {
      try {
        const data = await moviesApi.getTVShowsByGenre(genreId);
        setShows(data.results || []);
      } catch (err) {
        console.error(err);
      }
    }

    fetchShows();
  }, [genreId]);

  return shows;
};

export default useTVShowsByGenre;
