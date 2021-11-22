import React from "react";
import SliderText from "./SliderText";
import SliderCard from "./SliderCard";
import { FaArrowRight } from "react-icons/fa";
const Slider = () => {
  return (
    <div>
      <div className="text-[#006090] flex justify-between">
        <h1 className="font-bold text-xl">Latest Images</h1>
        <h2 className="font-light text-lg">{`View All >`} </h2>
      </div>
      <div className="flex sm:flex-row flex-col  sm:space-y-0 space-y-8  pt-8">
        <SliderText />
        <SliderText />
        <SliderText />
      </div>
      <div>
        <div className="overflow-x-auto py-10 sm:mt-10">
          <div className="h-full  w-[1700px] flex items-center">
            <SliderCard src="1" />
            <SliderCard src="9" />
            <SliderCard src="3" />
            <SliderCard src="4" />
            <SliderCard src="5" />
            <SliderCard src="6" />
            <div className="w-[250px] h-[260px] bg-gray-300 rounded-lg  mr-5 flex justify-center items-center pointer ">
              <div className="text-[#597E86]">
                <span className="text-5xl flex justify-center pb-4 -m-l-4">
                  <FaArrowRight />
                </span>
                <h2 className="text-xl text-center font-semibold">
                  View All Images
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
