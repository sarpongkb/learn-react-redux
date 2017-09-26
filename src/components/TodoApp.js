import React from "react";
import { connect } from "react-redux";
import "./TodoApp.css";

import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter } from "../reduxStore";

const App = props => {
  const onAddTodo = () => props.addTodo("test todo ...");
  return (
    <div>
      <input type="text" />
      <button onClick={onAddTodo}>Add Todo</button>
      <ul>
        { props.todos.map(todo => <li key={todo.id}>{ todo.text }</li>) }
      </ul>
    </div>
  );
};


const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos,
  visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  addTodo: todoText => dispatch(addTodo(todoText)),
  toggleTodo: todoId => dispatch(toggleTodo(todoId)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId)),
  setVisibilityFilter: todoId => dispatch(setVisibilityFilter(todoId))
});


export const TodoApp = connect(mapStateToProps, mapDispatchToProps)(App);
