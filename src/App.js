import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const LOCAL_STORAGE_KEY = "myownkey";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
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
  function filterCompletedTodos() {
    setFilter("complete");
  }
  function filterActiveTodos() {
    setFilter("active");
  }
  function filterAllTodos() {
    setFilter("all");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <AddTodoForm setTodos={setTodos} />
      <TodoList todos={todos} filter={filter} toggleTodo={toggleTodo} />

      <div>
        {
          todos.filter((todo) => {
            return !todo.complete;
          }).length
        }{" "}
        left todo
      </div>
      <div>
        <button onClick={filterAllTodos}>All</button>
      </div>
      <div>
        <button onClick={filterActiveTodos}>Active</button>
      </div>
      <div>
        <button onClick={filterCompletedTodos}>Completed</button>
      </div>
    </div>
  );
}

export default App;
