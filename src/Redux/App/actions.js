import * as types from "./actionTypes";
import axios from "axios";

export const getElectronicsData = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/electronics")
    .then((res) =>
      dispatch({ type: types.GET_ELECTRONICS_DATA_SUCCESS, payload: res.data })
    );
};
