import { createStore, combineReducers} from "redux";
import {  reducer as TodosReducer  } from "../features/Todos/reducer"; 
import { reducer as CounterReducer } from "../features/Counter/reducer";

// export const store = createStore(reducer);


let rootReducer=combineReducers({
    todosState:TodosReducer,
    counterState:CounterReducer
})
export const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());