import React from "react";
import "./TodoApp.css";

import { store, addTodo } from "../reduxStore";

export const TodoApp = () => {
  console.log("store: ", store.getState());
  const addTestTodo = () => store.dispatch(addTodo("example todo"));
  return (
    <div>
      <input type="text" />
      <button onClick={addTestTodo}>Add Todo</button>
    </div>
  );
};
