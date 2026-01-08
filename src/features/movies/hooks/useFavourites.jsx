import { useState, useEffect } from "react";


const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  
  const addFavorite = (movie) => {
    
    const exists = favorites.some((fav) => fav.id === movie.id);
    if (exists) return false;

    const updatedFavs = [...favorites, movie];
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    return true;
  };

 
  const removeFavorite = (movieId) => {
    const updatedFavs = favorites.filter((fav) => fav.id !== movieId);
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  // Check if a movie is in favorites
  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;
