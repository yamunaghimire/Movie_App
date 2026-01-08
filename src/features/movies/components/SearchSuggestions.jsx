import { Link } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import MovieCard from "../components/MovieCard";

const SearchSuggestions = ({ query }) => {
  const { results, loading } = useSearch(query);

  if (!query || query.trim() === "") return null;

  
  const filteredResults = results.filter(
    (item) =>
      (item.media_type === "movie" || item.media_type === "tv") &&
      item.poster_path
  );

  if (filteredResults.length === 0) return null;

  return (
    <div className="p-4">
      
      {/* {loading && (
        <p className="text-white text-sm mb-2 opacity-70">Searching...</p>
      )} */}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
        {filteredResults.map((item) => {
          return item.media_type === "movie" ? (
            <MovieCard key={`${item.media_type}-${item.id}`} movie={item} />
          ) : (
            <div key={`${item.media_type}-${item.id}`}>
              
              <Link to={`/tv/${item.id}`}>
                <MovieCard movie={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSuggestions;
