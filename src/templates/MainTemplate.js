import React, { useState, useEffect } from "react";
import AnimatedLogo from "../components/AnimatedLogo/AnimatedLogo";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import OfferCard from "../components/OfferCard/OfferCard";
import StickyMenu from "../components/StickyMenu/StickyMenu";
import ArrowUp from "../components/IconComponents/ArrowUp/ArrowUp";

const MainTemplate = ({ children }) => {
  const [isShown, setIsShown] = useState(false);
  const [showArrowTop, setShowArrowTop] = useState(false);

  const showAndHideArrowTop = () => {
    if (!showArrowTop && window.pageYOffset < 300) {
      setShowArrowTop(true);
    } else if (showArrowTop && window.pageYOffset >= 300) {
      setShowArrowTop(false);
    }
  };
  window.addEventListener("scroll", showAndHideArrowTop);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(!isShown);
    }, 6000);
  }, []);

  return (
    <>
      {isShown ? (
        <>
          <Navbar />
          {children}
          <OfferCard />
          <Footer />
          <StickyMenu />
          {showArrowTop === false ? <ArrowUp /> : null}
        </>
      ) : (
        <>
          <AnimatedLogo />
        </>
      )}
    </>
  );
};

export default MainTemplate;
