import React from "react";
import TopNavigationBar from "../components/TopNavigationBar/TopNavigationBar";
import FullScreenPopupCenter from "../components/reusables/FullScreenPopupCenter";

const Layout = ({ children }) => {
  return (
    <div className="font-lexend-deca ">
      <TopNavigationBar />
      <FullScreenPopupCenter />
      <div className="mx-10 md:mx-32">{children}</div>
    </div>
  );
};

export default Layout;
