import { ADD_TODO } from "./actions";

export const rootReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return state;
  default:
    return state;
  }
};

