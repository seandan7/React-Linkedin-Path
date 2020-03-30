import C from "../constants";
import appReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

const consoleMessages = store => next => action => {
  let result;

  console.groupCollapsed(`dispating atction => ${action.type}`);
  console.log("sky days", store.getState().allSkiDays.length);
  result = next(action);
  let { allSkiDays, goal, errors, resortNames } = store.getState();

  console.log(`
    
        ski days ${allSkiDays.length}
        goal: ${goal}
        fetching: ${resortNames.fetching}
        suggestions ${resortNames.suggestions}
        errors: ${errors.length}
    `);
  console.groupEnd();
  return result;
};

export default (initialState = {}) => {
  return applyMiddleware(consoleMessages)(createStore)(
    appReducer,
    initialState
  );
};
