import React from "react";
import { connect } from "react-redux";
import "./TodoApp.css";

import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter, setInputText } from "../reduxStore";

const App = props => {
  const onAddTodo = () => {
    const text = props.inputText.trim();
    if (text) {
      props.addTodo(text);
      props.setInputText("");
    }
  }

  const updateTextInput = e => props.setInputText(e.target.value);

  return (
    <div>
      <input type="text" onChange={updateTextInput} value={props.inputText} />
      <button onClick={onAddTodo}>Add Todo</button>
      <ul>{
        props.todos.map(todo => (
          <li key={todo.id}>
            { todo.text }
            <button onClick={props.deleteTodo.bind(null, todo.id)}>X</button>
          </li>
        ))
      }</ul>
    </div>
  );
};

const mapStateToProps = ({ todos, visibilityFilter, inputText }) => ({
  todos,
  visibilityFilter,
  inputText
});

const mapDispatchToProps = dispatch => ({
  addTodo: todoText => dispatch(addTodo(todoText)),
  toggleTodo: todoId => dispatch(toggleTodo(todoId)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId)),
  setVisibilityFilter: todoId => dispatch(setVisibilityFilter(todoId)),
  setInputText: text => dispatch(setInputText(text))
});


export const TodoApp = connect(mapStateToProps, mapDispatchToProps)(App);
