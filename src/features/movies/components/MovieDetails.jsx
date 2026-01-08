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
   <div className="lg:max-w-125 max-w-60  text-white z-10 lg:pl-3 ">

      <h1 className="lg:text-4xl text-[20px] font-bold">{details.title}</h1>
      <p className="text-sm opacity-80 mb-4 lg:mt-2 ">
        {details.genres?.map((g) => g.name).join(" | ")}
      </p>

      <p className="text-sm opacity-80 mb-3">
        {details.release_date?.slice(0, 4)} • {details.runtime} min
        <span className="ml-4"> ⭐ {details.vote_average}</span>
      </p>

      {/* <p className="lg:text-sm text-[8px] lg:pt-4 ">{details.overview}</p> */}

      <p
        className={`
          lg:text-sm text-[8px] lg:pt-4
          ${isHero ? "hidden lg:block" : ""}
        `}
      >
        {details.overview}
      </p>

      <div className="flex lg:gap-6 gap-2">
        {trailerUrl && (
          <a
            href={trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 mt-4 lg:text-[16px] text-[12px] px-5 lg:px-20 lg:py-4 py-3 text-center  text-white bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer"
          >
            ▶ Watch Trailer
          </a>
        )}
        <div
          onClick={handleAddToFavorites}
          className="relative z-50 mt-4 text-[16px]  lg:px-7 px-4 lg:py-5 py-0.5 flex items-center text-white bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer"
        >
          +
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
