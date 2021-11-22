import React from "react";
import VideoGallery from "./VideoGallery";
const VideoHome = () => {
  return (
    <div>
      <div className=" border-b border-[#006090]">
        <h1 className="text-3xl sm:pl-10 pl-2 font-semibold text-[#006090]">
          November 2021
        </h1>
        <VideoGallery />
      </div>
      {/* <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          October 2021
        </h1>
        <VideoGallery />
      </div>
      <div className=" py-10 border-b border-[#006090]">
        <h1 className="text-3xl pl-10 font-semibold text-[#006090]">
          September 2021
        </h1>
        <VideoGallery />
      </div> */}
    </div>
  );
};

export default VideoHome;
