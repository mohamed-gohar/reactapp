import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

const initState = {
  errmess: null,
  comments: [],
};

export const Comments = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errmess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errmess: action.payload, comments: [] };

    case ActionTypes.ADD_COMMENT:
      return { ...state, comments: state.comments.concat(action.payload) };
    default:
      return state;
  }
};
