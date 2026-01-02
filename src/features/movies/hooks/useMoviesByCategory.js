import { useEffect, useState } from "react";
import { moviesApi } from "../../../app/config/movie.api";

const useMoviesByCategory = () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHomeMovies() {
      try{
        const categories = ["now_playing", "popular", "top_rated", "upcoming"];
        const results = await Promise.all(
            categories.map((cat)=> moviesApi.getMoviesByCategory(cat))
        )
        setMovies({
          nowPlaying: results[0].results,
          popular: results[1].results,
          topRated: results[2].results,
          upcoming: results[3].results,
        });
      }catch(error){
    setError(error.message);
       
        
      }finally{
        setLoading(false);
      }
    }

    fetchHomeMovies();
  }, []);

  return {movies, loading, error};
};

export default useMoviesByCategory;
