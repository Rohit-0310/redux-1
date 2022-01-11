
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "./store/actions"
import { Todos } from './components/Todos';


function App() {
    
  return (
    <div className="App">
        <Todos />
    </div>
  );
}

export default App;
