import React from "react";
import CollectionGallery from "./CollectionGallery";

const CollectionHome = () => {
  return (
    <div>
      <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          November 2021
        </h1>
        <CollectionGallery />
      </div>
      {/* <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          October 2021
        </h1>
        <CollectionGallery />
      </div>
      <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          September 2021
        </h1>
        <CollectionGallery />
      </div> */}
    </div>
  );
};

export default CollectionHome;
