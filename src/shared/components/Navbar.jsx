import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { GiFilmSpool } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed  lg:top-0 lg:left-0  bottom-0 left-0 right-0 h-10 lg:h-full   z-50 lg:flex group p-3 ">
      <div
        className="flex  lg:flex-col flex-row lg:gap-11.25 gap-8 lg:fixed lg:top-0  lg:h-full h-10 z-100 lg:pl-6  lg:text-[25px] text-[25px] text-white lg:w-25 w-full hover:w-40 
                bg-linear-to-r from-[#161719] to-transparent justify-between lg:justify-center transition-[width] duration-500"
      >
        <TiHome onClick={() => navigate("/")} className="cursor-pointer" />
        <IoSearch
          className="cursor-pointer"
          onClick={() => navigate("/search")}
        />
        <PiFilmSlateBold
          onClick={() => navigate("/movieslist")}
          className="cursor-pointer"
        />
        <GiFilmSpool
          onClick={() => navigate("/showslist")}
          className="cursor-pointer"
        />
        <BsBookmarkPlus
          className="cursor-pointer"
          onClick={() => navigate("/favourites")}
        />
      </div>
      <div
        className="flex items-center ml-16 opacity-0 w-40 translate-x-[-80px]   group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-900 "
      >
        <ul className="text-white flex flex-col gap-11.25 text-[16px] cursor-pointer transform transition-all duration-300 hover:scale-110 ">
          <li className="cursor-pointer pointer-events-auto">Home</li>
          <li className="cursor-pointer pointer-events-auto">Search</li>
          <li className="cursor-pointer pointer-events-auto">Movies</li>
          <li className="cursor-pointer pointer-events-auto">Series</li>
          <li className="cursor-pointer pointer-events-auto">Picks</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
