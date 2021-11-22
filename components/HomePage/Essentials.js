import React from "react";

const Essentials = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse pt-10 sm:pb-10 pb-0 border-b-2 border-[#C4D2D6] mb-10">
      <div className="flex flex-col flex-1 sm:pt-10 pb-4 py-6 font-bold lg:text-7xl md:text-5xl  text-3xl  space-y-2">
        <h1 className="text-[#006090]">Swachhta Essentials</h1>
        <h2 className="pt-6 lg:text-lg text-base text-gray-500 font-normal">
          Swachh Survekshan is an annual survey of cleanliness, hygiene and
          sanitation in cities and towns across India. It was launched as part
          of the Swachh Bharat Abhiyan, which aimed to make India clean and free
          of open defecation by 2nd October 2019. The first survey was
          undertaken in 2016 and covered 73 cities; by 2020 the survey had grown
          to cover 4242 cities and was said to be the largest cleanliness survey
          in the world.
        </h2>
        <div className="sm:flex sm:justify-start pt-6 justify-center">
          <button className="py-2 px-6 border-2 border-[#597E86] sm:text-xl text-base  text-[#597E86]">
            Download the Swachhta Docket
          </button>
        </div>
      </div>
      <div className="flex flex-1  sm:pt-10 pb-4 py-6 justify-center items-center sm:ml-10">
        <img src="/assets/video.png" alt="" />
      </div>
    </div>
  );
};

export default Essentials;
