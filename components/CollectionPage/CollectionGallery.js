import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import CollectionGalleryCard from "./CollectionGalleryCard";
const CollectionGallery = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-wrap">
        <CollectionGalleryCard src="1" />
        <CollectionGalleryCard src="2" />
        <CollectionGalleryCard src="3" />
        <CollectionGalleryCard src="4" />
        <CollectionGalleryCard src="5" />
        <CollectionGalleryCard src="6" />
      </div>
      <div className=" ml-6 text-white flex justify-center">
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

export default CollectionGallery;
