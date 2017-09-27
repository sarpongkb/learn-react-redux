import { generate } from "shortid";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const SET_INPUT_TEXT = "SET_INPUT_TEXT";

export const addTodo = todoText => ({
  type: ADD_TODO,
  todo: {
    id: generate(),
    text: todoText,
    completed: false
  }
});

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId
});

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  todoId
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const setInputText = inputText => ({
  type: SET_INPUT_TEXT,
  inputText
});
