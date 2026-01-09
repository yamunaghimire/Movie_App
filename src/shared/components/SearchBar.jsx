import { IoIosSearch } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";

const SearchBar = ({query, handleChange}) => {

  return (
    <div >
      <div className=" relative text-white" >
        <input
          type="text"
          placeholder="Search for a movie, tv show...."
          className=" lg:p-5 p-4 bg-[rgb(38_40_51)] rounded-[10px] w-full text-white text-[18px] outline-none"
          onChange={handleChange}
          value={query}
          
        />
        
        <button
          type="button"
           className="lg:text-4xl text-3xl absolute lg:bottom-4.5 bottom-3.5 right-4 "
        >
          <IoIosSearch  />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
