import React, { useEffect, useState } from "react";
import { CircularProgress } from "@chakra-ui/react";

export const Rating = () => {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setRating(90);
    }, 200);
  }, []);
  return (
    <div className="mt-10 ">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">
          Lamborghini Huracan
        </h1>
      </div>
      {/* Image and Rating ⬇️ */}
      <div className="w-full min-h-[380px] mt-5 flex justify-center items-center p-5 rounded-md border-2 border-gray-300 flex-col md:flex-row ">
        {/* Image ⬇️ */}
        <div className="w-full min-h-[380px] relative rounded-md overflow-hidden md:w-1/2 mb-10 md:mb-0">
          <img
            src="/assets/lamborghini.jpeg"
            alt="Lamborghini Huracan"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full flex justify-center items-center md:w-1/2 relative">
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-gray-600">Overall Rating</span>
            <span className="text-3xl font-semibold text-carzilla-purple-primary">
              {rating / 10}/10
            </span>
          </div>
          <CircularProgress value={rating} size="100%" color="#524edd" />
        </div>
      </div>
    </div>
  );
};
