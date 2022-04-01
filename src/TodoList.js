import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo, filter }) {
  let filteredTodos = [];
  if (filter === "active") {
    filteredTodos = todos.filter((todo) => !todo.complete);
  }
  if (filter === "complete") {
    filteredTodos = todos.filter((todo) => todo.complete);
  }
  if (filter === "all") {
    filteredTodos = [...todos];
  }
  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => {
          return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
