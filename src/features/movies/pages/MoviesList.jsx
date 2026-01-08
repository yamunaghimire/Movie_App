import MovieRow from '../components/MovieRow';
import useMoviesByGenre from '../hooks/useMoviesByGenre';

const MoviesList = () => {
  const actionMovies = useMoviesByGenre(28);
  const comedyMovies = useMoviesByGenre(35);
  const dramaMovies = useMoviesByGenre(18);
  const horrorMovies = useMoviesByGenre(27);
  const romanceMovies = useMoviesByGenre(10749);
  const sciFiMovies = useMoviesByGenre(878);
  const adventureMovies = useMoviesByGenre(12);
const animationMovies = useMoviesByGenre(16);
const crimeMovies = useMoviesByGenre(80);
const documentaryMovies = useMoviesByGenre(99);
const familyMovies = useMoviesByGenre(10751);
const fantasyMovies = useMoviesByGenre(14);
const mysteryMovies = useMoviesByGenre(9648);
const thrillerMovies = useMoviesByGenre(53);

  return (
    <div className="overflow-visible bg-black">
      <MovieRow title="Action Movies" movies={actionMovies} />
      <MovieRow title="Comedy Movies" movies={comedyMovies} />
      <MovieRow title="Drama Movies" movies={dramaMovies} />
      <MovieRow title="Horror Movies" movies={horrorMovies} />
      <MovieRow title="Romance Movies" movies={romanceMovies} />
      <MovieRow title="Science Fiction Movies" movies={sciFiMovies} />
      <MovieRow title="Adventure Movies" movies={adventureMovies} />
<MovieRow title="Animation Movies" movies={animationMovies} />
<MovieRow title="Crime Movies" movies={crimeMovies} />
<MovieRow title="Documentaries" movies={documentaryMovies} />
<MovieRow title="Family Movies" movies={familyMovies} />
<MovieRow title="Fantasy Movies" movies={fantasyMovies} />
<MovieRow title="Mystery Movies" movies={mysteryMovies} />
<MovieRow title="Thrillers" movies={thrillerMovies} />
    </div>
  );
};

export default MoviesList;

