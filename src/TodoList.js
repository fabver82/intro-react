import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo, filter }) {
  function filterTodos(filter) {
    if (filter === "active") {
      return todos.filter((todo) => !todo.complete);
    }
    if (filter === "complete") {
      return todos.filter((todo) => todo.complete);
    }
    return todos;
  }

  return (
    <div>
      <ul>
        {filterTodos(filter).map((todo) => {
          return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
