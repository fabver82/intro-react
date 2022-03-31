import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={handleTodoClick}
          checked={todo.complete}
        />{" "}
        {todo.name}{" "}
      </label>
    </li>
  );
}
