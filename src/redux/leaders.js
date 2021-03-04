import { LEADERS } from "../shared/leaders";
import * as ActionTypes from "./ActionTypes";

const initState = {
  isLoading: true,
  errmess: null,
  leaders: [],
};

export const Leaders = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        leaders: action.payload,
      };

    case ActionTypes.LEADERS_LOADING:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        leaders: [],
      };

    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
        leaders: [],
      };

    default:
      return state;
  }
};
