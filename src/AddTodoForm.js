import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodoForm({ todos, setTodos }) {
  const todoNameRef = useRef();
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  return (
    <div>
      <input ref={todoNameRef} type="text" placeholder="Type a new todo" />
      <br />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
