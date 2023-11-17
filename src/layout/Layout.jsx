import React from "react";
import TopNavigationBar from "../components/TopNavigationBar/TopNavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavigationBar />
      {children}
    </div>
  );
};

export default Layout;
