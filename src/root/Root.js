import React, { useEffect } from "react";
import Router from "../routing/Router";
import GlobalStyle from "../globalStyles/GlobalStyle";
import { connect } from "react-redux";
import { dataTypesObj, dataTypesArray } from "../utils/types";
import { client } from "../contentfulConfig.js/contentfulConfig";
import {
  getUnderbustCorsetAction,
  getOverbustCorsetAction,
  getWeddingCorsetAction,
  getEveningCorsetAction,
  getDesignerDataAction,
  getPublicationsDataAction,
  getQuestionsAndAnswersDataAction,
} from "../actions/index";

const Root = ({
  getUnderbustCorset,
  getOverbustCorset,
  getWeddingCorset,
  getEveningCorset,
  getDesignerData,
  getPublicationsData,
  getQuestionsAndAnswersData,
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

    console.log(mappedContentfulData);

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

      case dataTypesObj.designerData:
        getDesignerData([...mappedContentfulData]);
        break;

      case dataTypesObj.publicationsData:
        getPublicationsData([...mappedContentfulData]);
        break;
      case dataTypesObj.questionsAndAnswersData:
        getQuestionsAndAnswersData([...mappedContentfulData]);
        break;
      default:
    }

    const getAllData = () => {
      dataTypesArray.forEach((type) => {
        client
          .getEntries({
            content_type: currentLanguage === "ENG" ? `${type}Eng` : type,
          })
          .then((response) => {
            getContentfulData(type, response.items);
            console.log(response.items);
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
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  getUnderbustCorset: (data) => dispatch(getUnderbustCorsetAction(data)),
  getOverbustCorset: (data) => dispatch(getOverbustCorsetAction(data)),
  getWeddingCorset: (data) => dispatch(getWeddingCorsetAction(data)),
  getEveningCorset: (data) => dispatch(getEveningCorsetAction(data)),
  getDesignerData: (data) => dispatch(getDesignerDataAction(data)),
  getPublicationsData: (data) => dispatch(getPublicationsDataAction(data)),
  getQuestionsAndAnswersData: (data) =>
    dispatch(getQuestionsAndAnswersDataAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
