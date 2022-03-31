import React, { useState } from "react";
import "./new.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <TodoForm />
      <TodoList />
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
