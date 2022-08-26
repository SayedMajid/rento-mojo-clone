import * as types from "./actionTypes";
import axios from "axios";

export const getElectronicsData = (params) => (dispatch) => {
  return axios
    .get("http://localhost:8080/electronics" , { params })
    .then((res) =>
      dispatch({ type: types.GET_ELECTRONICS_DATA_SUCCESS, payload: res.data })
    );
};


export const getFitnessData = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/fitness")
    .then((res) =>
      dispatch({ type: types.GET_FITNESS_DATA_SUCCESS, payload: res.data })
    );
};

export const getFurnitureData = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/furniture")
    .then((res) =>
      dispatch({ type: types.GET_FURNITURE_DATA_SUCCESS, payload: res.data })
    );
}



export const getAppliances = (params)=>(dispatch) => {
  dispatch({ type: types.GET_APPLIANCES_REQUEST });
  axios
    .get("http://localhost:8080/appliances",params)
    .then((r) =>
      dispatch({ type: types.GET_APPLIANCES_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_APPLIANCES_FAILURE, payload: e }));
};
