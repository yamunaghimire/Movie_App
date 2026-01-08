import usePopularMovies from "../hooks/usePopularMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import MovieDetails from "./MovieDetails";
import MovieCompanies from "./MovieCompanies";

export default function Hero() {
  const movies = usePopularMovies();

  if (!movies || movies.length === 0) {
    return (
      <div className="h-[70vh] flex items-center justify-center bg-black text-white">
        <p>Loading popular movies...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full lg:h-screen h-[46vh] lg:overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        allowTouchMove={false}
        className="w-full h-full"
      >
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <SwiperSlide key={movie.id} style={{ background: "#000" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover block"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/70" />

                <div className="absolute inset-0 bg-black/30" />

                {/* bottom gradient  */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 lg:h-46 h-30
                  bg-gradient-to-t from-black via-black/80 to-transparent"
                />
                <div className="absolute lg:bottom-75 bottom-30 lg:left-30  flex lg:items-start items-center justify-center  ">
                  <MovieDetails movieId={movie.id} isHero />
                </div>
                <div className="w-full hidden lg:block lg:absolute lg:bottom-4" >
                  <MovieCompanies  />
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
      
    </div>
  );
}
