
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "./store/actions"


function App() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>Counter: {counter}</h1>
        <button 
        onClick={() => {

        }}
        >
            ADD_1
        </button>
    </div>
  );
}

export default App;
