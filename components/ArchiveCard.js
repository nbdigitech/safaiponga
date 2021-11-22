import React from "react";

const ArchiveCard = ({ month }) => {
  return (
    <div className="lg:w-[350px] w-[130px]">
      <h1 className="lg:text-xl text-base pb-1  font-semibold text-[rgb(59,141,183)]">
        {month} 2021
      </h1>
      <p>25 Photos</p>
    </div>
  );
};

export default ArchiveCard;
