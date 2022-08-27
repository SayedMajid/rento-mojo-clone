// This is App Reducer
import * as types from "./actionTypes";

const initState = {
  electronics: [],
  fitness: [],
  furniture: [],
  appliances: [],
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


    case types.GET_FITNESS_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_FITNESS_DATA_SUCCESS: {
      return {
        ...state,
        fitness: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_FITNESS_DATA_FAILURE:{
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }


    case types.GET_FURNITURE_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
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
    case types.GET_FURNITURE_DATA_FAILURE:{
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    

    case types.GET_APPLIANCES_REQUEST:{
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_APPLIANCES_SUCCESS:{
      return {
        ...state,
        appliances: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_APPLIANCES_FAILURE:{
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
