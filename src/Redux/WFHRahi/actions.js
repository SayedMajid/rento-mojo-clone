import { GET_WFH_DATA_ERROR, GET_WFH_DATA_LOADING, GET_WFH_DATA_SUCCESS } from "./actionsTypes";

export  const getDataRequest = () => {
    return{
        type: GET_WFH_DATA_LOADING
    }
}

export const getDataFailure = () => {
    return{
        type:GET_WFH_DATA_ERROR
    }
}

export const getDataSuccess = (payload) => {
    return {
        type : GET_WFH_DATA_SUCCESS,payload
    }
}