import React, { useState } from "react";

export const OverallScore = () => {
  const fields = [
    "exterior_body_damage_diagram",
    "steering_suspension_brakes",
    "car_specs",
    "front_right_wheel_tyre",
    "rear_left_wheel_tyre",
    "engine_transmission",
    "interior_electricals_airconditioner",
    "front_left_wheel_tyre",
    "rear_right_wheel_tyre",
    "spare_wheel_tyre",
  ];
  const [overallScore, setOverallScore] = useState({
    exterior_body_damage_diagram: {
      title: "Exterior body damage diagram",
      value: 0,
    },
    steering_suspension_brakes: {
      title: "Steering suspension brakes",
      value: 0,
    },
    car_specs: {
      title: "Car specs",
      value: 0,
    },
    front_right_wheel_tyre: {
      title: "Front right wheel & tyre",
      value: 0,
    },
    rear_left_wheel_tyre: {
      title: "Rear left wheel tyre",
      value: 0,
    },
    engine_transmission: {
      title: "Engine transmission",
      value: 0,
    },
    interior_electricals_airconditioner: {
      title: "Interior electricals air conditioner",
      value: 0,
    },
    front_left_wheel_tyre: {
      title: "Front left wheel tyre",
      value: 0,
    },
    rear_right_wheel_tyre: {
      title: "Rear right wheel tyre",
      value: 0,
    },
    spare_wheel_tyre: {
      title: "Spare wheel tyre",
      value: 0,
    },
  });
  const handleOverallScoreChange = (field, newValue) => {
    if (newValue < 0 || newValue > 100) {
      setOverallScore({
        ...overallScore,
        [field]: {
          title: overallScore[field].title,
          value: 0,
        },
      });

      return;
    }

    setOverallScore({
      ...overallScore,
      [field]: {
        title: overallScore[field].title,
        value: newValue,
      },
    });
  };
  return (
    <div className="mt-10 " id="overall-score">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">Overall Score</h1>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-start p-5 rounded-md border-2 border-gray-100  ">
        <div className="w-full">
          {fields.map((field, index) => {
            if (index < 5) {
              return (
                <InputFieldNumber
                  field={field}
                  value={overallScore[field].value}
                  title={overallScore[field].title}
                  handleOverallScoreChange={handleOverallScoreChange}
                />
              );
            }
            return undefined;
          })}
        </div>
        <div className="w-full">
          {fields.map((field, index) => {
            if (index >= 5) {
              return (
                <InputFieldNumber
                  field={field}
                  value={overallScore[field].value}
                  title={overallScore[field].title}
                  handleOverallScoreChange={handleOverallScoreChange}
                />
              );
            }
            return undefined;
          })}
        </div>
      </div>
    </div>
  );
};

const InputFieldNumber = ({
  field,
  value,
  title,
  handleOverallScoreChange,
}) => {
  return (
    <div className="w-full mb-2">
      <span className="text-sm ml-2 text-gray-400">{title}</span>
      <input
        value={value}
        type="number"
        className="w-full h-10 bg-[#f6f5f5] border-none outline-none p-3 rounded-md"
        onChange={(e) => handleOverallScoreChange(field, e.target.value)}
        max={100}
        min={0}
      />
    </div>
  );
};
