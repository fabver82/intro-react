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
    <>
    <div>
      <h2>Todos</h2>
      <label>
        <input type="checkbox" />
        {' '} test
      </label>
      <label>
        <input type="checkbox" />
        {' '} test
      </label>
    </div>
    </>
  );
}


export default App;
