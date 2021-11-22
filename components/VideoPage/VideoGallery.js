import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import VideoGalleryCard from "./VideoGalleryCard";
const Gallery = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-wrap">
        <VideoGalleryCard
          src="1"
          head="Vaccines are here to protect you"
          sm="yt"
          link="https://www.youtube.com/embed/hoyHZ9Apd58"
        />
        <VideoGalleryCard
          src="2"
          head="Stories of Swachhta DiDi - Parmila Narang"
          sm="insta"
          link="https://www.youtube.com/embed/ZwNABMXi9l8"
        />
        <VideoGalleryCard
          src="3"
          head="Stories of Swachhta DiDi - Kaushlya Nishad"
          sm="fb"
          link="https://www.youtube.com/embed/k20fA1nCMYU"
        />
        <VideoGalleryCard
          src="4"
          head="Stories of Swachhta DiDi - Rajni Chouhan"
          sm="yt"
          link="https://www.youtube.com/embed/abwEvz9Y0rY"
        />
        <VideoGalleryCard
          src="5"
          head="WASTE SEGREGATION NUKKAD NATAK"
          sm="yt"
          link="https://www.youtube.com/embed/lmcxAXayQqo"
        />
        <VideoGalleryCard
          src="6"
          head="Chhattisgadhiya Sable Badiya Flash Mob"
          sm="insta"
          link="https://www.youtube.com/embed/Uo-mFuFdv0I"
        />
        <VideoGalleryCard
          src="7"
          head="SUNA SUNA - CHHATTISGARHI IEC SONG"
          sm="fb"
          link="https://www.youtube.com/embed/QLfjs8Xh41U"
        />
        <VideoGalleryCard
          src="8"
          head="Chhattisgarh's Swachhta Song 'Chhattisgadhiya Sable Badiya' Ft. Shankar Mahadevan
"
          sm="yt"
          link="https://www.youtube.com/embed/xT5KBIZhi3A"
        />
      </div>
      {/* <div className=" ml-6 text-white flex justify-center">
        <button
          className="inline-flex items-center border-2  border-[#597E86] font-semibold  lg:py-2 py-[5px] px-6  pr-6 hover:pr-10
         focus:outline-none text-base text-[#597E86] hover:text-white hover:bg-[#597E86] mt-4 md:mt-0"
        >
          Load More
          <span className="font-bold text-xl mt-[2px] ml-1">
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div> */}
    </div>
  );
};

export default Gallery;
