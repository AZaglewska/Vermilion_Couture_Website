import { actionsTypes } from "./actionTypes";

export const setCurrentLanguage = (language) => ({
  type: actionsTypes.SET_CURRENT_LANGUAGE,
  payload: language,
});

export const getUnderbustCorsetAction = (data) => ({
  type: actionsTypes.GET_UNDERBUST_CORSET_DATA,
  payload: data,
});

export const getOverbustCorsetAction = (data) => ({
  type: actionsTypes.GET_OVERBUST_CORSET_DATA,
  payload: data,
});

export const getWeddingCorsetAction = (data) => ({
  type: actionsTypes.GET_WEDDING_CORSET_DATA,
  payload: data,
});

export const getEveningCorsetAction = (data) => ({
  type: actionsTypes.GET_EVENING_CORSET_DATA,
  payload: data,
});

export const getDesignerDataAction = (data) => ({
  type: actionsTypes.GET_DESIGNER_DATA,
  payload: data,
});

export const getPublicationsDataAction = (data) => ({
  type: actionsTypes.GET_PUBLICATIONS_DATA,
  payload: data,
});

export const getQuestionsAndAnswersDataAction = (data) => ({
  type: actionsTypes.GET_QUESTIONS_AND_ANSWERS_DATA,
  payload: data,
});
