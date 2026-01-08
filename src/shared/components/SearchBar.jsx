import { IoIosSearch } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";

const SearchBar = ({query, handleChange}) => {

  return (
    <div >
      <div className=" relative text-white" >
        <input
          type="text"
          placeholder="Search for a movie, tv show...."
          className=" p-5 bg-[rgb(38_40_51)] rounded-[10px] w-full text-white text-[18px] outline-none"
          onChange={handleChange}
          value={query}
          
        />
        
        <button
          type="button"
           className="text-4xl absolute bottom-4.5 right-4 "
        >
          <IoIosSearch  />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
