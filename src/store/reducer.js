import { ADD_TODO } from "./actionTypes";


 
 const init = 


export const reducer = (state, {type, payload}) => {
    switch(type) {
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, payload],
            };
            default:
                return state;            
    }
};