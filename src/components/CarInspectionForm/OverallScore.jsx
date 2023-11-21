import React from "react";

export const OverallScore = ({ data }) => {
  return (
    <div className="mt-10 " id="overall-score">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">Overall Score</h1>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-start p-5 rounded-md border-2 border-gray-100  ">
        <div className="w-full">
          {data.fields.map((field, index) => {
            if (index < 5) {
              let maxScore = 0;
              for (const option of field.options) {
                maxScore += option.totalFields;
              }
              let total = 0;
              for (const option of field.options) {
                total += option.score;
              }

              return (
                <InputFieldNumber
                  // field={field}
                  value={`${Math.round((total / maxScore) * 100)}%`}
                  title={field.label}
                />
              );
            }
            return undefined;
          })}
        </div>
        <div className="w-full">
          {data.fields.map((field, index) => {
            if (index >= 5) {
              let maxScore = 0;
              for (const option of field.options) {
                maxScore += option.totalFields;
              }
              let total = 0;
              for (const option of field.options) {
                total += option.score;
              }
              return (
                <InputFieldNumber
                  // field={field}
                  value={`${Math.round((total / maxScore) * 100)}%`}
                  title={field.label}
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

const InputFieldNumber = ({ value, title }) => {
  return (
    <div className="w-full mb-2">
      <span className="text-sm ml-2 text-gray-400">{title}</span>
      <input
        value={value}
        className="w-full h-10 bg-[#f6f5f5] border-none outline-none p-3 rounded-md"
        disabled
        max={100}
        min={0}
      />
    </div>
  );
};
