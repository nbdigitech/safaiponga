import React from "react";
import { AiFillStar } from "react-icons/ai";

const DocGalleryCard = ({ head }) => {
  return (
    <div>
      <div className="lg:w-[280px] sm:w-[210px] w-[150px] lg:h-[280px] sm:h-[300px] h-[270px] hover:bg-[#d7ecf0] bg-[#F0F5F6] lg:mx-8 sm:mx-4 mx-1 my-4  ">
        <div className="flex w-full justify-end">
          <div className="w-24 h-6 bg-white rounded-bl-lg flex justify-center items-center text-xs font-light">
            {" "}
            <span className="mr-2">
              <AiFillStar />
            </span>
            category
          </div>
        </div>
        <div className="sm:py-8 py-2 px-4 ">
          <h1 className="sm:text-xl text-lg font-semibold pt-6">{head}</h1>
          <button className="border-dashed sm:text-base text-sm border-2 mb-4 border-[#006090] sm:px-4 px-2 py-2 mt-2 flex hover:bg-white hover:border-0">
            <img src="/assets/download.png" alt="" className="sm:mr-4 mr-1" />
            Download PDF
          </button>
          <button className="border-dashed sm:text-base text-sm border-2 border-[#006090] sm:px-4 px-2 py-2 mt-2 flex hover:bg-white hover:border-0">
            <img src="/assets/read.png" alt="" className="sm:mr-4 mr-1" />
            Read Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocGalleryCard;
