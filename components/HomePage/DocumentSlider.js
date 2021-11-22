import React from "react";
import DocumentCard from "./DocumentCard";
import { FaArrowRight } from "react-icons/fa";

const DocumentSlider = () => {
  return (
    <div>
      <div className="text-[#006090] flex justify-between">
        <h1 className="font-bold text-xl">Latest Documents</h1>
        <h2 className="font-light text-lg">{`View All >`} </h2>
      </div>
      <div>
        <div className="overflow-x-auto py-10 mt-10">
          <div className="h-full  w-[2000px] flex items-center">
            <DocumentCard head="Swachh Survekshan Report 2021" />
            <DocumentCard head="List of Clean Up Drives in Chhattisgarh" />
            <DocumentCard head="Environmental Report - Chhattisgarh Q3 2020" />
            <DocumentCard head="Swachh Survekshan Report 2020" />
            <DocumentCard head="Swachh Survekshan Report 2021" />
            <DocumentCard head="List of Clean Up Drives in Chhattisgarh" />
            <div className="w-[250px] h-[260px] bg-gray-300 rounded-lg  mr-5 flex justify-center items-center pointer ">
              <div className="text-[#597E86]">
                <span className="text-5xl flex justify-center pb-4 -m-l-4">
                  <FaArrowRight />
                </span>
                <h2 className="text-xl text-center font-semibold">
                  View All Documents
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentSlider;
