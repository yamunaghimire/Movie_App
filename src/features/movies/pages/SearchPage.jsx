import { useState } from "react";
import SearchBar from "../../../shared/components/SearchBar";
import TrendingAll from "../components/TrendingAll";
import SearchSuggestions from "../components/SearchSuggestions";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="px-35 pt-6">
      <SearchBar query={query} handleChange={handleChange} />

      
      {query.length === 0 && <TrendingAll />}

    
      {query.length > 0 && <SearchSuggestions query={query} />}
    </div>
  );
};

export default SearchPage;
