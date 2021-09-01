import React from "react";
import Fabrics from "../components/MappedPages/Fabrics";
import { connect } from "react-redux";

const FabricsPage = ({ fabricsData, currentLanguage }) => {
  return (
    <>
      <Fabrics fabricsData={fabricsData} currentLanguage={currentLanguage} />
    </>
  );
};

const mapStateToProps = (state) => ({
  fabricsData: state.fabricsData,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(FabricsPage);
