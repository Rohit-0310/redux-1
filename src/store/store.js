import { createStore } from "redux";
import { reducer } from "../features/Todos/reducer"; 

export const store = createStore(reducer);
