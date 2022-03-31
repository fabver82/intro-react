import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.key} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
