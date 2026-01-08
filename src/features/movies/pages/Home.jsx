import Footer from '../components/Footer';
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import useMoviesByCategory from '../hooks/useMoviesByCategory'
import useMoviesByGenre from '../hooks/useMoviesByGenre';
import useTVShowsByGenre from '../hooks/useShowsByGenre';
import MovieCompanies from '../components/MovieCompanies'

const Home = () => {
  const { movies, loading, error } = useMoviesByCategory();
  const actionMovies = useMoviesByGenre(28);
   const comedyMovies = useMoviesByGenre(35);
  
  const horrorMovies = useMoviesByGenre(27);
  const romanceMovies = useMoviesByGenre(10749);

  const crimeShows = useTVShowsByGenre(80);
  const sciFiFantasyShows = useTVShowsByGenre(10765);

  


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="overflow-visible bg-black">
      
      <Hero/>
      <div className="w-full block  lg:hidden ">
                  <MovieCompanies />
                </div>
      <MovieRow title="Now Playing" movies={movies.nowPlaying} />
      <MovieRow title="Popular" movies={movies.popular} />
      <MovieRow title="Top Rated" movies={movies.topRated} />
      <MovieRow title="Upcoming" movies={movies.upcoming} />
      <MovieRow title="Action Movies" movies={actionMovies} />
      <MovieRow title="Comedy Movies" movies={comedyMovies} />
      <MovieRow title="Horror Movies" movies={horrorMovies} />
      <MovieRow title="Romance Movies" movies={romanceMovies} />
      <MovieRow title="Crime Shows" movies={crimeShows} />
      <MovieRow title="Sci-Fi & Fantasy Shows" movies={sciFiFantasyShows} />
      <Footer/>
     
  
    </div>
  )
}

export default Home