import React, { Component } from "react";
import { connect } from "react-redux";
import "./TodoApp.css";

import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter } from "../reduxStore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
    this.onAddTodo = this.onAddTodo.bind(this);
    this.updateTextInput = this.updateTextInput.bind(this);
  }

  onAddTodo() {
    const text = this.state.textInput.trim();
    if (text) {
      this.props.addTodo(text);
      this.setState({ textInput: "" });
    }
  }

  updateTextInput(e) {
    this.setState({ textInput: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateTextInput} value={this.state.textInput} />
        <button onClick={this.onAddTodo}>Add Todo</button>
        <ul>
          {
            this.props.todos.map(todo => (
              <li key={todo.id}>
                { todo.text }
                <button onClick={this.props.deleteTodo.bind(null, todo.id)}>X</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

}

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
