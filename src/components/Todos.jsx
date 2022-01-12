import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodoError, 
         addTodoLoading, 
         addTodoSuccess, 
         getTodoLoading } from "../store/actions";



export const Todos = () => {
    const [text, setText] = useState("")
    const [loading, todos, error] = useSelector((state)=>({
        loading: state.loading,
        todos: state.todos,
        error: state.error,
    }));
    const dispatch = useDispatch();

    



    const addTodo = () => {
        dispatch(addTodoLoading())
             fetch("http:/localhost:3001/todos",{
                 method: "POST",
                 headers : {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify({ status: false, title: text}),
             })
             .then((d) => d.json())
                 .then((res) =>{
                     // success
                     dispatch(addTodoSuccess(res));
                 })
                 .catch((err)=>{
                     //    error
                     dispatch(addTodoError(err))                     ;
                 });
             };

    
        return loading ? (
        <div>Loading....</div>
        ) : error ? (
            <div>Something Went Wrong!</div>
        ) : (

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
                     headers : {
                         "Content-Type": "application/json",
                     },
                     body: JSON.stringify({ status: false, title: text}),
                 })
                 .then((d) => d.json())
                 .then((res) =>{
                     // success
                     dispatch(addTodoSuccess(res));
                 })
                 .catch((err)=>{
                     //    error
                     dispatch(addTodoError(err))                     ;
                 });
             };
             return loading ? (
                 <div>Loading....</div>
             ) : error ? (
                 <div></div>
             )
             }>Add Todo</button>
             {todos.map((e)=>(
                 <div>{e.title}</div>
             ))}
        </div>
    );
};