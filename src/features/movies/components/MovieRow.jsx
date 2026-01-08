import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {

  return (
    <section className="bg-black lg:px-21 overflow-visible">
      <h2 className="text-xl font-bold text-white mb-3 pt-7 pl-2">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto overflow-y-visible scrollbar-hide pt-4 pb-3 px-3">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
