import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
// import uuidv4 from "./uuidv4";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "clean room", complete: true },
    { id: 2, name: "sort documents", complete: false },
  ]);
  const todoNameRef = useRef();
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: 3, name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <input ref={todoNameRef} type="text" placeholder="Type a new todo" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} />
      <div>
        <div>0 left todo</div>
        <div>
          <a href="#">All</a>
        </div>
        <div>
          <a href="#">Active</a>
        </div>
        <div>
          <a href="#">Completed</a>
        </div>
      </div>
    </div>
  );
}

export default App;
