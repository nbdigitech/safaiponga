import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
const Search = () => {
  return (
    <div className="flex justify-between sm:py-16 py-8 mx-6">
      <div className="bg-[#F0F5F6] border rounded-md lg:w-[88%] sm:w-[80%] w-[70%] h-16 sm:px-8 px-4 py-1 flex items-center">
        <span className="mr-2 sm:text-2xl text-lg text-[#006090]">
          <BiSearchAlt2 />
        </span>
        <input
          type="text"
          placeholder="Search by name or date"
          className="w-full h-full outline-none bg-[#F0F5F6]"
        />
      </div>
      <div className="bg-[#F0F5F6] border rounded-md lg:w-[10%] sm:w-[18%] w-[28%] h-16 px-8 py-1 flex items-center justify-center text-[#006090]">
        <span className="mr-2 sm:text-2xl text-xl">
          <FaFilter />
        </span>
        <h2>Filter</h2>
      </div>
    </div>
  );
};

export default Search;
