import React from "react";

const GalleryCard = ({ src, head, sm, link }) => {
  return (
    <div className="lg:w-[450px] md:w-[300px] w-[350px] h-[300px]  lg:mx-2 sm:mx-3 mx-1 my-6  sm:mr-5 border-[15px] bg-[#F0F5F6] border-[#F0F5F6] rounded-lg ">
      <iframe
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default GalleryCard;
