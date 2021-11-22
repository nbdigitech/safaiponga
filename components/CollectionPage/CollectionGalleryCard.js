import React from "react";

const CollectionGalleryCard = ({ src }) => {
  return (
    <div
      className="lg:w-[440px] sm:w-[290px] w-[140px] lg:h-[180px] sm:h-[160px]
     h-[270px] hover:bg-[#d7ecf0] bg-[#F0F5F6] p-4 lg:mx-8 sm:mx-4 mx-2  my-2 flex sm:flex-row flex-col  "
    >
      <div className="lg:w-[180px] w-[110px] lg:h-[120px] h-[100px] rounded-md">
        <img
          src={`/assets/slide${src}.png`}
          alt=""
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="sm:px-4">
        <h1 className="text-red-600 font-semibold lg:text-xl sm:text-lg text-base">
          Collection Name
        </h1>
        <div className="pt-3">
          <h2 className="text-sm font-light">Photos: 20 </h2>
          <h2 className="text-sm font-light">Videos: 5 </h2>
          <h2 className="text-sm font-light">Documents: 25 </h2>
        </div>
      </div>
    </div>
  );
};

export default CollectionGalleryCard;

// push
