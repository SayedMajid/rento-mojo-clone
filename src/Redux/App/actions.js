import * as types from "./actionTypes";
import axios from "axios";

export const getElectronicsData = (params) => (dispatch) => {
  return axios
    .get("http://localhost:8080/electronics", { params })
    .then((res) =>
      dispatch({ type: types.GET_ELECTRONICS_DATA_SUCCESS, payload: res.data })
    );
};

export const getFitnessData = (params) => (dispatch) => {
  dispatch({ type: types.GET_FITNESS_DATA_REQUEST });
  axios
    .get("http://localhost:8080/fitness", params)
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
    .get("http://localhost:8080/furniture", params)
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
    .get("http://localhost:8080/appliances", params)
    .then((r) =>
      dispatch({ type: types.GET_APPLIANCES_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_APPLIANCES_FAILURE, payload: e }));
};



export const addToCart=(params)=>(dispatch)=>{

  dispatch({type:types.ADD_TO_CART_REQUEST})
  axios
  .post("http://localhost:8080/cart",params)
  .then((r)=>dispatch({type:types.ADD_TO_CART_SUCCESS,payload:r.payload}))
  .catch((e)=>dispatch({type:types.ADD_TO_CART_FAILURE}))
}

