export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const addTodo = todoText => {
  return {
    type: ADD_TODO,
    todo: {
      id: "1235",
      text: todoText
    }
  };
};

export const toggleTodo = todoId => {
  return;
};

export const deleteTodo = todoId => {
  return;
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};