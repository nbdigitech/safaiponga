import React from "react";
import ArchiveCard from "./ArchiveCard";

const ARchive = () => {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-semibold text-[#006090] pb-4 ">Archives</h1>
      <div className="sm:block hidden text-[#bfe2f4] space-x-8 text-xl font-semibold px-16">
        <span className="text-[#006090]">2021</span>
        <span>2020</span>
        <span>2019</span>
        <span>2018</span>
        <span>2017</span>
        <span>2016</span>
      </div>
      <div className="sm:space-y-6 py-4">
        <div className="flex justify-center items-center flex-wrap">
          <ArchiveCard month="January" />
          <ArchiveCard month="Febrauary" />
          <ArchiveCard month="March" />
          <ArchiveCard month="April" />
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <ArchiveCard month="May" />
          <ArchiveCard month="June" />
          <ArchiveCard month="July" />
          <ArchiveCard month="August" />
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <ArchiveCard month="September" />
          <ArchiveCard month="October" />
          <ArchiveCard month="November" />
          <ArchiveCard month="December" />
        </div>
      </div>
    </div>
  );
};

export default ARchive;
