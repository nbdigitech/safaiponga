import React from "react";
import DocGallery from "./DocGallery";

const DocumentHome = () => {
  return (
    <div>
      <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          November 2021
        </h1>
        <DocGallery />
      </div>
      {/* <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          October 2021
        </h1>
        <DocGallery />
      </div>
      <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          September 2021
        </h1>
        <DocGallery />
      </div> */}
    </div>
  );
};

export default DocumentHome;
