import React from "react";

export const Rating = ({ data }) => {
  let maxScore = 0;
  let total = 0;
  data.fields.map((field) => {
    for (const option of field.options) {
      maxScore += option.totalFields;
    }
    for (const option of field.options) {
      total += option.score;
    }
    return undefined;
  });
  const rating = Math.round((total / maxScore) * 100) / 10;
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
            disabled
            value={`${rating}/10`}
            className="w-full h-10 bg-[#f6f5f5] border-none outline-none p-3 rounded-md"
            placeholder="Enter rating"
            max={10}
          />
        </div>
      </div>
    </div>
  );
};
