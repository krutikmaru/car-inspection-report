import React from "react";

export const Details = () => {
  const details = [
    { name: "Make", value: "Lamborghini" },
    { name: "Model", value: "Huracan" },
    { name: "Trim", value: "Other" },
    { name: "Year", value: "2020" },

    { name: "Odometer Reading (KM)", value: "249724" },
    { name: "Registered Emirates", value: "Dubai" },
    { name: "Engine CC", value: "3.7" },
    { name: "Engine no. of cylinders", value: "10" },

    { name: "Horsepower (in BHP)", value: "471" },
    { name: "Body Type", value: "Sports" },
    { name: "Specs", value: "GCC Specs" },
    { name: "Transmission Type", value: "7-speed automatic" },

    { name: "Fuel Type", value: "Petrol" },
    { name: "Color", value: "White" },
    { name: "Warranty Available", value: "Yes" },
    { name: "Service Contract Available", value: "No" },

    { name: "Service History", value: "Partial" },
    { name: "No. of Keys", value: "2" },
    { name: "Mortgage", value: "No" },
  ];
  return (
    <div className="mt-10 ">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">Car Details</h1>
      </div>
      <div className="w-full md:min-h-[380px] mt-5 grid grid-cols-2 lg:grid-cols-4 justify-center items-start  ">
        {details.map((detail) => {
          return (
            <div className="p-10 border-[1px] border-gray-100">
              <div className="text-gray-500 text-sm">{detail.name}</div>
              <div className="text-lg">{detail.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
