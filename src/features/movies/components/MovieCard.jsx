

const MovieCard = ({ movies}) => {
  return (
    <div >
        <img
         src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} 
         alt={movies.title}
         className="w-70 h-50"
         
         />
    </div>
  )
}

export default MovieCard;