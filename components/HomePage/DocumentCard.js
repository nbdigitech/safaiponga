import React from "react";
import { AiFillStar } from "react-icons/ai";
const DocumentCard = ({ head, link }) => {
  return (
    <div>
      <div className="w-[250px] h-[280px] hover:bg-[#d7ecf0] bg-[#F0F5F6] mr-5  ">
        <div className="flex w-full justify-end">
          <div className="w-24 h-6 bg-white rounded-bl-lg flex justify-center items-center text-xs font-light">
            {" "}
            <span className="mr-2">
              <AiFillStar />
            </span>
            category
          </div>
        </div>
        <div className="py-8 px-4">
          <h1 className="text-xl font-semibold pb-4">{head}</h1>
          <a href={link}>
            <button className="border-dashed border-2 border-[#006090] px-4 py-2 mt-2 flex">
              <img src="/assets/download.png" alt="" className="mr-4" />
              Download PDF
            </button>
          </a>
          <button className="border-dashed border-2 border-[#006090] px-4 py-2 mt-2 flex">
            <img src="/assets/read.png" alt="" className="mr-4" />
            Read Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
