import * as ActionTypes from "./ActionTypes";
import { DISHES2 } from "../shared/dishes2";
import { baseUrl } from "../shared/baseUrl";

//add comment
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const initComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
    date: new Date().toISOString(),
  };
  fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(initComment),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then(
      (resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          var error = new Error(`Error ${resp.status}: ${resp.statusText}`);
          error.response = resp;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((resp) => dispatch(addComment(resp)))
    .catch((error) => alert(`faild to add comment\n Error: ${error.message}`));
};
export const addComment = (comment) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
  };
};

//dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());
  return fetch(baseUrl + "dishes")
    .then(
      (resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          var error = new Error(`Error ${resp.status}: ${resp.statusText}`);
          error.response = resp;
          throw error;
        }
      },
      (error) => {
        var err = new Error(error.message);
        throw err;
      }
    )
    .then((resp) => dispatch(addDishes(resp)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});
export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

//comments
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          var error = new Error(`Error ${resp.status}: ${resp.statusText}`);
          error.response = resp;
          throw error;
        }
      },
      (error) => {
        var error = new Error(error.message);
        throw error;
      }
    )
    .then((resp) => dispatch(addComments(resp)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};
export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

//promos
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());
  return fetch(baseUrl + "promotions")
    .then(
      (resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          var error = new Error(`Error ${resp.status}: ${resp.statusText}`);
          error.response = resp;
          throw error;
        }
      },
      (error) => {
        var error = new Error(error.message);
        throw error;
      }
    )
    .then((resp) => dispatch(addPromos(resp)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});
export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

//leaders
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());
  return fetch(baseUrl + "leaders")
    .then(
      (resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          var error = new Error(`Error ${resp.status}: ${resp.statusText}`);
          error.response = resp;
          throw error;
        }
      },
      (error) => {
        var error = new Error(error.message);
        throw error;
      }
    )
    .then((resp) => dispatch(addLeaders(resp)))
    .catch((error) => dispatch(leadersFailed(error.message)));
};

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});
export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});
export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});
