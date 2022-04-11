import React from "react";
import { Reorder } from "framer-motion";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <Reorder.Item value={todo} id={todo.id}>
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={handleTodoClick}
          checked={todo.complete}
        />
        <span className="checkmark"></span> {todo.name}{" "}
      </label>
    </Reorder.Item>
    // <li>
    //   <label className="checkbox">
    //     <input
    //       type="checkbox"
    //       onChange={handleTodoClick}
    //       checked={todo.complete}
    //     />
    //     <span className="checkmark"></span> {todo.name}{" "}
    //   </label>
    // </li>
  );
}
