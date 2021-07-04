import { actionsTypes } from "./actionTypes";

export const setCurrentLanguage = (language) => ({
  type: actionsTypes.SET_CURRENT_LANGUAGE,
  payload: language,
});
