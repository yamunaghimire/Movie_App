import {  useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import useMovieDetails from "../hooks/useMovieDetails";
import SimilarMovies from "../components/SimilarMovies";

const MovieInfo = ({ movies }) => {
  const { id } = useParams();
  const details = useMovieDetails(id); 

  if (!details) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Loading...</div>;

  return (
    <div className="relative w-full lg:h-[100vh] h-[70vh] bg-black">
      
      <img
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        alt={details.title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

     
      <div className="fixed lg:top-0 top-30 left-0 w-full h-full bg-gradient-to-b from-transparent via-black to-black" />

   
      <div className="absolute lg:bottom-90 bottom-45 flex flex-wrap lg:left-27 left-1 text-white z-10 px-3">
        <MovieDetails movieId={id} />
      </div>

      
      <div className="absolute lg:top-[70vh] top-[60vh] lg:inset-x-5 inset-x-2 lg:px-0 z-10 lg:pb-16 pb-10 bg-black">
        <SimilarMovies id={id} />
      </div>
     
    </div>
  );
};

export default MovieInfo;
