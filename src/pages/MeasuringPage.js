import React from "react";
import { connect } from "react-redux";
import Measuring from "../components/MappedPages/Measuring";

const MeasuringPage = ({ currentLanguage, measuringData }) => {
  return (
    <div>
      <Measuring
        currentLanguage={currentLanguage}
        measuringData={measuringData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  measuringData: state.measuringData,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(MeasuringPage);
