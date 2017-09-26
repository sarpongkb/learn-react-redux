import { createStore, combineReducers } from "redux";
import { visibilityFilter, todos } from "./reducers";

export const store = createStore(
  combineReducers({
    visibilityFilter,
    todos
  })
);

store.subscribe(() => console.log(store.getState()));