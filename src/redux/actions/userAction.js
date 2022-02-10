import * as actionTypes from "../types";

export const setProduct = (product) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_PRODUCT, payload: product });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setCart = (cart) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_CART, payload: cart });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setUser = (user) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_USER_INFO, payload: user });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setChatUser = (chat) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.SET_CHAT_USER, payload: chat });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const findProduct = (product) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.FIND_PRODUCT, payload: product });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};


