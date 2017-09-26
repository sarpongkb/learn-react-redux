import { createStore, combineReducers } from "redux";
import { visibilityFilter, todos } from "./reducers";

export const store = createStore(
  combineReducers({
    visibilityFilter,
    todos
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));