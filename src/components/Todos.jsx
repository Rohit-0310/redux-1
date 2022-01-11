import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodoError, addTodoLoading, addTodoSuccess } from "../store/actions";


export const Todos = () => {
const [text, setText] = useState("")
const todos = useSelector((state)=>state)
const dispatch = useDispatch();
    return (
        <div>
            <input
             value={text}
             type="text" 
             placeholder="Enter ToDO"
             onChange={(e) => setText(e.target.value)} 
             />

             <button onClick={() => {
                 dispatch(addTodoLoading())
                 fetch("http:/localhost:3001/todos",{
                     method: "POST",
                     body: JSON.stringify({ status: false, title: text}),
                 })
                 .then((d) => d.json())
                 .then((res) =>{
                     dispatch(addTodoSuccess(res));
                 })
                 .catch((err)=>{
                     dispatch(addTodoError(err))                     ;
                 })
             }}>Add Todo</button>
             {todos.map}
        </div>
    );
};