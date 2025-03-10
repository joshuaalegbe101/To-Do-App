import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, dispatch }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default TodoList;
