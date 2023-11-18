import React from "react";
import { Rating } from "../components/CarInspectionReport/Rating";
import { OverallScore } from "../components/CarInspectionReport/OverallScore";
import { Details } from "../components/CarInspectionReport/Details";
import { ExteriorCondition } from "../components/CarInspectionReport/ExteriorCondition";
import Accordions from "../components/CarInspectionReport/Accordions";

const CarInspectionReport = () => {
  return (
    <div className="w-full min-h-screen pb-32">
      <div className="w-full min-h-screen">
        <Rating />
        <OverallScore />
        <Details />
        <ExteriorCondition />
        <Accordions />
      </div>
    </div>
  );
};

export default CarInspectionReport;
