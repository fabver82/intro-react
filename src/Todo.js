import React from "react";

export default function Todo({ todo }) {
  return (
    <li>
      <label>
        <input type="checkbox" /> {todo.name}{" "}
      </label>
    </li>
  );
}
