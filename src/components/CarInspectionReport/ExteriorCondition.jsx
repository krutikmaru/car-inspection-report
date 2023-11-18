import React from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";

export const ExteriorCondition = () => {
  const { activatePopupCenter } = useApplicationManager();
  const points = [
    {
      number: "1",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 5,
      left: 47,
    },
    {
      number: "2",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 15,
      left: 47,
    },
    {
      number: "3",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 15,
      left: 10,
    },
    {
      number: "4",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 15,
      left: 90,
    },
    {
      number: "5",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 45,
      left: 47,
    },
    {
      number: "6",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 45,
      left: 10,
    },
    {
      number: "7",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 45,
      left: 90,
    },
    {
      number: "8",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 70,
      left: 10,
    },
    {
      number: "9",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 70,
      left: 90,
    },
    {
      number: "10",
      title: "Title",
      pointDetails: ["Scratch", "Dent"],
      top: 70,
      left: 47,
    },
  ];
  return (
    <div className="mt-10 ">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">Car Details</h1>
      </div>
      <div className="w-[100%] sm:w-[80%] lg:w-[60%]   mx-auto mt-10 p-5     rounded-md relative">
        <img
          src="/assets/car-skeleton.png"
          alt="Lamborghini Huracan"
          className="w-full h-auto object-fill rounded-md"
        ></img>
        {points.map((point) => {
          const tailwind = `absolute w-5 h-5 sm:w-8 sm:h-8 text-xs sm:text-sm flex justify-center items-center cursor-pointer opacity-70 bg-carzilla-purple-primary text-white rounded-full left-[${point.left}%] top-[${point.top}%]`;
          return (
            <div
              className={tailwind}
              onClick={() =>
                activatePopupCenter(
                  <PointDetailsPanel
                    number={point.number}
                    title={point.title}
                    pointDetails={point.pointDetails}
                  />
                )
              }
            >
              {point.number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PointDetailsPanel = ({ number, title, pointDetails }) => {
  console.log(pointDetails);
  const { deactivatePopupCenter } = useApplicationManager();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[80%] h-[80%] rounded-md overflow-hidden bg-white p-10 relative overflow-y-scroll"
    >
      <div
        className="absolute top-10 right-10 underline cursor-pointer"
        onClick={deactivatePopupCenter}
      >
        Back
      </div>
      <div className="flex space-x-5 items-center">
        <h1 className="text-xl">{number}</h1>
        <h1 className="text-3xl">{title}</h1>
      </div>
      <div className="mt-10 px-5">
        <ul>
          {pointDetails.map((pointDetail) => (
            <li className="text-xl list-disc text-gray-700" key={number}>
              {pointDetail}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[400px] mt-5 relative rounded-lg overflow-hidden">
        <img
          src="/assets/lamborghini.jpeg"
          alt="Lamborghini Huracan"
          className=" w-full h-full object-cover"
        ></img>
      </div>
    </div>
  );
};
