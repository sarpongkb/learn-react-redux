import { createStore, combineReducers } from "redux";
import { visibilityFilter, todos, inputText } from "./reducers";

export const store = createStore(
  combineReducers({
    visibilityFilter,
    todos,
    inputText
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
