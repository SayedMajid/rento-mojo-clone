import { legacy_createStore, compose } from "redux";
import { combineReducers } from "redux";
import { reducer as AppReducer } from "./App/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
import {reducer as WfhReducer} from "./WFHRahi/reducer"
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  App: AppReducer,
  Auth: AuthReducer,
  Rahi : WfhReducer
});

const devtools = () => {
  return (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devtools())
);
