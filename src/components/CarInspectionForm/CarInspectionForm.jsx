import React, { useEffect, useState } from "react";
import { OverallScore } from "./OverallScore";
import { Rating } from "./Rating";
import FloatingHelper from "./FloatingHelper";
import InspectionSingle from "./InspectionSingle";
import { structure } from "../utils/FormStructure";
import axios from "axios";

const CarInspectionForm = () => {
  const [engineAndTransmission, setEngineAndTransmission] = useState(
    structure[0].initialState
  );
  const [steeringSuspensionBrakes, setSteeringSuspensionBrakes] = useState(
    structure[1].initialState
  );
  const [
    interiorElectricalsAirconditioner,
    setInteriorElectricalsAirconditioner,
  ] = useState(structure[2].initialState);
  const [carSpecs, setCarSpecs] = useState(structure[3].initialState);
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
        // console.log(apiData);

        const structuredData = [];
        let currentField = null;

        for (const entry of apiData) {
          if (entry.options === "") {
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
              options: entry.options.trim().split("\n"),
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
      })
      .catch((err) => console.log(err));
  }, []);
  const statesArray = [
    { state: engineAndTransmission, setter: setEngineAndTransmission },
    { state: steeringSuspensionBrakes, setter: setSteeringSuspensionBrakes },
    {
      state: interiorElectricalsAirconditioner,
      setter: setInteriorElectricalsAirconditioner,
    },
    {
      state: carSpecs,
      setter: setCarSpecs,
    },
  ];

  const handleDataChange = (field, newValue, state, setter) => {
    console.log(field, newValue);
    setter({
      ...state,
      [field]: {
        title: state[field].title,
        value: newValue,
        values: state[field].values,
      },
    });
  };
  console.log(statesArray[1]);
  return (
    <div className="w-full min-h-screen pb-32 ">
      <div className="w-full min-h-screen">
        <FloatingHelper />
        <Rating />
        <OverallScore />
        {structure.map((inspection, index) => {
          return (
            <InspectionSingle
              inspectionTitle={inspection.inspectionTitle}
              fields={inspection.fields}
              data={statesArray[index].state}
              bookmark={inspection.bookmark}
              handleDataChange={(field, newValue) =>
                handleDataChange(
                  field,
                  newValue,
                  statesArray[index].state,
                  statesArray[index].setter
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarInspectionForm;
