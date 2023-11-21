import React from "react";

const InspectionSingle2 = ({
  inspectionTitle,
  bookmark,
  options,
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
          {options.map((field, index) => {
            if (index < Math.round(Math.ceil(options.length / 2))) {
              return (
                <Dropdown
                  field={field.fieldname}
                  title={field.label}
                  value={field.value}
                  handleChange={(newValue) =>
                    handleDataChange(field.fieldname, index, newValue)
                  }
                  values={field.values}
                />
              );
            }
            return undefined;
          })}
        </div>
        <div className="w-full">
          {options.map((field, index) => {
            if (index >= Math.round(Math.ceil(options.length / 2))) {
              return (
                <Dropdown
                  title={field.label}
                  value={field.value}
                  handleChange={(newValue) =>
                    handleDataChange(field.fieldname, index, newValue)
                  }
                  values={field.values}
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

const Dropdown = ({ title, value, handleChange, values }) => {
  let selectTailwind =
    "w-full mb-2 flex justify-between items-center px-5 border-2 border-gray-100 p-2  ";
  if (values.indexOf(value) === 0) {
    selectTailwind += "text-green-500";
  } else if (values.indexOf(value) === values.length - 1) {
    selectTailwind += "text-red-500";
  } else {
    selectTailwind += "text-yellow-400";
  }
  return (
    <div className={selectTailwind}>
      <span className="text-sm text-gray-600 w-1/2">{title}</span>
      <select
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        className="outline-none border-none bg-gray-100 p-2 rounded-md  w-1/2"
        value={value}
      >
        {values &&
          values.map((op, index) => {
            let optionTailwind = "";
            if (index === 0) {
              optionTailwind += "text-green-500";
            } else if (index === values.length - 1) {
              optionTailwind += "text-red-500";
            } else {
              optionTailwind += "text-yellow-500";
            }
            return (
              <option className={optionTailwind} value={op}>
                {op}
              </option>
            );
          })}
      </select>
    </div>
  );
};
