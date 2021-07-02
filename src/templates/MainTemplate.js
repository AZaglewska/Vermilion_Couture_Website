import React from "react";
import Navbar from "../components/Navigation/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainTemplate;
