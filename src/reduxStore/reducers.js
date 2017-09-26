import { combineReducers } from "redux";
import { ADD_TODO, SET_VISIBILITY_FILTER } from "./actions";

const SHOW_ALL = "SHOW_ALL";

const todosReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.todo];
  default:
    return state
  }
};

const visibilityFilterReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  visibilityFilterReducer,
  todosReducer
});

