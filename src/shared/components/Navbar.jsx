import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { GiFilmSpool } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-full z-100 flex group ">
    <div className="flex flex-col gap-11.25 fixed top-0 left-0 h-full z-100 pl-6 text-[30px] text-white w-25 hover:w-40 
                bg-linear-to-r from-[#161719] to-transparent justify-center transition-[width] duration-500">

      <TiHome/>
      <IoSearch/>
      <PiFilmSlateBold/>
      <GiFilmSpool/>
    </div>
    <div className="flex items-center ml-17 opacity-0 w-40 translate-x-[-90px]   group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-900">
      <ul className="text-white flex flex-col gap-11.25 text-[18px] ">
        <li>Home</li>
         <li>Search</li>
          <li>Movies</li>
           <li>Series</li> 
      </ul>
    </div>
    </div>
  )
}

export default Navbar