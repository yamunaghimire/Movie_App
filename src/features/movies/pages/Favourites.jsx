import MovieCard from "../components/MovieCard"; 
import useFavorites from "../hooks/useFavourites";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="text-white p-5">
        <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
        <p>You haven't added any favorite movies yet.</p>
      </div>
    );
  }

  return (
    <div className="text-white py-5 lg:px-32 px-4">
      <h2 className="lg:text-2xl text-xl font-bold mb-4 mt-5">Your Favorites</h2>
      <div className="flex flex-wrap gap-6 text-center ">
        {favorites.map((movie) => (
          <div key={movie.id} className="relative mt-4">
            <MovieCard movie={movie} />
            <p className="mt-2" >{movie.title}</p>

            
            <button
              onClick={() => removeFavorite(movie.id)}
              className="z-50 absolute top-2 right-2 text-black-500 font-bold bg-white/20 rounded-full w-6 h-6 flex items-center justify-center hover:bg-white/40 transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
