import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
