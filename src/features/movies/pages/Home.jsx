import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import useMoviesByCategory from '../hooks/useMoviesByCategory'
// import MovieCompanies from '../components/MovieCompanies'

const Home = () => {
  const { movies, loading, error } = useMoviesByCategory();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Hero/>
      <MovieRow title="Now Playing" movies={movies.nowPlaying} />
      <MovieRow title="Popular" movies={movies.popular} />
      <MovieRow title="Top Rated" movies={movies.topRated} />
      <MovieRow title="Upcoming" movies={movies.upcoming} />
  
    </div>
  )
}

export default Home