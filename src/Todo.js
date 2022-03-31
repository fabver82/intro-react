import React from "react";

export default function Todo({ todo }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.complete} /> {todo.name}{" "}
      </label>
    </li>
  );
}
