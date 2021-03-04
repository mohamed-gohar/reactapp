import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promos } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configStore = () => {
  const store = createStore(
    combineReducers({
      dishes2: Dishes,
      comments: Comments,
      promos: Promos,
      leaders: Leaders,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
