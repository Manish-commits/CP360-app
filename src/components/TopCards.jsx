/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const TopCards = ({ data }) => {
  const { imgSrc, cardTitle, count, chartImg, profit, loss } = data;

  return (
    <div className="flex justify-center items-center gap-2 bg-white rounded-[5px] px-2 py-4 shadow-sm" > 
      <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center aspect-square">
        <img src={imgSrc} alt="image-logo" className="w-[30px] h-[30px]" />
      </div>
      <div className="w-full whitespace-nowrap text-[14px]">
        <p className="">{cardTitle}</p>
        <p className="text-[18px] text-purple-500 font-bold">{count}</p>
      </div>
      <div className="w-full text-[12px] text-end">
        <img src={chartImg} alt="image-logo" className="w-full min-w-[50px] " />
        <p className={profit ? 'text-purple-500' : 'text-red-500'}>{profit ? `+${profit}` : `-${loss}`}%</p>
      </div>
    </div>
  );
};

export default TopCards;
