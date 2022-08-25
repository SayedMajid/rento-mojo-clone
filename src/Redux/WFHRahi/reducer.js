import { GET_WFH_DATA_ERROR, GET_WFH_DATA_LOADING, GET_WFH_DATA_SUCCESS } from "./actionsTypes"

const initState = {
    wfh: [],
    iswfhLoading : false,
    iswfhError: false
}

export const reducer = (state=initState,{type,payload}) => {
    switch(type) {
        case GET_WFH_DATA_LOADING : {
         return {
             ...state,
             iswfhLoading: true,
             iswfhError: false
         }
        }
        case GET_WFH_DATA_ERROR: {
         return {
             ...state,
             iswfhLoading: false,
             iswfhError: true
         }
        }
        case GET_WFH_DATA_SUCCESS : {
         return {
             ...state,
             iswfhLoading : false,
             iswfhError : false,
             wfh: [...payload]
         }
        }
         default: return state
     }
}