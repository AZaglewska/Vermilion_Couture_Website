import React from "react";
import About from "../components/MappedPages/About";
import { connect } from "react-redux";

const AboutPage = ({ currentLanguage, designerData }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>O Vermilion</h1>
      ) : (
        <h1>About Vermilion</h1>
      )}

      <About designerData={designerData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  designerData: state.designerData,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(AboutPage);
