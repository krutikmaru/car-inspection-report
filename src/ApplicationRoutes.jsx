import React from "react";
import { Route, Routes } from "react-router-dom";
import CarInspectionForm from "./components/CarInspectionForm/CarInspectionForm";
import CarInspectionReport from "./pages/CarInspectionReport";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={CarInspectionReport} />
      <Route path="/inspection_form" Component={CarInspectionForm} />
    </Routes>
  );
};

export default ApplicationRoutes;
