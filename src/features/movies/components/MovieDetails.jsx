import useMovieDetails from '../hooks/useMovieDetails'
import useMovieVideos from '../hooks/useMovieVideos';

const MovieDetails = ({movieId}) => {
    const details = useMovieDetails(movieId);
    const trailerUrl = useMovieVideos(movieId);
    console.log("Trailer URL:", trailerUrl);
    console.log(details);
    if (!details) return null;
  return (
 <div className=" max-w-125 text-white z-10">
      <h1 className="text-4xl font-bold mb-2">
        {details.title}
      </h1>
      <p className="text-sm opacity-80  mb-4">
  {details.genres?.map((g) => g.name).join(" | ")}
</p>

      <p className="text-sm opacity-80 mb-2">
        {details.runtime} min • {details.release_date?.slice(0, 4)}
      </p>

      <p className="text-sm ">
        {details.overview}
      </p>
      
      <div className='flex gap-6'>
{trailerUrl && (
        <a
          href={trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-50 mt-4 text-[16px] px-20 py-4 text-white  bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer"
        >
          ▶ <span className='ml-1 items-center'>Watch Trailer</span>
        </a>
      )}
      <div className="relative z-50 mt-4 text-[16px] inline-block px-7 py-5  text-white bg-white/10 rounded-[5px] hover:bg-white/40 transition cursor-pointer" >
        +
      </div>
      </div>
    </div>

  );
}

export default MovieDetails