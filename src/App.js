import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "myownkey";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos.length !== 0) setTodos(storedTodos);
    console.log(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <input ref={todoNameRef} type="text" placeholder="Type a new todo" />
      <br />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />

      <div>
        {
          todos.filter((todo) => {
            return !todo.complete;
          }).length
        }{" "}
        left todo
      </div>
      <div>
        <button>All</button>
      </div>
      <div>
        <button>Active</button>
      </div>
      <div>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default App;
