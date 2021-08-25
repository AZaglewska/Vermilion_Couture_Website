import React from "react";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import OfferCard from "../components/OfferCard/OfferCard";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <OfferCard />
      <Footer />
    </>
  );
};

export default MainTemplate;
