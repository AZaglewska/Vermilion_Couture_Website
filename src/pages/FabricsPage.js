import React from "react";
import Fabrics from "../components/MappedPages/Fabrics";
import { connect } from "react-redux";

const FabricsPage = ({ fabricsData, currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? <h1>Tkaniny</h1> : <h1>Fabrics</h1>}

      <Fabrics fabricsData={fabricsData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fabricsData: state.fabricsData,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(FabricsPage);
