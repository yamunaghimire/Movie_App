// import useMovieDetails from "../hooks/useMovieDetails";
// import useMovieVideos from "../hooks/useMovieVideos";

// const MovieDetails = ({ movieId }) => {
//   const details = useMovieDetails(movieId);
//   const trailerUrl = useMovieVideos(movieId);
//   console.log("Trailer URL:", trailerUrl);
//   console.log(details);
//   if (!details) return null;
//   return (
//     <div className=" max-w-125 text-white z-10 pl-3">
//       <h1 className="text-4xl font-bold ">{details.title}</h1>
//       <p className="text-sm opacity-80  mb-4 mt-2 ">
//         {details.genres?.map((g) => g.name).join(" | ")}
//       </p>
      

//       <p className="text-sm opacity-80 mb-3">
//          {details.release_date?.slice(0, 4)} •  {details.runtime} min   <span className="ml-4"> ⭐ {details.vote_average}</span>
//       </p>

//       <p className="text-sm pt-4 ">{details.overview}</p>

      
 
//       <div className="flex gap-6">
//         {trailerUrl && (
//           <a
//             href={trailerUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative z-50 mt-4 text-[16px] px-20 py-4 text-white  bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer"
//           >
//             ▶ <span className="ml-1 items-center">Watch Trailer</span>
//           </a>
//         )}
//         <div className="relative z-50 mt-4 text-[16px] inline-block px-7 py-5  text-white bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer">
//           +
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;


import useMovieDetails from "../hooks/useMovieDetails";
import useMovieVideos from "../hooks/useMovieVideos";
import useFavorites from "../hooks/useFavourites";

const MovieDetails = ({ movieId, isHero = false }) => {
  const details = useMovieDetails(movieId);
  const trailerUrl = useMovieVideos(movieId);
  const { addFavorite } = useFavorites();

  if (!details) return null;

  const handleAddToFavorites = () => {
  const success = addFavorite(details); 
  if (success) {
    alert(`${details.title} added to favorites!`);
  } else {
    alert(`${details.title} is already in favorites.`);
  }
};

  return (
   <div className={`lg:max-w-[500px] max-w-[280px] sm:max-w-[350px] md:max-w-[400px] text-white z-10 lg:pl-3 ${isHero ? "text-center lg:text-left" : ""}`}>

      <h1 className="lg:text-4xl md:text-3xl text-2xl sm:text-[28px] font-bold lg:leading-tight leading-tight mb-2 lg:mb-0">
        {details.title}
      </h1>
      
      <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3 lg:mb-4 lg:mt-2 mt-1 line-clamp-2 lg:line-clamp-none">
        {details.genres?.map((g) => g.name).join(" | ")}
      </p>

      <p className={`text-xs sm:text-sm opacity-80 mb-2 sm:mb-3 flex flex-wrap items-center gap-1 lg:gap-0 ${isHero ? "justify-center lg:justify-start" : "justify-start"}`}>
        <span>{details.release_date?.slice(0, 4)}</span>
        <span> • </span>
        <span>{details.runtime} min</span>
        <span className="ml-2 sm:ml-4">⭐ {details.vote_average?.toFixed(1)}</span>
      </p>

      <p
        className={`
          text-xs sm:text-sm md:text-base lg:text-sm lg:pt-4 pt-2
          ${isHero ? "hidden md:block line-clamp-2 lg:line-clamp-4" : ""}
          opacity-90
        `}
      >
        {details.overview}
      </p>

      <div className={`flex lg:gap-6 gap-2 sm:gap-3 mt-3 sm:mt-4 lg:mt-4 ${isHero ? "justify-center lg:justify-start" : "justify-start"}`}>
        {trailerUrl && (
          <a
            href={trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 lg:text-[16px] text-xs sm:text-sm px-4 sm:px-6 lg:px-20 lg:py-4 py-3 sm:py-3 text-center text-white bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer whitespace-nowrap"
          >
            ▶ <span className="hidden sm:inline ml-1">Watch Trailer</span>
            <span className="sm:hidden">Trailer</span>
          </a>
        )}
        <button
          onClick={handleAddToFavorites}
          className="relative z-50 lg:text-[16px] text-lg sm:text-xl lg:px-7 px-4 sm:px-5 lg:py-5 py-2 sm:py-3 flex items-center justify-center text-white bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer min-w-[32px] sm:min-w-[40px]"
          aria-label="Add to favorites"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
