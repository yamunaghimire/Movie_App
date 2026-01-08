import { useEffect, useState } from "react";
import { moviesApi } from "../../../app/config/movie.api";

// Debounced search hook – waits for the user to stop typing
// before hitting the API, and returns movie/TV results + loading state.
const useSearch = (query, delay = 400) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If query is empty, clear results and stop loading
    if (!query || query.trim() === "") {
      setResults([]);
      setLoading(false);
      return;
    }

    let isCancelled = false;

    setLoading(true);

    const handler = setTimeout(async () => {
      try {
        const data = await moviesApi.searchMulti(query);
        if (!isCancelled) {
          setResults(data?.results || []);
        }
      } catch (err) {
        console.error("Search error:", err);
        if (!isCancelled) {
          setResults([]);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }, delay);

    return () => {
      isCancelled = true;
      clearTimeout(handler);
    };
  }, [query, delay]);

  return { results, loading };
};

export default useSearch;
