// This is App Reducer
import * as types from "./actionTypes";

const initState = {
  electronics: [],
  appliances:[],
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
    case types.GET_APPLIANCES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_APPLIANCES_SUCCESS:
      return {
        ...state,
        appliances: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_APPLIANCES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
