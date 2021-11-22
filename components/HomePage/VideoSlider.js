import React from "react";
import VideoSliderText from "./VideoSliderText";
import VideoCard from "./VideoCard";
import { FaArrowRight } from "react-icons/fa";
const VideoSlider = () => {
  return (
    <div>
      <div className="text-[#006090] flex justify-between">
        <h1 className="font-bold text-xl">Latest Videos</h1>
        <h2 className="font-light text-lg">{`View All >`} </h2>
      </div>
      <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-8 pt-8">
        <VideoSliderText />
        <VideoSliderText />
        <VideoSliderText />
      </div>
      <div>
        <div className="overflow-x-auto py-10 mt-10">
          <div className="h-full  w-[2000px] flex items-center">
            <VideoCard src="1" head="Schools Replenish Nature" sm="yt" />
            <VideoCard src="3" head="Volunteer Swachhta Services" sm="insta" />
            <VideoCard src="4" head="Volunteer Swachhta Services" sm="fb" />
            <VideoCard src="5" head="Greener Societies" sm="yt" />

            <div className="w-[300px] h-[300px] bg-gray-300 rounded-lg  mr-5 flex justify-center items-center pointer ">
              <div className="text-[#597E86]">
                <span className="text-5xl flex justify-center pb-4 -m-l-4">
                  <FaArrowRight />
                </span>
                <h2 className="text-xl text-center font-semibold">
                  View All Videos
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
