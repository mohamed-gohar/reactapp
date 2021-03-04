import { PROMOTIONS } from "../shared/promotions";
import * as ActionTypes from "./ActionTypes";

const initState = {
  isLoading: true,
  errmess: null,
  promos: [],
};

export const Promos = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        promos: action.payload,
      };

    case ActionTypes.PROMOS_LOADING:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        promos: [],
      };

    case ActionTypes.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
        promos: [],
      };
    default:
      return state;
  }
};
