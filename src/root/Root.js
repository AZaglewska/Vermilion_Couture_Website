import React, { useEffect } from "react";
import Router from "../routing/Router";
import GlobalStyle from "../globalStyles/GlobalStyle";
import { connect } from "react-redux";
import { dataTypesObj, dataTypesArray } from "../utils/types";
import { client } from "../contentful/contentfulConfig";
import {
  getUnderbustCorsetAction,
  getOverbustCorsetAction,
  getWeddingCorsetAction,
  getEveningCorsetAction,
  getDesignerDataAction,
  getFabricsDataAction,
  getQuestionsAndAnswersDataAction,
  getMeshCorsetAction,
  getSilkCorsetAction,
  getOtherCorsetAction,
  getMeasuringDataAction,
  getAboutCollectionDataAction,
} from "../actions/index";

const Root = ({
  getUnderbustCorset,
  getOverbustCorset,
  getWeddingCorset,
  getEveningCorset,
  getMeshCorset,
  getSilkCorset,
  getOtherCorset,
  getDesignerData,
  getFabricsData,
  getQuestionsAndAnswersData,
  getMeasuringData,
  getAboutCollectionData,
  currentLanguage,
}) => {
  const getContentfulData = (type, data) => {
    const mappedContentfulData = data.map((item) => {
      const { id } = item.sys;

      const images = item.fields.images.map((image) => image.fields.file.url);

      const product = {
        id,
        ...item.fields,
        images,
      };
      return product;
    });

    switch (type) {
      case dataTypesObj.underbustCorset:
        getUnderbustCorset([...mappedContentfulData]);
        break;
      case dataTypesObj.overbustContent:
        getOverbustCorset([...mappedContentfulData]);
        break;
      case dataTypesObj.weddingCorset:
        getWeddingCorset([...mappedContentfulData]);
        break;
      case dataTypesObj.eveningCorset:
        getEveningCorset([...mappedContentfulData]);
        break;
      case dataTypesObj.meshCorset:
        getMeshCorset([...mappedContentfulData]);
        break;
      case dataTypesObj.silkCorset:
        getSilkCorset([...mappedContentfulData]);
        break;
      case dataTypesObj.otherCorset:
        getOtherCorset([...mappedContentfulData]);
        break;
      case dataTypesObj.designerData:
        getDesignerData([...mappedContentfulData]);
        break;
      case dataTypesObj.questionsAndAnswersData:
        getQuestionsAndAnswersData([...mappedContentfulData]);
        break;
      case dataTypesObj.fabricsData:
        getFabricsData([...mappedContentfulData]);
        break;
      case dataTypesObj.measuringData:
        getMeasuringData([...mappedContentfulData]);
        break;

      case dataTypesObj.aboutCollectionData:
        getAboutCollectionData([...mappedContentfulData]);
        break;

      default:
    }
  };
  const getAllData = () => {
    dataTypesArray.forEach((type) => {
      client
        .getEntries({
          content_type: currentLanguage === "ENG" ? `${type}Eng` : type,
        })
        .then((response) => {
          getContentfulData(type, response.items);
        });
    });
  };

  useEffect(() => {
    getAllData();
  }, [currentLanguage]);

  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  getUnderbustCorset: (data) => dispatch(getUnderbustCorsetAction(data)),
  getOverbustCorset: (data) => dispatch(getOverbustCorsetAction(data)),
  getWeddingCorset: (data) => dispatch(getWeddingCorsetAction(data)),
  getEveningCorset: (data) => dispatch(getEveningCorsetAction(data)),
  getMeshCorset: (data) => dispatch(getMeshCorsetAction(data)),
  getSilkCorset: (data) => dispatch(getSilkCorsetAction(data)),
  getOtherCorset: (data) => dispatch(getOtherCorsetAction(data)),
  getDesignerData: (data) => dispatch(getDesignerDataAction(data)),
  getFabricsData: (data) => dispatch(getFabricsDataAction(data)),
  getQuestionsAndAnswersData: (data) =>
    dispatch(getQuestionsAndAnswersDataAction(data)),
  getMeasuringData: (data) => dispatch(getMeasuringDataAction(data)),
  getAboutCollectionData: (data) =>
    dispatch(getAboutCollectionDataAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
