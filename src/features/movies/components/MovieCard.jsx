import { Link } from "react-router-dom";


const MovieCard = ({ movie}) => {
   
  return (
    <Link to={`/movie/${movie.id}`}>
    <div className="flex-shrink-0 lg:w-[180px] lg:h-[230px] w-[120px] h-[180px] relative group hover:z-50 overflow-visible" >
        <img
         src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
         alt={movie.title}
         className="w-full h-full object-cover rounded-[10px] transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 origin-center group-hover:shadow-2xl"
         />
    </div>
    </Link>
  )
}

export default MovieCard;