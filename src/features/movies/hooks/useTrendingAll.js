import { useEffect, useState } from "react";
import { moviesApi } from "../../../app/config/movie.api";

const useTrendingAll = (timeWindow = "day") => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const data = await moviesApi.getTrendingAll(timeWindow);
      console.log("Trending All:", data);
      setTrending(data?.results || []);
    }

    getTrending();
  }, [timeWindow]);

  return trending;
};

export default useTrendingAll;
