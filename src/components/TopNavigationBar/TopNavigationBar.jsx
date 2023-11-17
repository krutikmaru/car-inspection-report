import React from "react";

const TopNavigationBar = () => {
  return (
    <div className="w-full h-20 bg-carzilla-purple-primary flex items-center px-10 justify-between">
      {/* Logo ⬇️ */}
      <div className="h-full w-[50%] flex justify-start items-center relative">
        <img
          src="/assets/carzilla.png"
          alt="Carzilla"
          className="absolute top-1/2 -translate-y-1/2 left-0 h-[70%] object-cover "
        />
      </div>
      {/* Links ⬇️ */}
      <div className="h-full w-[50%] flex justify-end items-center relative space-x-7 font-semibold text-white text-sm">
        <span className="text-yellow-500">Home</span>
        <span>Buy Your Car</span>
      </div>
    </div>
  );
};

export default TopNavigationBar;
