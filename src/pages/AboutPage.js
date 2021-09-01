import React from "react";
import About from "../components/MappedPages/About";
import { connect } from "react-redux";

const AboutPage = ({ designerData }) => {
  return (
    <>
      <About designerData={designerData} />
    </>
  );
};

const mapStateToProps = (state) => ({
  designerData: state.designerData,
});

export default connect(mapStateToProps)(AboutPage);
