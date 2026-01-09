// import useCompanies from '../hooks/useCompanies'

// const MovieCompanies = () => {
//   const companies = useCompanies();

//   return (
//     <div className="grid lg:grid-cols-6 grid-cols-3 lg:gap-2 gap-2 px-3 lg:px-21">
//       {companies
//         .filter(c => c.logo_path)
//         .map((c) => (
//           <a
//             key={c.id}
//             href={c.homepage || '#'}  
//             target="_blank"           
//             rel="noopener noreferrer" 
//             className="bg-[rgb(28,30,33)]  h-[5px] w-[180px] lg:h-[125px] lg:w-[210px] rounded-lg flex items-center justify-center p-[60px] hover:opacity-80 transition-opacity"
//           >
//             <img
//               src={`https://image.tmdb.org/t/p/w200${c.logo_path}`}
//               alt={c.name}
//               className="object-contain filter invert  "
//             />
//           </a>
//         ))}
//     </div>
//   );
// }

// export default MovieCompanies;


import useCompanies from '../hooks/useCompanies'

const MovieCompanies = () => {
  const companies = useCompanies();

  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 px-3 lg:px-20">
  {companies
    .filter(c => c.logo_path)
    .map((c) => (
      <a
        key={c.id}
        href={c.homepage || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[rgb(28,30,33)]
          aspect-video
          rounded-lg
          flex items-center justify-center
          p-3 lg:p-6
          hover:opacity-80
          transition-opacity
        "
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${c.logo_path}`}
          alt={c.name}
          className="max-w-[60px] 
    lg:max-w-[90px]
    max-h-[40px]
    lg:max-h-[60px]
    object-contain
    filter invert"
        />
      </a>
    ))}
</div>

  );
}

export default MovieCompanies;
