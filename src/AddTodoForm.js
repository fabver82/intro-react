import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodoForm({ setTodos }) {
  const todoNameRef = useRef();
  function handleAddTodo(e) {
    console.log("ok");
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  return (
    <form onSubmit={handleAddTodo} className="todoForm">
      <button type="submit">Add Todo</button>
      <input ref={todoNameRef} type="text" placeholder="Type a new todo" />
    </form>
  );
}
