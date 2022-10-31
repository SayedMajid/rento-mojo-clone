import * as types from "./actionTypes";
import axios from "axios";

export const getElectronicsData = (params) => (dispatch) => {
  return axios
    .get("https://json-server-mocker-myapi.herokuapp.com/electronics", {
      params,
    })
    .then((res) =>
      dispatch({ type: types.GET_ELECTRONICS_DATA_SUCCESS, payload: res.data })
    );
};

export const getFitnessData = (params) => (dispatch) => {
  dispatch({ type: types.GET_FITNESS_DATA_REQUEST });
  axios
    .get("https://json-server-mocker-myapi.herokuapp.com/fitness", params)
    .then((res) =>
      dispatch({ type: types.GET_FITNESS_DATA_SUCCESS, payload: res.data })
    )
    .catch((e) =>
      dispatch({ type: types.GET_FITNESS_DATA_FAILURE, payload: e })
    );
};

export const getFurnitureData = (params) => (dispatch) => {
  dispatch({ type: types.GET_FURNITURE_DATA_REQUEST });
  axios
    .get("https://json-server-mocker-myapi.herokuapp.com/furniture", params)
    .then((res) =>
      dispatch({ type: types.GET_FURNITURE_DATA_SUCCESS, payload: res.data })
    )
    .catch((e) =>
      dispatch({ type: types.GET_FURNITURE_DATA_FAILURE, payload: e })
    );
};

export const getAppliances = (params) => (dispatch) => {
  dispatch({ type: types.GET_APPLIANCES_REQUEST });
  axios
    .get("https://json-server-mocker-myapi.herokuapp.com/appliances", params)
    .then((r) =>
      dispatch({ type: types.GET_APPLIANCES_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_APPLIANCES_FAILURE, payload: e }));
};

// export const addToCart = (params) => (dispatch) => {
//   dispatch({ type: types.ADD_TO_CART_REQUEST });
//   return axios
//     .post("http://localhost:8080/cart", params)
//     .then((r) => dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: r.data }))
//     .catch((e) => dispatch({ type: types.ADD_TO_CART_FAILURE }));
// };

export const addToCart = (params) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART_REQUEST });
  return axios
    .post("https://json-server-mocker-myapi.herokuapp.com/cart", params)
    .then((r) =>
      dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: r.payload })
    )
    .then((r) => dispatch(getCartData()))
    .catch((e) => dispatch({ type: types.ADD_TO_CART_FAILURE }));
};

export const getCartData = () => (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });
  return axios
    .get("https://json-server-mocker-myapi.herokuapp.com/cart")
    .then((r) => dispatch({ type: types.GET_CART_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_CART_FAILURE }));
};
