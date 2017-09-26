import React from "react";
import { connect } from "react-redux";
import "./TodoApp.css";

import { addTodo } from "../reduxStore";

const App = props => {
  console.log("app rendering. props: ", props);
  return (
    <div>
      <input type="text" />
      <button onClick={props.addTodo}>Add Todo</button>
      <ul>
        { props.todos.map(todo => <li key={todo.id}>{ todo.text }</li>) }
      </ul>
    </div>
  );
};


const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todoText => {
      console.log("trying to add todo. todoText: ", todoText);
      return addTodo(todoText);
    }
  }
};


export const TodoApp = connect(mapStateToProps, mapDispatchToProps)(App);
