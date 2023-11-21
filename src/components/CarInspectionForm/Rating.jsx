import React, { useState } from "react";

export const Rating = () => {
  const [rating, setRating] = useState(0);
  const handleRatingChange = (e) => {
    if (e.target.value < 0 || e.target.value > 10) {
      setRating(0);
      return;
    }
    setRating(e.target.value);
  };
  return (
    <div className="mt-10 ">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold ">
          Overall Rating
        </h1>
      </div>
      <div className="w-full mt-5 flex flex-col justify-start items-center p-5 rounded-md border-2 border-gray-100  ">
        <div className="w-full">
          <span className="text-sm ml-2 text-gray-400">Overall rating</span>
          <input
            type="number"
            value={rating}
            className="w-full h-10 bg-[#f6f5f5] border-none outline-none p-3 rounded-md"
            placeholder="Enter rating"
            max={10}
            onChange={(e) => handleRatingChange(e)}
          />
        </div>
      </div>
    </div>
  );
};
