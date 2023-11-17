import React from "react";
import TopNavigationBar from "../components/TopNavigationBar/TopNavigationBar";

const Layout = ({ children }) => {
  return (
    <div className="font-lexend-deca ">
      <TopNavigationBar />
      <div className="mx-10 md:mx-20">{children}</div>
    </div>
  );
};

export default Layout;
