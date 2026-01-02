import useCompanies from '../hooks/useCompanies'

const MovieCompanies = () => {
  const companies = useCompanies();

  return (
    <div className="grid grid-cols-6 gap-2 px-21 ">
      {companies
        .filter(c => c.logo_path)
        .map((c) => (
          <div
            key={c.id}
            className="bg-[rgb(28,30,33)] h-[125px] w-[210px] rounded-lg flex items-center justify-center p-[60px]"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${c.logo_path}`}
              alt={c.name}
              className="  object-contain filter invert"
            />
          </div>
        ))}
    </div>
  );
}

export default MovieCompanies;
