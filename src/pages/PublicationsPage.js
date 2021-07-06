import React from "react";
import Publications from "../components/MappedPages/Publications";
import { connect } from "react-redux";

const PublicationsPage = ({ currentLanguage, publicationsData }) => {
  return (
    <div>
      {currentLanguage === "PL" ? <h1>Publikacje</h1> : <h1>Publications</h1>}
      <Publications publicationsData={publicationsData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  publicationsData: state.publicationsData,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(PublicationsPage);
