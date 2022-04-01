import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import "./sass/style.scss";

const LOCAL_STORAGE_KEY = "myownkey";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("active");
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

  return (
    <div className="App">
      <header className="App__header">
        <h1>Todos</h1>
      </header>
      <AddTodoForm setTodos={setTodos} />
      <TodoList todos={todos} filter={filter} toggleTodo={toggleTodo} />

      <footer className="App__footer">
        <div>
          {
            todos.filter((todo) => {
              return !todo.complete;
            }).length
          }{" "}
          left todo
        </div>
        <div>
          <button onClick={() => setFilter("all")}>All</button>
        </div>
        <div>
          <button onClick={() => setFilter("active")}>Active</button>
        </div>
        <div>
          <button onClick={() => setFilter("complete")}>Completed</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
