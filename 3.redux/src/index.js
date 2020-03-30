import C from "./constants";
import appReducer from "./store/reducers";
import initalState from "./initialState.json";

let state = initalState;

console.log(`

    Initial State
    =============
    goal : ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);

state = appReducer(state, {
  type: C.SET_GOAL,
  payload: 2
});

state = appReducer(state, {
  type: C.ADD_DAY,
  payload: {
    resort: "Shasta",
    date: "2016-12-12",
    powder: false,
    backcounty: true
  }
});
state = appReducer(state, {
  type: C.CHANGE_SUGGESTIONS,
  payload: ["Tallac", "Hood", "Shasta"]
});

console.log(`

    Next State
    =============
    goal : ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);
