import React from "react";
import { Rating } from "../components/CarInspectionReport/Rating";
import { OverallScore } from "../components/CarInspectionReport/OverallScore";

const CarInspectionReport = () => {
  return (
    <div className="w-full min-h-screen pb-32">
      <div className="w-full min-h-screen">
        <Rating />
        <OverallScore />
      </div>
    </div>
  );
};

export default CarInspectionReport;
