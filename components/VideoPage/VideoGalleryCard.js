import React from "react";

const GalleryCard = ({ src, head, sm }) => {
  return (
    <div className="lg:w-[290px] md:w-[290px] w-[290px]  lg:mx-2 sm:mx-3 mx-1 my-6  mr-5 border-[15px] bg-[#F0F5F6] border-[#F0F5F6] rounded-lg ">
      <img
        src={`/assets/slide${src}.png`}
        alt=""
        className="w-full lg:h-[200px] h-[200px] rounded-md "
      />
      <div className="flex justify-between">
        <div className="flex flex-col py-4">
          <h1 className="lg:text-xl text-base  font-semibold">{head}</h1>
          <h2 className="text-black font-light text-sm pt-1 ">
            15 September 2020
          </h2>
        </div>
        <div className="text-[#FF0100] text-4xl mt-7">
          <img src={`/assets/${sm}.png`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
