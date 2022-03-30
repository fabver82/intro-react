import './new.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <input type="text" placeholder="Type a new todo"/>
      <button>Add Todo</button>
      <ToDoList/>
    </div>
    </>
  );
}

const ToDoList = () => {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        <li>
          <label>
          <input type="checkbox" />
          {' '} todo 1
        </label>
        </li>
        <li>
          <label>
          <input type="checkbox" />
          {' '} todo 2
        </label>
        </li>
      </ul>
    </div>
  );
}


export default App;
