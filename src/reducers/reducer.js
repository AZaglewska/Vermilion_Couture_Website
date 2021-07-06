import { actionsTypes } from "../actions/actionTypes";

const initialState = {
  currentLanguage: "PL",
  underbustCorset: [],
  overbustCorset: [],
  weddingCorset: [],
  eveningCorset: [],
  designerData: [],
  publicationsData: [],
  fabricsData: [],
  questionsAndAnswersData: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: payload,
      };
    case actionsTypes.GET_UNDERBUST_CORSET_DATA:
      return {
        ...state,
        underbustCorset: [...payload],
      };

    case actionsTypes.GET_OVERBUST_CORSET_DATA:
      return {
        ...state,
        overbustCorset: [...payload],
      };

    case actionsTypes.GET_WEDDING_CORSET_DATA:
      return {
        ...state,
        weddingCorset: [...payload],
      };

    case actionsTypes.GET_EVENING_CORSET_DATA:
      return {
        ...state,
        eveningCorset: [...payload],
      };

    case actionsTypes.GET_DESIGNER_DATA:
      return {
        ...state,
        designerData: [...payload],
      };

    case actionsTypes.GET_PUBLICATIONS_DATA:
      return {
        ...state,
        publicationsData: [...payload],
      };

    case actionsTypes.GET_QUESTIONS_AND_ANSWERS_DATA:
      return {
        ...state,
        questionsAndAnswersData: [...payload],
      };
    case actionsTypes.GET_FABRICS_DATA:
      return {
        ...state,
        fabricsData: [...payload],
      };

    default:
      return state;
  }
};

export default reducer;
