import React, { useState } from "react";
import "./new.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "clean room", complete: false },
    { id: 2, name: "sort documents", complete: false },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <TodoForm />
      <TodoList todos={todos} />
      <div>
        <div>0 left todo</div>
        <div>
          <a>All</a>
        </div>
        <div>
          <a>Active</a>
        </div>
        <div>
          <a>Completed</a>
        </div>
      </div>
    </div>
  );
}

export default App;
