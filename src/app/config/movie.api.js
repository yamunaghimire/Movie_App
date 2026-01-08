const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const moviesApi = {
  getPopularMovies: async (page = 1) => {
    const res = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await res.json();
    return data;
  },
 
//   getMovieDetails: async(id) => {
//     const res = await fetch(
//     `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
//   );
    
//       const data = await res.json();
//     return data;
//   },
getMoviesByCategory: async (category, page = 1) => {
    const res = await fetch(
      `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await res.json();
    return data;
  },
 
  getMovieDetails: async(id) => {
    const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
    
      const data = await res.json();
    return data;
  },


//   getDetails: async (id, mediaType = "movie") => {
//   const res = await fetch(
//     `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
//   );
//   const data = await res.json();
//   return data;
// },

  getCompanies : async () => {
  const ids = [420, 2, 3, 33, 1, 4]; 
  const promises = ids.map(async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/company/${id}?api_key=${API_KEY}`);
      if (!res.ok) {
        console.warn(`Failed to fetch company ${id}: ${res.status} ${res.statusText}`);
        return null;
      }
      return res.json();
    } catch (error) {
      console.error(`Error fetching company ${id}:`, error);
      return null;
    }
  });

  const results = await Promise.allSettled(promises);
  const companies = results
    .map(result => result.status === 'fulfilled' ? result.value : null)
    .filter(company => company !== null);
  
  return companies; 
},

getMovieVideos: async(id)=>
{
    const res = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  if(!res.ok) throw new Error("Failed to load movies videos")
    return res.json();
},
  

getSimilarMovies : async(id)=>
{
    const res = await fetch( `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
   if(!res.ok) throw new Error("Failed to load movies videos")
    return res.json();

},

getMoviesByGenre: async (genreId, page = 1) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
  );
  return res.json();
},
getTVShowsByGenre: async (genreId, page = 1) => {
  const res = await fetch(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
  );
  return res.json();
},

getTrendingAll: async (timeWindow = "day", page = 1) => {
  const res = await fetch(
    `${BASE_URL}/trending/all/${timeWindow}?api_key=${API_KEY}&page=${page}`
  );
  return await res.json();
},

searchMulti: async (query, page = 1) => {
  if (!query) return { results: [] };

  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=${page}&language=en-US`
  );

  return await res.json();
},




};
