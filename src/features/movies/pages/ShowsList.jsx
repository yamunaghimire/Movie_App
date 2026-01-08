import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import useTVShowsByGenre from '../hooks/useShowsByGenre';

const ShowsList = () => {
  const actionShows = useTVShowsByGenre(10759); 
  const comedyShows = useTVShowsByGenre(35);
  const dramaShows = useTVShowsByGenre(18);
  const crimeShows = useTVShowsByGenre(80);
  const sciFiFantasyShows = useTVShowsByGenre(10765);
  const mysteryShows = useTVShowsByGenre(9648);      
  const romanceShows = useTVShowsByGenre(10749);    
  const documentaryShows = useTVShowsByGenre(99);    
  const familyShows = useTVShowsByGenre(10751);     
  const animationShows = useTVShowsByGenre(16);

  return (
    <div className="bg-black">
    
      <MovieRow title="Action & Adventure Shows" movies={actionShows} />
      <MovieRow title="Comedy Shows" movies={comedyShows} />
      <MovieRow title="Drama Shows" movies={dramaShows} />
      <MovieRow title="Family Shows" movies={familyShows} />
      <MovieRow title="Crime Shows" movies={crimeShows} />
      <MovieRow title="Sci-Fi & Fantasy Shows" movies={sciFiFantasyShows} />
      <MovieRow title="Mystery Shows" movies={mysteryShows} />
      <MovieRow title="Romance Shows" movies={romanceShows} />
      <MovieRow title="Documentary Shows" movies={documentaryShows} />
      
      <MovieRow title="Animation Shows" movies={animationShows} />
    </div>
  );
};

export default ShowsList;
