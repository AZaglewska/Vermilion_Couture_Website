import React from "react";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
