import useSimilarMovies from "../hooks/useSimilarMovies"
import MovieRow from "./MovieRow"

const SimilarMovies = ({id}) => {
    const similarMovies = useSimilarMovies(id);
  return (
    <div className="p-3">
        <MovieRow title="More Like this" movies={similarMovies}/>
        
    </div>
  )
}

export default SimilarMovies