// import { Link } from "react-router-dom";
// import useTrendingAll from "../hooks/useTrendingAll";

// const TrendingAll = () => {
//   const trending = useTrendingAll("week");

//   const filteredTrending = trending.filter(
//     item => item.media_type === "movie" || item.media_type === "tv"
//   );

//   return (
//     <>
//       <h1 className="text-white text-2xl pt-7 pb-6 font-medium pl-2">Trending Now</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {filteredTrending.map(item => (
//           <Link
//             key={`${item.media_type}-${item.id}`}
//             to={`/${item.media_type}/${item.id}`} 
//             className="cursor-pointer hover:scale-105 transition-transform"
//           >
//             <img
//               src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//               alt={item.title || item.name}
//               className="w-full h-[260px] object-cover rounded-lg"
//             />
//             <p className="mt-2 text-white text-sm truncate">
//               {item.title || item.name}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default TrendingAll;

import { Link } from "react-router-dom";
import useTrendingAll from "../hooks/useTrendingAll";
import MovieCard from "../components/MovieCard";

const TrendingAll = () => {
  const trending = useTrendingAll("week");

  const filteredTrending = trending.filter(
    item => item.media_type === "movie" || item.media_type === "tv"
  );

  return (
    <>
      <h1 className="text-white text-2xl pt-7 pb-6 font-medium pl-2">Trending Now</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredTrending.map(item => (
          <MovieCard key={`${item.media_type}-${item.id}`} movie={item} />
        ))}
      </div>
    </>
  );
};

export default TrendingAll;

