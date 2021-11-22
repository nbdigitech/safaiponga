import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import VideoGalleryCard from "./VideoGalleryCard";
const Gallery = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-wrap">
        <VideoGalleryCard src="1" head="Schools Replenish Nature" sm="yt" />
        <VideoGalleryCard
          src="2"
          head="Volunteer Swachhta Services"
          sm="insta"
        />
        <VideoGalleryCard src="3" head="Volunteer Swachhta Services" sm="fb" />
        <VideoGalleryCard src="4" head="Greener Societies" sm="yt" />
        <VideoGalleryCard src="5" head="Schools Replenish Nature" sm="yt" />
        <VideoGalleryCard
          src="6"
          head="Volunteer Swachhta Services"
          sm="insta"
        />
        <VideoGalleryCard src="7" head="Volunteer Swachhta Services" sm="fb" />
        <VideoGalleryCard src="8" head="Greener Societies" sm="yt" />
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

export default Gallery;
