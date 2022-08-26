import * as types from "./actionTypes";
import axios from "axios";

export const getElectronicsData = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/electronics")
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
};
