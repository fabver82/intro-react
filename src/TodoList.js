import React from "react";
import Todo from "./Todo";
import { Reorder } from "framer-motion";

export default function TodoList({ todos, toggleTodo, filter, setTodos }) {
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
      <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
        {filterTodos(filter).map((todo) => {
          return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
        })}
      </Reorder.Group>
      {/* <ul>
        {filterTodos(filter).map((todo) => {
          return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
        })}
      </ul> */}
    </div>
  );
}
