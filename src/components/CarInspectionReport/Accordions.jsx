import React, { useState } from "react";

const Accordions = () => {
  const accordionsData = [
    {
      title: "Krutik",
      percentage: 80,
      details: [
        {
          title: "Maru",
          value: "Meera",
          isCritical: false,
        },
        {
          title: "Mr",
          value: "Bean",
          isCritical: true,
        },
      ],
    },
    {
      title: "Meera",
      percentage: 80,
      details: [
        {
          title: "Haria",
          value: "Meera",
          isCritical: false,
        },
        {
          title: "Mr",
          value: "Bean",
          isCritical: true,
        },
      ],
    },
  ];
  return (
    <div className="mt-10 ">
      {/* Scores⬇️ */}
      <div className="w-full md:min-h-[380px]  p-5 rounded-md ">
        {accordionsData.map((accData) => {
          return (
            <Accordion
              title={accData.title}
              percentage={accData.percentage}
              details={accData.details}
            />
          );
        })}
      </div>
    </div>
  );
};

const Accordion = ({ title, percentage, details }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <>
      <div className="w-full h-16 mt-5 border-2 border-gray-300 rounded-md  flex justify-between items-center px-5">
        <div className="w-1/2 ">{title}</div>
        <div className="w-1/2 flex justify-end items-center space-x-5">
          <h1>{percentage}%</h1>
          {!isExpand ? (
            <span
              onClick={() => setIsExpand(true)}
              className="w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-dashed border-gray-500 cursor-pointer font-bold"
            >
              +
            </span>
          ) : (
            <span
              onClick={() => setIsExpand(false)}
              className="w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-dashed border-gray-500 cursor-pointer font-bold"
            >
              -
            </span>
          )}
        </div>
      </div>
      {isExpand && (
        <div className="w-full min-h-[40px] mt-2 flex flex-col justify-center items-center">
          {details.map((detail) => {
            const valueTailwind = detail.isCritical
              ? "text-red-500"
              : "text-green-500";
            return (
              <div className="w-[98%] min-h-[50px] border-2 border-gray-100 flex justify-between items-center px-5 text-sm mt-3">
                <h1 className="text-gray-700">{detail.title}</h1>
                <h1 className={valueTailwind}>{detail.value}</h1>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Accordions;
