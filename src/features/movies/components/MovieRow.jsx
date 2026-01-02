import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {

  return (
    <section className="bg-black px-21">
      <h2 className="text-xl font-bold text-white mb-3">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto">
        {movies.map(movie => (
          <MovieCard key={movie.id} movies={movies} />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
