// This is App Reducer
import * as types from "./actionTypes";

const initState = {
  cart: [],
  electronics: [],
  fitness: [],
  furniture: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
 
  switch (type) {
    case types.GET_ELECTRONICS_DATA_SUCCESS: {
      return {
        ...state,
        electronics: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_FITNESS_DATA_SUCCESS:{
      return {
        ...state,
        fitness: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_FURNITURE_DATA_SUCCESS:{
      return {
        ...state,
        furniture: payload,
        isLoading: false,
        isError: false,
      };
    }

    default:
      return state;
  }
};
