import C from "./constants";

export function addDay(resort, date, powder = false, backcountry = false) {
  return {
    type: C.ADD_DAY,
    payload: { resort, date, powder, backcountry }
  };
}

export const removeDay = function(date) {
  return {
    type: C.REMOVE_DAY,
    payload: date
  };
};

export const setGoal = goal => ({
  type: C.SET_GOAL,
  payload: goal
});

export const addError = err => {
  return {
    type: C.ADD_ERROR,
    payload: err
  };
};

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index
});

export const changeSuggestions = arr => ({
  type: C.CHANGE_SUGGESTIONS,
  payload: arr
});

export const clearSuggestions = () => {
  return {
    type: C.CLEAR_SUGGESTIONS
  };
};
