import { useState } from "react"

export const Todos = () => {
const [text, setText] = useState("")
    return (
        <div>
            <input
             value={text}
             type="text" 
             placeholder="Enter ToDO"
             onChange={(e) => setText(e.target.value)} 
             />
             <button onClick={() => {
                 //
             }}>Add Todo</button>
             {}
        </div>
    );
};