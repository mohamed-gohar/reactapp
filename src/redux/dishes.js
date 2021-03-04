import * as ActionTypes from "./ActionTypes";

const initState = {
  isLoading: true,
  errmess: null,
  dishes: [],
};
export const Dishes = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        dishes: action.payload,
      };

    case ActionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        dishes: [],
      };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
        dishes: [],
      };

    default:
      return state;
  }
};
