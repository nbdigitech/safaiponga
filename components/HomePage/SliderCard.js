import React from "react";

const SliderCard = ({ src, text }) => {
  return (
    <div className="w-[300px] lg:h-[260px] h-[230px]  mr-5  ">
      <img
        src={`/assets/slide${src}.png`}
        alt=""
        className="w-full h-full rounded-lg"
      />
    </div>
  );
};

export default SliderCard;
