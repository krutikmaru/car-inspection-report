import React, { useEffect, useState } from "react";
import { OverallScore } from "./OverallScore";
import { Rating } from "./Rating";
import FloatingHelper from "./FloatingHelper";
import axios from "axios";
import InspectionSingle2 from "./InspectionSingle2";

const CarInspectionForm = () => {
  const [data, setData] = useState({ fields: [] });

  useEffect(() => {
    axios
      .get(
        "https://carzilla.m-fractal.com/api/method/czcustom.api.inspection.meta_getter?doctype=Car Inspection"
      )
      .then((res) => {
        const apiData = res.data.message
          .filter(
            (m) => m.fieldtype === "Select" || m.fieldtype === "Section Break"
          )
          .map((m) => {
            return {
              fieldname: m.fieldname,
              label: m.label,
              options: m.options,
            };
          })
          .splice(2);

        const structuredData = [];
        let currentField = null;

        for (const entry of apiData) {
          if (entry.options === "" || entry.options === "\n") {
            if (currentField) {
              structuredData.push(currentField);
            }
            currentField = {
              fieldname: entry.fieldname,
              label: entry.label,
              options: [],
            };
          } else {
            currentField.options.push({
              fieldname: entry.fieldname,
              label: entry.label,
              values: entry.options.trim().split("\n"),
              value: entry.options.trim().split("\n")[0],
              totalFields: entry.options
                .trim()
                .split("\n")
                .filter(
                  (value) =>
                    value !== "NA" && value !== "N/A" && value !== "#N/A"
                ).length,
              score: entry.options
                .trim()
                .split("\n")
                .filter(
                  (value) =>
                    value !== "NA" && value !== "N/A" && value !== "#N/A"
                ).length,
            });
          }
        }

        // Add the last field to the structured data
        if (currentField) {
          structuredData.push(currentField);
        }

        const result = { fields: structuredData };

        // Print or use the 'result' variable as needed
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDataChange = (
    categoryFieldName,
    categoryIndex,
    optionFieldName,
    optionIndex,
    newValue
  ) => {
    setData((prevData) => {
      const newData = { ...prevData };
      newData.fields[categoryIndex].options[optionIndex].value = newValue;
      newData.fields[categoryIndex].options[optionIndex].score =
        newData.fields[categoryIndex].options[optionIndex].totalFields -
        (newData.fields[categoryIndex].options[optionIndex].values.indexOf(
          newValue
        ) +
          1);
      // console.log(
      //   newData.fields[categoryIndex].options[optionIndex].totalFields
      // );
      // console.log(
      //   newData.fields[categoryIndex].options[optionIndex].values.indexOf(
      //     newValue
      //   )
      // );

      return newData;
    });
  };
  return (
    <div className="w-full min-h-screen pb-32 ">
      <div className="w-full min-h-screen">
        {data && (
          <FloatingHelper
            bookmarks={data.fields.map((field) => {
              return { bookmark: field.fieldname, title: field.label };
            })}
          />
        )}
        {data && <Rating data={data} />}
        {data && <OverallScore data={data} />}
        {!data ? (
          <h1>Loading</h1>
        ) : (
          <>
            {data.fields.map((category, index) => {
              return (
                <InspectionSingle2
                  handleDataChange={(optionFieldName, optionIndex, newValue) =>
                    handleDataChange(
                      category.fieldname,
                      index,
                      optionFieldName,
                      optionIndex,
                      newValue
                    )
                  }
                  inspectionTitle={category.label}
                  bookmark={category.fieldname}
                  options={category.options}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CarInspectionForm;
