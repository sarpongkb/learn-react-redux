import { ADD_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "./actions";

const SHOW_ALL = "SHOW_ALL";

export const todos = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.todo];
  case TOGGLE_TODO:
    return state.map(todo => action.todoId === todo.id ? { ...todo, completed: !todo.completed } : todo);
  case DELETE_TODO:
    return state.filter(todo => action.todoId !== todo.id);
  default:
    return state
  }
};

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
