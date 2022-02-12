import * as actionTypes from "../types";

export const setUser = (user) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_USER_INFO, payload: user });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setPost = (post) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_POST, payload: post });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setComment = (comment) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_COMMENT, payload: comment });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setAllUser = (alluser) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_ALL_USER_INFO, payload: alluser });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setLike = (like) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_LIKE, payload: like });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

