import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <li>
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={handleTodoClick}
          checked={todo.complete}
        />
        <span className="checkmark"></span> {todo.name}{" "}
      </label>
    </li>
  );
}
