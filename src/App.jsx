import "./App.css";
import { Counter } from "./componants/Counter";
import { TodoInput } from "./componants/Todoinput";

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>Todo List</h1>
      <TodoInput />
    </div>
  );
}

export default App;
