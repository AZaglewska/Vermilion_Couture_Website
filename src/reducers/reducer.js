import { actionsTypes } from "../actions/actionTypes";

const initialState = {
  currentLanguage: "PL",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: payload,
      };

    default:
      return state;
  }
};

export default reducer;
