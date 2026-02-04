import React from "react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-center">
      <div className="text-9xl text-white">
        <i className="ri-arrow-right-up-line"></i>
        <HeroText />
        <Arrow />
      </div>
    </div>
  );
};

export default LeftContent;
