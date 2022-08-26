// This is App Reducer
import * as types from "./actionTypes";

const initState = {
  cart: [],
  electronics: [],
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

    default:
      return state;
  }
};
