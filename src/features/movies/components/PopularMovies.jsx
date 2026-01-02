// // import usePopularMovies from "../hooks/usePopularMovies";

// // export default function PopularMovies() {
// //   const movies = usePopularMovies();

// //   console.log("FROM COMPONENT:", movies);

// //   return (
// //     <ul>
// //       {movies.map((movie) => (
// //   <img
// //     key={movie.id}
// //     src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
// //     alt={movie.title}
// //   />
// // ))}
// //     </ul>
// //   );
// // }


// import usePopularMovies from "../hooks/usePopularMovies";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";

// export default function PopularMovies() {
//   const movies = usePopularMovies();

//   if (!movies || movies.length === 0) {
//     return (
//       <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#000", color: "#fff" }}>
//         <p>Loading popular movies...</p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ width: "100%", height: "80vh", overflow: "hidden", background: "#000" }}>
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         fadeEffect={{ 
//           crossFade: true 
//         }}
//         autoplay={{
//           delay: 3000,          
//           disableOnInteraction: false,
//         }}
//         speed={5000}             
//         loop={true}
//         allowTouchMove={false}  
//         style={{ width: "100%", height: "100%" }}
//       >
//         {movies.map(
//           (movie) =>
//             movie.backdrop_path && (
//               <SwiperSlide key={movie.id} style={{ background: "#000" }}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
//                   alt={movie.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     display: "block"
//                   }}
//                 />
                
//                 <div style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
//                 }} />
//               </SwiperSlide>
//             )
//         )}
//       </Swiper>
//     </div>
//   );
// }