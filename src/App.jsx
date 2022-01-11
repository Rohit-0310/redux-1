
import './App.css';
import { useSelector } from "react-redux"


function App() {
    const counter = useSelector((state) => state.counter)
  return (
    <div className="App">
        <h1>Counter: {counter}</h1>
    </div>
  );
}

export default App;
