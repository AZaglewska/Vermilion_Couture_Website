import React from "react";
import Publications from "../components/MappedPages/Publications";
import { connect } from "react-redux";

const PublicationsPage = ({ publicationsData }) => {
  return (
    <div>
      <Publications publicationsData={publicationsData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  publicationsData: state.publicationsData,
});

export default connect(mapStateToProps)(PublicationsPage);
