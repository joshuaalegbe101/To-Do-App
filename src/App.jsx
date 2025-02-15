import React, { useReducer } from "react";
import TodoList from "./utils/TodoList";
import NewTodoForm from "./NewTodo";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [{ id: Date.now(), text: action.payload, isComplete: false, isEditing: false }, ...state];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo
      );

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);

    case "START_EDITING":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isEditing: true } : todo
      );

    case "SAVE_EDIT":
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text, isEditing: false } : todo
      );

    case "CANCEL_EDIT":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isEditing: false } : todo
      );

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="container">
      <div className="todo-box">
        <h1>Todo List</h1>
        <NewTodoForm dispatch={dispatch} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
