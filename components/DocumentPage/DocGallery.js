import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import DocGalleryCard from "./DocGalleryCard";
const DocGallery = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-wrap">
        <DocGalleryCard head="Swachh Survekshan Report 2021" />
        <DocGalleryCard head="List of Clean Up Drives in Chhattisgarh" />
        <DocGalleryCard head="Environmental Report - Chhattisgarh Q3 2020" />
        <DocGalleryCard head="Swachh Survekshan Report 2020" />
        <DocGalleryCard head="Swachh Survekshan Report 2021" />
        <DocGalleryCard head="List of Clean Up Drives in Chhattisgarh" />
        <DocGalleryCard head="Environmental Report - Chhattisgarh Q3 2020" />
        <DocGalleryCard head="Swachh Survekshan Report 2020" />
      </div>
      <div className=" ml-6 text-white flex justify-center mt-8">
        <button
          className="inline-flex items-center border-2  border-[#597E86] font-semibold  lg:py-2 py-[5px] px-6  pr-6 hover:pr-10
         focus:outline-none text-base text-[#597E86] hover:text-white hover:bg-[#597E86] mt-4 md:mt-0"
        >
          Load More
          <span className="font-bold text-xl mt-[2px] ml-1">
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DocGallery;
