import React from "react";
import AboutCollection from "../components/MappedPages/AboutCollection";
import { connect } from "react-redux";

const AboutCollectionPage = ({ aboutCollectionData }) => {
  return (
    <>
      <AboutCollection aboutCollectionData={aboutCollectionData} />
    </>
  );
};

const mapStateToProps = (state) => ({
  aboutCollectionData: state.aboutCollectionData,
});

export default connect(mapStateToProps)(AboutCollectionPage);
