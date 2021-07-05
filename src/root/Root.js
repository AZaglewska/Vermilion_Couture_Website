import React, { useEffect } from "react";
import Router from "../routing/Router";
import GlobalStyle from "../globalStyles/GlobalStyle";
import { dataTypesObj, dataTypesArray } from "../utils/types";
import { client } from "../contentfulConfig.js/contentfulConfig";

const Root = () => {
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

export default Root;
