import React from "react";

const GalleryCard = ({ src }) => {
  return (
    <div className="lg:mx-8 sm:mx-6 mx-4 my-6 lg:w-[300px] md:w-[180px] w-[130px] ">
      <img
        src={`/assets/slide${src}.png`}
        alt=""
        className="w-full lg:h-[200px] h-[150px] py-2 rounded-md "
      />
      <div className="flex flex-col">
        <h1 className="lg:text-xl text-lg text-[#597E86]">
          Gallery Name (25 photos)
        </h1>
        <h2 className="text-black font-extralight text-xs pt-1 ">
          Gallery description in a max of 50 characters or two lines
        </h2>
      </div>
    </div>
  );
};

export default GalleryCard;
