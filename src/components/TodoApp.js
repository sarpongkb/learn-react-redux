import React from "react";
import "./TodoApp.css";

import { store } from "../reduxStore";

export const TodoApp = () => {
  console.log("store: ", store.getState());
  return (
    <div>
      <input type="text" />
      <button>Add Todo</button>
    </div>
  );
};
