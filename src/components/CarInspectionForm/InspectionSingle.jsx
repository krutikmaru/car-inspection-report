import React from "react";

const InspectionSingle2 = ({
  inspectionTitle,
  fields,
  data,
  bookmark,
  handleDataChange,
}) => {
  return (
    <div className="mt-10 " id={bookmark}>
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">
          {inspectionTitle}
        </h1>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-start p-5 rounded-md border-2 border-gray-100  ">
        <div className="w-full">
          {fields.map((field, index) => {
            if (index < Math.round(Math.ceil(fields.length / 2))) {
              return (
                <Dropdown
                  field={field}
                  title={data[field].title}
                  value={data[field].value}
                  handleChange={handleDataChange}
                  options={data[field].values}
                />
              );
            }
            return undefined;
          })}
        </div>
        <div className="w-full">
          {fields.map((field, index) => {
            if (index >= Math.round(Math.ceil(fields.length / 2))) {
              return (
                <Dropdown
                  field={field}
                  title={data[field].title}
                  value={data[field].value}
                  handleChange={handleDataChange}
                  options={data[field].values}
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

export default InspectionSingle2;

const Dropdown = ({ field, title, value, handleChange, options }) => {
  let selectTailwind =
    "w-full mb-2 flex justify-between items-center px-5 border-2 border-gray-100 p-2 ";
  if (value === "good") {
    selectTailwind += "text-green-500";
  } else if (value === "moderate") {
    selectTailwind += "text-yellow-500";
  } else if (value === "notGood") {
    selectTailwind += "text-red-500";
  } else {
    selectTailwind += "text-gray-400";
  }
  return (
    <div className={selectTailwind}>
      <span className="text-sm text-gray-600">{title}</span>
      <select
        name="cars"
        id="cars"
        onChange={(e) => handleChange(field, e.target.value)}
        className="outline-none border-none bg-gray-100 p-2 rounded-md"
        value={value}
      >
        {options &&
          options.map((op) => {
            return <option value={op}>{op}</option>;
          })}
        <option value="good" className="text-green-500">
          Good
        </option>
        <option value="moderate" className="text-yellow-500">
          Moderate
        </option>
        <option value="notGood" className="text-red-500">
          Not Good
        </option>
        <option value="NA" className="text-gray-400">
          N/A
        </option>
      </select>
    </div>
  );
};
